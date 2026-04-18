export type DiagramTone = "navy" | "blue" | "sky" | "mint" | "amber" | "rose" | "sand" | "slate";

export type DiagramShape = "rect" | "pill" | "circle";

export type DiagramSection = {
  id: string;
  x: number;
  y: number;
  width: number;
  height: number;
  title?: string;
  tone?: DiagramTone;
  dashed?: boolean;
  radius?: number;
};

export type DiagramNode = {
  id: string;
  x: number;
  y: number;
  width: number;
  height: number;
  label: string;
  subtitle?: string;
  tone?: DiagramTone;
  shape?: DiagramShape;
  primitive?: "node" | "message";
  textAlign?: "left" | "center";
  fontWeight?: 400 | 500 | 600;
};

export type DiagramLink = {
  id: string;
  from: [number, number];
  to: [number, number];
  label?: string;
  curve?: number;
  dashed?: boolean;
};

export type DiagramAnnotation = {
  id: string;
  x: number;
  y: number;
  text: string;
  tone?: DiagramTone;
  size?: 12 | 14 | 16 | 18 | 20 | 24;
  align?: "left" | "center";
};

export type DiagramLegendItem = {
  id: string;
  label: string;
  tone?: DiagramTone;
};

export type DiagramLegend = {
  id: string;
  x: number;
  y: number;
  width: number;
  title: string;
  items: DiagramLegendItem[];
};

export type DiagramSpec = {
  id: string;
  title: string;
  ariaLabel: string;
  mode: "flow" | "layer";
  viewBox: [number, number, number, number];
  titleBar?: {
    text: string;
    tone?: DiagramTone;
  };
  sections: DiagramSection[];
  nodes: DiagramNode[];
  links: DiagramLink[];
  annotations: DiagramAnnotation[];
  legends?: DiagramLegend[];
  pattern?: "pipeline" | "comparison" | "augmented-chat" | "ecosystem";
  density?: "compact" | "detailed" | "mobile";
};

export type DiagramPattern = {
  id: DiagramSpec["pattern"];
  label: string;
  description: string;
  variants: {
    compact: DiagramSpec;
    detailed: DiagramSpec;
    mobile: DiagramSpec;
  };
};
