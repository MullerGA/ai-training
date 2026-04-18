import type { DiagramTone } from "@/lib/diagram/types";

export const diagramToneStyles: Record<
  DiagramTone,
  { fill: string; stroke: string; text: string }
> = {
  navy: {
    fill: "var(--slate-900)",
    stroke: "var(--slate-900)",
    text: "#ffffff",
  },
  blue: {
    fill: "var(--blue-100)",
    stroke: "var(--blue-500)",
    text: "var(--slate-900)",
  },
  sky: {
    fill: "#dff2ff",
    stroke: "var(--blue-500)",
    text: "var(--slate-900)",
  },
  mint: {
    fill: "#d9f6ea",
    stroke: "var(--green-500)",
    text: "var(--slate-900)",
  },
  amber: {
    fill: "#fef3c7",
    stroke: "var(--amber-500)",
    text: "var(--slate-900)",
  },
  rose: {
    fill: "#fde2e2",
    stroke: "#f08f8f",
    text: "var(--slate-900)",
  },
  sand: {
    fill: "#f3eee4",
    stroke: "#c7b89b",
    text: "var(--slate-900)",
  },
  slate: {
    fill: "var(--slate-100)",
    stroke: "var(--slate-300)",
    text: "var(--slate-800)",
  },
};

export const diagramDefaults = {
  strokeWidth: 1.5,
  radius: 12,
  fontFamily: "var(--font-inter), Inter, ui-sans-serif, system-ui, sans-serif",
  arrow: "var(--slate-700)",
};
