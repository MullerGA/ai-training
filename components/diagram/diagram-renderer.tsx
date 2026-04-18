import { DiagramCanvas } from "@/components/diagram/diagram-canvas";
import {
  Arrow,
  GroupFrame,
  LegendBlock,
  MessageBubble,
  NodeBox,
  Note,
  TitleBar,
} from "@/components/diagram/primitives";
import type { DiagramSpec } from "@/lib/diagram/types";

function DiagramBody({ spec }: { spec: DiagramSpec }) {
  const markerId = `${spec.id}-arrow-head`;

  return (
    <>
      <rect
        x={spec.viewBox[0]}
        y={spec.viewBox[1]}
        width={spec.viewBox[2]}
        height={spec.viewBox[3]}
        fill="var(--slate-50)"
      />

      {spec.titleBar ? (
        <TitleBar
          x={26}
          y={18}
          width={Math.min(spec.viewBox[2] - 52, 560)}
          height={64}
          text={spec.titleBar.text}
          tone={spec.titleBar.tone}
        />
      ) : null}

      {spec.sections.map((section) => (
        <GroupFrame key={section.id} section={section} />
      ))}

      {spec.nodes.map((node) =>
        node.primitive === "message" ? (
          <MessageBubble key={node.id} node={node} />
        ) : (
          <NodeBox key={node.id} node={node} />
        ),
      )}

      {spec.links.map((link) => (
        <Arrow key={link.id} link={link} markerId={markerId} />
      ))}

      {spec.annotations.map((annotation) => (
        <Note key={annotation.id} annotation={annotation} />
      ))}

      {spec.legends?.map((legend) => (
        <LegendBlock key={legend.id} legend={legend} />
      ))}
    </>
  );
}

export function FlowDiagram({ spec, className }: { spec: DiagramSpec; className?: string }) {
  return (
    <DiagramCanvas id={spec.id} title={spec.ariaLabel} viewBox={spec.viewBox} className={className}>
      <DiagramBody spec={spec} />
    </DiagramCanvas>
  );
}

export function LayerDiagram({ spec, className }: { spec: DiagramSpec; className?: string }) {
  return (
    <DiagramCanvas id={spec.id} title={spec.ariaLabel} viewBox={spec.viewBox} className={className}>
      <DiagramBody spec={spec} />
    </DiagramCanvas>
  );
}
