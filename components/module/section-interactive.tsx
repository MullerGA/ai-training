import type { ModuleSection } from "@/lib/content/types";
import { getWidgetDefinition, renderWidget } from "./widgets/registry";
import { WidgetPlaceholder } from "./widgets/widget-placeholder";

type SectionInteractiveProps = {
  section: Extract<ModuleSection, { kind: "interactive" }>;
};

export function SectionInteractive({ section }: SectionInteractiveProps) {
  const definition = getWidgetDefinition(section.widget.type);
  const widgetName = definition?.label ?? section.widget.type;

  return (
    <div className="panel-card p-6">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h2 className="text-lg font-semibold text-[var(--slate-900)]">Bloc interactif</h2>
        <span className="rounded-full bg-[var(--blue-50)] px-2.5 py-0.5 text-xs font-medium text-[var(--blue-700)]">
          {widgetName}
        </span>
      </div>
      <div className="mt-4 rounded-lg border border-dashed border-[var(--slate-300)] bg-[var(--slate-50)] p-4">
        {definition ? (
          renderWidget(section.widget, true)
        ) : (
          <WidgetPlaceholder widgetType={section.widget.type} />
        )}
      </div>
    </div>
  );
}
