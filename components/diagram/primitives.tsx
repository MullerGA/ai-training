import { diagramDefaults, diagramToneStyles } from "@/lib/diagram/theme";
import type {
  DiagramAnnotation,
  DiagramLegend,
  DiagramLink,
  DiagramNode,
  DiagramSection,
  DiagramTone,
} from "@/lib/diagram/types";

function toneOrDefault(tone?: DiagramTone) {
  return diagramToneStyles[tone ?? "slate"];
}

function renderMultilineText({
  x,
  y,
  text,
  align = "center",
  lineHeight = 20,
  fill = "var(--slate-900)",
  fontSize = 16,
  fontWeight = 400,
}: {
  x: number;
  y: number;
  text: string;
  align?: "left" | "center";
  lineHeight?: number;
  fill?: string;
  fontSize?: number;
  fontWeight?: 400 | 500 | 600;
}) {
  const lines = text.split("\n");

  return (
    <text
      x={x}
      y={y}
      textAnchor={align === "center" ? "middle" : "start"}
      fill={fill}
      fontSize={fontSize}
      fontWeight={fontWeight}
      fontFamily={diagramDefaults.fontFamily}
    >
      {lines.map((line, index) => (
        <tspan key={`${x}-${y}-${line}-${line.length}`} x={x} dy={index === 0 ? 0 : lineHeight}>
          {line}
        </tspan>
      ))}
    </text>
  );
}

export function TitleBar({
  x,
  y,
  width,
  height,
  text,
  tone = "navy",
}: {
  x: number;
  y: number;
  width: number;
  height: number;
  text: string;
  tone?: DiagramTone;
}) {
  const palette = toneOrDefault(tone);

  return (
    <g>
      <rect x={x} y={y} width={width} height={height} rx={8} fill={palette.fill} />
      {renderMultilineText({
        x: x + width / 2,
        y: y + height / 2 + 12,
        text,
        fill: "#ffffff",
        fontSize: 24,
        fontWeight: 500,
      })}
    </g>
  );
}

export function GroupFrame({ section }: { section: DiagramSection }) {
  const palette = toneOrDefault(section.tone);
  const radius = section.radius ?? diagramDefaults.radius;

  return (
    <g>
      <rect
        x={section.x}
        y={section.y}
        width={section.width}
        height={section.height}
        rx={radius}
        fill={palette.fill}
        stroke={palette.stroke}
        strokeWidth={diagramDefaults.strokeWidth}
        strokeDasharray={section.dashed ? "8 8" : undefined}
      />
      {section.title ? (
        <text
          x={section.x + 16}
          y={section.y + 26}
          fill="var(--slate-900)"
          fontSize={22}
          fontWeight={500}
          fontFamily={diagramDefaults.fontFamily}
        >
          {section.title}
        </text>
      ) : null}
    </g>
  );
}

export function NodeBox({ node }: { node: DiagramNode }) {
  const palette = toneOrDefault(node.tone);
  const shape = node.shape ?? "rect";
  const radius = shape === "pill" ? node.height / 2 : diagramDefaults.radius;

  if (shape === "circle") {
    return (
      <g>
        <circle
          cx={node.x + node.width / 2}
          cy={node.y + node.height / 2}
          r={Math.min(node.width, node.height) / 2}
          fill={palette.fill}
          stroke={palette.stroke}
          strokeWidth={diagramDefaults.strokeWidth}
        />
        {renderMultilineText({
          x: node.x + node.width / 2,
          y: node.y + node.height / 2 + 8,
          text: node.label,
          fill: "var(--slate-900)",
          fontSize: 18,
        })}
      </g>
    );
  }

  return (
    <g>
      <rect
        x={node.x}
        y={node.y}
        width={node.width}
        height={node.height}
        rx={radius}
        fill={palette.fill}
        stroke={palette.stroke}
        strokeWidth={diagramDefaults.strokeWidth}
      />
      {renderMultilineText({
        x: node.textAlign === "left" ? node.x + 14 : node.x + node.width / 2,
        y: node.subtitle ? node.y + node.height / 2 - 4 : node.y + node.height / 2 + 7,
        align: node.textAlign ?? "center",
        text: node.label,
        fill: "var(--slate-900)",
        fontSize: 16,
        fontWeight: node.fontWeight ?? 400,
      })}
      {node.subtitle
        ? renderMultilineText({
            x: node.textAlign === "left" ? node.x + 14 : node.x + node.width / 2,
            y: node.y + node.height / 2 + 18,
            align: node.textAlign ?? "center",
            lineHeight: 16,
            text: node.subtitle,
            fill: "var(--slate-600)",
            fontSize: 12,
          })
        : null}
    </g>
  );
}

export function MessageBubble({ node }: { node: DiagramNode }) {
  return <NodeBox node={{ ...node, shape: "rect", primitive: "message" }} />;
}

export function Arrow({ link, markerId }: { link: DiagramLink; markerId: string }) {
  const [x1, y1] = link.from;
  const [x2, y2] = link.to;
  const curve = link.curve ?? 0;
  const path =
    curve === 0
      ? `M ${x1} ${y1} L ${x2} ${y2}`
      : `M ${x1} ${y1} Q ${x1 + curve} ${y1 + curve} ${x2} ${y2}`;

  return (
    <g>
      <path
        d={path}
        fill="none"
        stroke={diagramDefaults.arrow}
        strokeWidth={1.7}
        strokeDasharray={link.dashed ? "6 5" : undefined}
        markerEnd={`url(#${markerId})`}
      />
      {link.label ? (
        <text
          x={(x1 + x2) / 2}
          y={(y1 + y2) / 2 - 8}
          textAnchor="middle"
          fill="var(--slate-700)"
          fontSize={13}
          fontFamily={diagramDefaults.fontFamily}
        >
          {link.label}
        </text>
      ) : null}
    </g>
  );
}

export function LegendBlock({ legend }: { legend: DiagramLegend }) {
  return (
    <g>
      <rect
        x={legend.x}
        y={legend.y}
        width={legend.width}
        height={40 + legend.items.length * 22}
        rx={12}
        fill="white"
        stroke="var(--slate-300)"
        strokeWidth={diagramDefaults.strokeWidth}
      />
      <text
        x={legend.x + 12}
        y={legend.y + 24}
        fill="var(--slate-900)"
        fontSize={14}
        fontWeight={600}
        fontFamily={diagramDefaults.fontFamily}
      >
        {legend.title}
      </text>
      {legend.items.map((item, index) => {
        const palette = toneOrDefault(item.tone);

        return (
          <g key={item.id}>
            <rect
              x={legend.x + 12}
              y={legend.y + 32 + index * 22}
              width={10}
              height={10}
              rx={3}
              fill={palette.fill}
              stroke={palette.stroke}
            />
            <text
              x={legend.x + 28}
              y={legend.y + 41 + index * 22}
              fill="var(--slate-700)"
              fontSize={12}
              fontFamily={diagramDefaults.fontFamily}
            >
              {item.label}
            </text>
          </g>
        );
      })}
    </g>
  );
}

export function Note({ annotation }: { annotation: DiagramAnnotation }) {
  const palette = toneOrDefault(annotation.tone);

  return renderMultilineText({
    x: annotation.x,
    y: annotation.y,
    text: annotation.text,
    align: annotation.align ?? "left",
    fill: palette.text,
    fontSize: annotation.size ?? 14,
  });
}
