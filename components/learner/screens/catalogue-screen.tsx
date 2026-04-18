"use client";

import { ArrowRight, Clock3, Search, Sparkles } from "lucide-react";
import { useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { catalogueCategories, catalogueCourses } from "@/lib/learner/data";

export function CatalogueScreen() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<(typeof catalogueCategories)[number]>("Tous");

  const courses = catalogueCourses.filter((course) => {
    const categoryMatch = category === "Tous" || course.category === category;
    const queryMatch =
      query.length === 0 ||
      course.title.toLowerCase().includes(query.toLowerCase()) ||
      course.description.toLowerCase().includes(query.toLowerCase());

    return categoryMatch && queryMatch;
  });

  return (
    <div className="w-full space-y-6 px-4 py-8 md:px-6 xl:px-8">
      <section>
        <h1 className="page-title">Catalogue</h1>
        <p className="page-lead">
          Explore les parcours disponibles et reprends Ã  ton rythme. Toute ta progression est
          sauvegardÃ©e.
        </p>
      </section>

      <section className="space-y-3">
        <div className="relative">
          <Search className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-[var(--slate-400)]" />
          <Input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Rechercher un parcours, un sujet, un mot-clÃ©â€¦"
            className="h-11 pl-10 text-[15px]"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          {catalogueCategories.map((entry) => (
            <Button
              key={entry}
              variant={category === entry ? "default" : "outline"}
              size="sm"
              onClick={() => setCategory(entry)}
            >
              {entry}
            </Button>
          ))}
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {courses.map((course) => (
          <article key={course.id} className="panel-card overflow-hidden">
            <div className="relative flex h-28 items-end bg-gradient-to-br from-[var(--slate-50)] to-[var(--blue-50)] p-4">
              <div className="inline-flex size-9 items-center justify-center rounded-lg bg-white text-[var(--blue-600)] shadow-sm">
                <Sparkles className="size-4" />
              </div>
              {course.tag ? (
                <div className="absolute top-3 right-3">
                  <Badge variant={course.progress === 100 ? "success" : "info"}>
                    {course.tag}
                  </Badge>
                </div>
              ) : null}
            </div>
            <div className="space-y-3 p-4">
              <h3 className="text-base font-semibold text-[var(--slate-900)]">{course.title}</h3>
              <p className="min-h-10 text-sm text-[var(--slate-600)]">{course.description}</p>
              <p className="text-xs text-[var(--slate-500)]">
                {course.level} Â· <Clock3 className="mb-0.5 inline size-3" /> {course.duration}
              </p>
              {course.progress > 0 && course.progress < 100 ? (
                <Progress value={course.progress} gradient />
              ) : null}
            </div>
            <div className="flex items-center justify-between border-t border-[var(--slate-200)] bg-[var(--slate-50)] p-4">
              <span className="text-caption">
                {course.progress === 100
                  ? "ValidÃ©"
                  : course.progress > 0
                    ? `${course.progress}% complÃ©tÃ©`
                    : "3 modules"}
              </span>
              <Button
                variant={course.progress > 0 && course.progress < 100 ? "gradient" : "outline"}
                size="sm"
              >
                {course.progress === 100
                  ? "Revoir"
                  : course.progress > 0
                    ? "Reprendre"
                    : "Commencer"}
                <ArrowRight className="size-4" />
              </Button>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
