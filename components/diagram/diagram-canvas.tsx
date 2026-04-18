import type { ReactNode } from "react";

export function DiagramCanvas({
  id,
  title,
  viewBox,
  className,
  children,
}: {
  id: string;
  title: string;
  viewBox: [number, number, number, number];
  className?: string;
  children: ReactNode;
}) {
  const markerId = `${id}-arrow-head`;

  return (
    <svg
      viewBox={viewBox.join(" ")}
      className={className ?? "h-auto w-full"}
      role="img"
      aria-label={title}
      preserveAspectRatio="xMidYMin meet"
    >
      <defs>
        <marker
          id={markerId}
          markerWidth="8"
          markerHeight="8"
          refX="7"
          refY="3.5"
          orient="auto"
          markerUnits="strokeWidth"
        >
          <polygon points="0 0, 8 3.5, 0 7" fill="var(--slate-700)" />
        </marker>
      </defs>
      {children}
    </svg>
  );
}
