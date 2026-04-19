"use client";

import { Check, Copy, Filter, Sparkles } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { learnerPromptTemplates } from "@/lib/learner/data";

const categoryLabels = {
  business: "Business",
  academic: "Académique",
  creative: "Créatif",
  technical: "Technique",
} as const;

const complexityLabels = {
  basic: "Basique",
  intermediate: "Intermédiaire",
  advanced: "Avancé",
} as const;

export function PromptLibrary() {
  const [selectedCategory, setSelectedCategory] = useState<"all" | keyof typeof categoryLabels>(
    "all",
  );
  const [selectedComplexity, setSelectedComplexity] = useState<
    "all" | keyof typeof complexityLabels
  >("all");
  const [selectedTag, setSelectedTag] = useState<string>("all");
  const [copiedPromptId, setCopiedPromptId] = useState<string | null>(null);

  const allTags = useMemo(() => {
    const tags = new Set<string>();
    for (const template of learnerPromptTemplates) {
      for (const tag of template.tags) {
        tags.add(tag);
      }
    }
    return Array.from(tags).sort((a, b) => a.localeCompare(b, "fr"));
  }, []);

  const filteredTemplates = useMemo(() => {
    return learnerPromptTemplates.filter((template) => {
      const matchesCategory = selectedCategory === "all" || template.category === selectedCategory;
      const matchesComplexity =
        selectedComplexity === "all" || template.complexity === selectedComplexity;
      const matchesTag = selectedTag === "all" || template.tags.includes(selectedTag);

      return matchesCategory && matchesComplexity && matchesTag;
    });
  }, [selectedCategory, selectedComplexity, selectedTag]);

  useEffect(() => {
    if (!copiedPromptId) {
      return;
    }

    const timeoutId = setTimeout(() => setCopiedPromptId(null), 1800);
    return () => clearTimeout(timeoutId);
  }, [copiedPromptId]);

  async function handleCopy(promptId: string, prompt: string) {
    try {
      await navigator.clipboard.writeText(prompt);
      setCopiedPromptId(promptId);
    } catch {
      setCopiedPromptId(null);
    }
  }

  return (
    <div className="mx-auto w-full max-w-6xl space-y-6">
      <section>
        <div className="mb-2 flex items-center gap-2">
          <Badge variant="info">Annexe</Badge>
          <Badge variant="outline">Bibliothèque évolutive</Badge>
        </div>
        <h1 className="page-title">Bibliothèque de prompts</h1>
        <p className="page-lead">
          Explore des templates réutilisables, filtre par catégorie, complexité et tags, puis copie
          la base pour l’adapter à ton contexte.
        </p>
      </section>

      <section className="panel-card p-4 md:p-5">
        <div className="mb-3 flex items-center gap-2">
          <Filter className="size-4 text-[var(--slate-600)]" />
          <h2 className="text-sm font-semibold text-[var(--slate-900)]">Filtres</h2>
        </div>
        <div className="grid gap-3 md:grid-cols-3">
          <label className="space-y-1 text-sm">
            <span className="text-caption">Catégorie</span>
            <select
              value={selectedCategory}
              onChange={(event) =>
                setSelectedCategory(event.target.value as "all" | keyof typeof categoryLabels)
              }
              className="focus-ring h-9 w-full rounded-md border border-[var(--slate-200)] bg-white px-3 text-sm text-[var(--slate-900)]"
            >
              <option value="all">Toutes</option>
              {Object.entries(categoryLabels).map(([value, label]) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </select>
          </label>

          <label className="space-y-1 text-sm">
            <span className="text-caption">Complexité</span>
            <select
              value={selectedComplexity}
              onChange={(event) =>
                setSelectedComplexity(event.target.value as "all" | keyof typeof complexityLabels)
              }
              className="focus-ring h-9 w-full rounded-md border border-[var(--slate-200)] bg-white px-3 text-sm text-[var(--slate-900)]"
            >
              <option value="all">Toutes</option>
              {Object.entries(complexityLabels).map(([value, label]) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </select>
          </label>

          <label className="space-y-1 text-sm">
            <span className="text-caption">Tag</span>
            <select
              value={selectedTag}
              onChange={(event) => setSelectedTag(event.target.value)}
              className="focus-ring h-9 w-full rounded-md border border-[var(--slate-200)] bg-white px-3 text-sm text-[var(--slate-900)]"
            >
              <option value="all">Tous</option>
              {allTags.map((tag) => (
                <option key={tag} value={tag}>
                  {tag}
                </option>
              ))}
            </select>
          </label>
        </div>
      </section>

      <section className="space-y-3">
        <p className="text-sm text-[var(--slate-600)]">
          {filteredTemplates.length} template(s) affiché(s).
        </p>

        {filteredTemplates.length === 0 ? (
          <div className="panel-card p-6 text-center text-sm text-[var(--slate-500)]">
            Aucun template ne correspond aux filtres actuels.
          </div>
        ) : (
          <div className="grid gap-4 md:grid-cols-2">
            {filteredTemplates.map((template) => {
              const isCopied = copiedPromptId === template.id;

              return (
                <article key={template.id} className="panel-card flex flex-col p-5">
                  <div className="mb-3 flex flex-wrap items-center gap-2">
                    <Badge variant="outline">{categoryLabels[template.category]}</Badge>
                    <Badge variant="secondary">{complexityLabels[template.complexity]}</Badge>
                    {template.tags.map((tag) => (
                      <Badge
                        key={`${template.id}-${tag}`}
                        variant="outline"
                        className="text-[11px]"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <h3 className="text-base font-semibold text-[var(--slate-900)]">
                    {template.title}
                  </h3>
                  <p className="mt-1 text-sm text-[var(--slate-600)]">{template.description}</p>

                  <pre className="mt-4 overflow-x-auto rounded-lg border border-[var(--slate-200)] bg-[var(--slate-50)] p-3 text-xs leading-relaxed whitespace-pre-wrap text-[var(--slate-700)]">
                    {template.prompt}
                  </pre>

                  <div className="mt-4 flex items-center justify-between gap-2">
                    <p className="text-caption inline-flex items-center gap-1">
                      <Sparkles className="size-3.5" />À adapter selon ton contexte
                    </p>
                    <Button
                      type="button"
                      size="sm"
                      variant={isCopied ? "secondary" : "outline"}
                      onClick={() => handleCopy(template.id, template.prompt)}
                    >
                      {isCopied ? <Check className="size-4" /> : <Copy className="size-4" />}
                      {isCopied ? "Copié" : "Copier"}
                    </Button>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </section>
    </div>
  );
}
