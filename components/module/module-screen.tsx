"use client";

import { CheckCircle2, Circle, PlayCircle } from "lucide-react";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { Progress } from "@/components/ui/progress";
import type { Module, ModuleSection, Parcours } from "@/lib/content/types";
import { useLearnerState } from "@/lib/storage/learner-state";
import { cn } from "@/lib/utils";
import { SectionConcept } from "./section-concept";
import { SectionExercise } from "./section-exercise";
import { SectionInteractive } from "./section-interactive";
import { SectionIntro } from "./section-intro";
import { SectionRecap } from "./section-recap";

type ModuleScreenProps = {
  parcours: Parcours;
  module: Module;
};

function getSectionLabel(section: ModuleSection, index: number): string {
  if (section.kind === "intro") return section.title ?? "Introduction";
  if (section.kind === "concept") return section.title;
  if (section.kind === "interactive") return `Interactif ${index + 1}`;
  if (section.kind === "exercise") return "Exercice";
  return section.title;
}

function getProgressFromVisited(visitedIndex: number, sectionCount: number): number {
  if (sectionCount === 0) return 0;
  const viewed = Math.max(0, Math.min(sectionCount, visitedIndex + 1));
  return Math.round((viewed / sectionCount) * 100);
}

function getVisitedFromProgress(progress: number, sectionCount: number): number {
  if (sectionCount === 0 || progress <= 0) return 0;
  return Math.min(sectionCount - 1, Math.ceil((progress / 100) * sectionCount) - 1);
}

function slugify(value: string): string {
  return value
    .normalize("NFD")
    .replaceAll(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replaceAll(/[^a-z0-9]+/g, "-")
    .replaceAll(/^-+|-+$/g, "");
}

function renderSection(section: ModuleSection) {
  switch (section.kind) {
    case "intro":
      return <SectionIntro section={section} />;
    case "concept":
      return <SectionConcept section={section} />;
    case "interactive":
      return <SectionInteractive section={section} />;
    case "exercise":
      return <SectionExercise section={section} />;
    case "recap":
      return <SectionRecap section={section} />;
    default:
      return null;
  }
}

export function ModuleScreen({ parcours, module }: ModuleScreenProps) {
  const { state, markModuleComplete, setLastVisited, setModuleProgress } = useLearnerState();
  const sections = module.sections;
  const sectionCount = sections.length;
  const moduleKey = `${parcours.slug}/${module.slug}`;
  const moduleIndex = parcours.modules.findIndex((item) => item.slug === module.slug);
  const previousModule = moduleIndex > 0 ? parcours.modules[moduleIndex - 1] : undefined;
  const nextModule =
    moduleIndex >= 0 && moduleIndex < parcours.modules.length - 1
      ? parcours.modules[moduleIndex + 1]
      : undefined;

  const [activeSectionIndex, setActiveSectionIndex] = useState(0);
  const [maxVisitedSectionIndex, setMaxVisitedSectionIndex] = useState(0);
  const sectionRefs = useRef<Array<HTMLElement | null>>([]);

  const storedProgress = state.moduleProgress[moduleKey] ?? 0;
  const isCompleted = state.completedModules.includes(moduleKey);

  const derivedProgress = useMemo(
    () => getProgressFromVisited(maxVisitedSectionIndex, sectionCount),
    [maxVisitedSectionIndex, sectionCount],
  );

  const sectionDescriptors = useMemo(() => {
    const counts = new Map<string, number>();
    return sections.map((section, index) => {
      const label = getSectionLabel(section, index);
      const base =
        section.kind === "interactive"
          ? `${section.kind}-${section.widget.type}`
          : `${section.kind}-${label}`;
      const slugBase = slugify(base);
      const seen = (counts.get(slugBase) ?? 0) + 1;
      counts.set(slugBase, seen);

      return {
        id: `${slugBase}-${seen}`,
        index,
        label,
        section,
      };
    });
  }, [sections]);

  useEffect(() => {
    setLastVisited(parcours.slug, module.slug);
  }, [module.slug, parcours.slug, setLastVisited]);

  useEffect(() => {
    const visitedFromStored = getVisitedFromProgress(storedProgress, sectionCount);
    setMaxVisitedSectionIndex((prev) => Math.max(prev, visitedFromStored));
  }, [sectionCount, storedProgress]);

  useEffect(() => {
    if (derivedProgress > storedProgress) {
      setModuleProgress(moduleKey, derivedProgress);
    }
  }, [derivedProgress, moduleKey, setModuleProgress, storedProgress]);

  useEffect(() => {
    if (sectionCount === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visibleEntries.length === 0) return;

        const target = visibleEntries[0]?.target as HTMLElement | undefined;
        const rawIndex = target?.dataset.sectionIndex;
        if (!rawIndex) return;

        const index = Number.parseInt(rawIndex, 10);
        if (Number.isNaN(index)) return;

        setActiveSectionIndex(index);
        setMaxVisitedSectionIndex((prev) => Math.max(prev, index));
      },
      {
        root: null,
        threshold: 0.45,
        rootMargin: "0px 0px -30% 0px",
      },
    );

    sectionRefs.current.forEach((element) => {
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [sectionCount]);

  return (
    <main className="px-4 py-8 md:px-8">
      <div className="mx-auto max-w-6xl">
        <nav
          className="mb-6 flex items-center gap-1.5 text-sm text-[var(--slate-500)]"
          aria-label="Fil d'Ariane"
        >
          <Link href="/formations" className="transition-colors hover:text-[var(--slate-900)]">
            Formations
          </Link>
          <span aria-hidden="true">{">"}</span>
          <Link
            href={`/formations/${parcours.slug}`}
            className="transition-colors hover:text-[var(--slate-900)]"
          >
            {parcours.title}
          </Link>
          <span aria-hidden="true">{">"}</span>
          <span className="text-[var(--slate-900)]">{module.title}</span>
        </nav>

        <header className="space-y-2">
          <p className="text-caption">
            Module {module.index} | {module.estimatedMinutes} min
          </p>
          <h1 className="page-title">{module.title}</h1>
          <p className="page-lead">{module.summary}</p>
        </header>

        <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_19rem]">
          <article className="space-y-4">
            <section className="panel-card p-5">
              <div className="mb-3 flex items-center justify-between text-sm">
                <span className="font-medium text-[var(--slate-700)]">Progression du module</span>
                <span className="text-caption">{Math.max(storedProgress, derivedProgress)}%</span>
              </div>
              <Progress value={Math.max(storedProgress, derivedProgress)} />
            </section>

            {sectionDescriptors.map((descriptor) => (
              <section
                key={descriptor.id}
                id={descriptor.id}
                ref={(element) => {
                  sectionRefs.current[descriptor.index] = element;
                }}
                data-section-index={descriptor.index}
                aria-label={descriptor.label}
              >
                {renderSection(descriptor.section)}
              </section>
            ))}

            <section className="panel-card p-6">
              <h2 className="text-lg font-semibold text-[var(--slate-900)]">Fin du module</h2>
              <p className="mt-2 text-sm text-[var(--slate-600)]">
                Marque ce module comme termine pour mettre a jour ta progression.
              </p>
              <div className="mt-5 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={() => markModuleComplete(moduleKey)}
                  disabled={isCompleted}
                  className={cn(
                    "inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold transition-colors focus-ring",
                    isCompleted
                      ? "cursor-not-allowed bg-[var(--slate-200)] text-[var(--slate-500)]"
                      : "bg-[var(--blue-500)] text-white hover:bg-[var(--blue-600)]",
                  )}
                >
                  <CheckCircle2 className="size-4" />
                  {isCompleted ? "Module deja termine" : "Marquer comme termine"}
                </button>

                {nextModule ? (
                  <Link
                    href={`/formations/${parcours.slug}/${nextModule.slug}`}
                    className="inline-flex items-center gap-2 rounded-lg border border-[var(--slate-200)] px-4 py-2.5 text-sm font-medium text-[var(--slate-700)] transition-colors hover:bg-[var(--slate-50)] focus-ring"
                  >
                    Module suivant: {nextModule.title}
                  </Link>
                ) : (
                  <Link
                    href={`/formations/${parcours.slug}`}
                    className="inline-flex items-center gap-2 rounded-lg border border-[var(--slate-200)] px-4 py-2.5 text-sm font-medium text-[var(--slate-700)] transition-colors hover:bg-[var(--slate-50)] focus-ring"
                  >
                    Revenir au parcours
                  </Link>
                )}
              </div>
            </section>
          </article>

          <aside className="space-y-4 lg:sticky lg:top-24 lg:self-start">
            <section className="panel-card p-4">
              <h2 className="text-sm font-semibold text-[var(--slate-900)]">Plan du module</h2>
              <ol className="mt-3 space-y-2">
                {sectionDescriptors.map((descriptor) => {
                  const isActive = activeSectionIndex === descriptor.index;
                  const isVisited = maxVisitedSectionIndex >= descriptor.index;

                  return (
                    <li key={`toc-${descriptor.id}`}>
                      <a
                        href={`#${descriptor.id}`}
                        className={cn(
                          "flex items-start gap-2 rounded-md px-2 py-1.5 text-sm transition-colors",
                          isActive
                            ? "bg-[var(--blue-50)] text-[var(--blue-700)]"
                            : "text-[var(--slate-600)] hover:bg-[var(--slate-50)]",
                        )}
                      >
                        {isVisited ? (
                          <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-[var(--green-600)]" />
                        ) : (
                          <Circle className="mt-0.5 size-4 shrink-0 text-[var(--slate-300)]" />
                        )}
                        <span>{descriptor.label}</span>
                      </a>
                    </li>
                  );
                })}
              </ol>
            </section>

            <section className="panel-card p-4">
              <h2 className="text-sm font-semibold text-[var(--slate-900)]">Modules voisins</h2>
              <div className="mt-3 space-y-2">
                {previousModule ? (
                  <Link
                    href={`/formations/${parcours.slug}/${previousModule.slug}`}
                    className="block rounded-md border border-[var(--slate-200)] px-3 py-2 text-sm text-[var(--slate-700)] transition-colors hover:bg-[var(--slate-50)] focus-ring"
                  >
                    <p className="text-caption">Precedent</p>
                    <p className="font-medium">{previousModule.title}</p>
                  </Link>
                ) : null}

                <div className="rounded-md border border-[var(--blue-200)] bg-[var(--blue-50)] px-3 py-2">
                  <p className="text-caption">En cours</p>
                  <p className="text-sm font-medium text-[var(--blue-700)]">{module.title}</p>
                </div>

                {nextModule ? (
                  <Link
                    href={`/formations/${parcours.slug}/${nextModule.slug}`}
                    className="block rounded-md border border-[var(--slate-200)] px-3 py-2 text-sm text-[var(--slate-700)] transition-colors hover:bg-[var(--slate-50)] focus-ring"
                  >
                    <p className="text-caption">Suivant</p>
                    <p className="font-medium">{nextModule.title}</p>
                  </Link>
                ) : (
                  <Link
                    href={`/formations/${parcours.slug}`}
                    className="block rounded-md border border-[var(--slate-200)] px-3 py-2 text-sm text-[var(--slate-700)] transition-colors hover:bg-[var(--slate-50)] focus-ring"
                  >
                    <p className="text-caption">Fin de parcours</p>
                    <p className="font-medium">Retour au detail du parcours</p>
                  </Link>
                )}
              </div>
            </section>

            <div className="flex items-center gap-2 rounded-lg bg-[var(--slate-50)] p-3 text-xs text-[var(--slate-600)]">
              <PlayCircle className="size-4 text-[var(--blue-600)]" />
              Progression calculee sur la derniere section atteinte.
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
