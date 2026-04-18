import { Layers3, Sparkles } from "lucide-react";

import { FlowDiagram, LayerDiagram } from "@/components/diagram/diagram-renderer";
import { Badge } from "@/components/ui/badge";
import { diagramPatterns, diagramSlides } from "@/lib/diagram/specs";
import type { DiagramSpec } from "@/lib/diagram/types";

function DiagramPreview({ spec }: { spec: DiagramSpec }) {
  const DiagramComponent = spec.mode === "layer" ? LayerDiagram : FlowDiagram;

  return (
    <article className="panel-card overflow-hidden">
      <div className="border-b border-[var(--slate-200)] bg-[var(--slate-50)] px-4 py-3">
        <h3 className="text-sm font-semibold text-[var(--slate-900)]">{spec.title}</h3>
        <p className="text-caption mt-1">{spec.ariaLabel}</p>
      </div>
      <div className="bg-white p-3">
        <DiagramComponent
          spec={spec}
          className="h-auto w-full rounded-lg border border-[var(--slate-200)]"
        />
      </div>
    </article>
  );
}

export function DiagramCatalogScreen() {
  return (
    <div className="w-full space-y-8 px-4 py-8 md:px-6 xl:px-8">
      <section>
        <div className="mb-2 flex items-center gap-2">
          <Badge variant="gradient">Kit SVG réutilisable</Badge>
          <span className="text-caption">Specs data-driven + patterns adaptatifs</span>
        </div>
        <h1 className="page-title">Diagrammes IA (SVG propres)</h1>
        <p className="page-lead">
          Cette galerie remplace les slides image par des schémas SVG accessibles et maintenables.
          Chaque rendu est piloté par des données (`sections`, `nodes`, `links`, `annotations`) et
          réutilise un socle de primitives.
        </p>
      </section>

      <section className="panel-card p-5">
        <h2 className="flex items-center gap-2 text-lg font-semibold text-[var(--slate-900)]">
          <Sparkles className="size-4 text-[var(--blue-600)]" />
          Primitives publiques
        </h2>
        <p className="mt-2 text-sm text-[var(--slate-600)]">
          `TitleBar`, `NodeBox`, `MessageBubble`, `GroupFrame`, `Arrow`, `LegendBlock`
        </p>
        <p className="mt-1 text-sm text-[var(--slate-600)]">
          API de rendu: `DiagramCanvas`, `FlowDiagram`, `LayerDiagram`
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="flex items-center gap-2 text-2xl font-semibold text-[var(--slate-900)]">
          <Layers3 className="size-5 text-[var(--blue-600)]" />8 planches converties
        </h2>
        <div className="grid gap-4 xl:grid-cols-2">
          {diagramSlides.map((spec) => (
            <DiagramPreview key={spec.id} spec={spec} />
          ))}
        </div>
      </section>

      <section className="space-y-5">
        <h2 className="text-2xl font-semibold text-[var(--slate-900)]">
          Catalogue de patterns (compact, détaillé, mobile)
        </h2>
        {diagramPatterns.map((pattern) => (
          <article key={pattern.id} className="panel-card p-4">
            <h3 className="text-base font-semibold text-[var(--slate-900)]">{pattern.label}</h3>
            <p className="mt-1 text-sm text-[var(--slate-600)]">{pattern.description}</p>
            <div className="mt-4 grid gap-4 xl:grid-cols-3">
              <DiagramPreview spec={pattern.variants.compact} />
              <DiagramPreview spec={pattern.variants.detailed} />
              <DiagramPreview spec={pattern.variants.mobile} />
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
