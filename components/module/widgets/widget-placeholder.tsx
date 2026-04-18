import type { InteractiveWidget } from "@/lib/content/types";

type WidgetPlaceholderProps = {
  widgetType: InteractiveWidget["type"];
};

export function WidgetPlaceholder({ widgetType }: WidgetPlaceholderProps) {
  return (
    <div className="rounded-lg border border-dashed border-[var(--slate-300)] bg-[var(--slate-50)] p-4">
      <p className="text-sm font-medium text-[var(--slate-700)]">
        Widget "{widgetType}" non livre dans ce lot.
      </p>
      <p className="mt-1 text-xs text-[var(--slate-500)]">
        Placeholder volontaire pour respecter le sequencing des lots.
      </p>
    </div>
  );
}
