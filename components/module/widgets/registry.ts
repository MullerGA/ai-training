import { createElement, type ReactNode } from "react";
import type { InteractiveWidget } from "@/lib/content/types";
import { HypeCycleWidget } from "./hype-cycle-widget";
import { IcebergExplorerWidget } from "./iceberg-explorer-widget";
import { LabFunnelWidget } from "./lab-funnel/lab-funnel-widget";
import { TimelineWidget } from "./timeline-widget";

type WidgetType = InteractiveWidget["type"];

type WidgetPropsMap = {
  [K in WidgetType]: {
    widget: Extract<InteractiveWidget, { type: K }>;
    embedded?: boolean;
  };
};

type WidgetDefinitionMap = {
  [K in WidgetType]?: {
    label: string;
    render: (props: WidgetPropsMap[K]) => ReactNode;
  };
};

export const widgetRegistry: WidgetDefinitionMap = {
  "lab-funnel": {
    label: "Lab funnel",
    render: ({ widget, embedded }) =>
      createElement(LabFunnelWidget, { scenarioId: widget.scenarioId, embedded }),
  },
  "iceberg-explorer": {
    label: "Iceberg explorer",
    render: () => createElement(IcebergExplorerWidget),
  },
  timeline: {
    label: "Frise chronologique",
    render: () => createElement(TimelineWidget),
  },
  "hype-cycle": {
    label: "Hype cycle",
    render: () => createElement(HypeCycleWidget),
  },
};

export function getWidgetDefinition(type: WidgetType) {
  return widgetRegistry[type];
}

export function renderWidget(widget: InteractiveWidget, embedded = false) {
  switch (widget.type) {
    case "lab-funnel":
      return widgetRegistry["lab-funnel"]?.render({ widget, embedded }) ?? null;
    case "iceberg-explorer":
      return widgetRegistry["iceberg-explorer"]?.render({ widget, embedded }) ?? null;
    case "timeline":
      return widgetRegistry.timeline?.render({ widget, embedded }) ?? null;
    case "hype-cycle":
      return widgetRegistry["hype-cycle"]?.render({ widget, embedded }) ?? null;
    default:
      return null;
  }
}
