"use client";

import { useState } from "react";

type HypePoint = {
  id: string;
  label: string;
  x: number;
  y: number;
  phase: string;
  description: string;
};

const hypePoints: HypePoint[] = [
  {
    id: "gen-ai",
    label: "Gen-AI",
    x: 110,
    y: 180,
    phase: "Pic des attentes",
    description: "Adoption rapide, forte valeur percue, beaucoup d'experimentations en entreprise.",
  },
  {
    id: "agentic-ai",
    label: "Agentic-AI",
    x: 200,
    y: 108,
    phase: "Pic des attentes",
    description:
      "Montre un fort potentiel, mais les standards d'orchestration sont encore en cours.",
  },
  {
    id: "ia-classique",
    label: "IA classique",
    x: 308,
    y: 214,
    phase: "Pente d'industrialisation",
    description:
      "Use cases matures, ROI plus previsible, integration plus simple dans les workflows.",
  },
  {
    id: "agi",
    label: "AGI",
    x: 78,
    y: 252,
    phase: "Emergence",
    description:
      "Concept prospectif avec forte incertitude technique, economique et reglementaire.",
  },
];

export function HypeCycleWidget() {
  const [selectedId, setSelectedId] = useState(hypePoints[1]?.id ?? hypePoints[0]?.id ?? "");
  const selected = hypePoints.find((point) => point.id === selectedId) ?? hypePoints[0];

  return (
    <div className="space-y-4">
      <div className="rounded-lg border border-[var(--slate-200)] bg-white p-4">
        <div className="relative">
          <svg
            viewBox="0 0 420 280"
            className="h-auto w-full"
            role="img"
            aria-label="Courbe hype cycle avec points cliquables"
          >
            <defs>
              <linearGradient id="hypeFill" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#93c5fd" stopOpacity="0.24" />
                <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.16" />
              </linearGradient>
            </defs>

            <path
              d="M 30 250 C 80 220 110 130 160 90 C 200 60 250 90 265 130 C 288 190 315 226 385 230"
              fill="none"
              stroke="#1e293b"
              strokeWidth="3"
            />
            <path
              d="M 30 250 C 80 220 110 130 160 90 C 200 60 250 90 265 130 C 288 190 315 226 385 230 L 385 255 L 30 255 Z"
              fill="url(#hypeFill)"
            />

            <line x1="30" y1="255" x2="388" y2="255" stroke="#cbd5e1" strokeWidth="2" />
            <text x="30" y="272" className="fill-[var(--slate-500)] text-[10px]">
              Innovation trigger
            </text>
            <text x="360" y="272" className="fill-[var(--slate-500)] text-[10px]">
              Plateau
            </text>

            {hypePoints.map((point) => {
              const isSelected = point.id === selected?.id;
              return (
                <g key={point.id}>
                  <circle
                    cx={point.x}
                    cy={point.y}
                    r={isSelected ? 9 : 7}
                    fill={isSelected ? "#1d4ed8" : "#2563eb"}
                    stroke="#eff6ff"
                    strokeWidth="2"
                  />
                  <text
                    x={point.x + 10}
                    y={point.y - 10}
                    className="fill-[var(--slate-700)] text-[11px] font-semibold"
                  >
                    {point.label}
                  </text>
                </g>
              );
            })}
          </svg>

          <div className="absolute inset-0">
            {hypePoints.map((point) => (
              <button
                key={`target-${point.id}`}
                type="button"
                onClick={() => setSelectedId(point.id)}
                className="focus-ring absolute size-8 -translate-x-1/2 -translate-y-1/2 rounded-full"
                style={{
                  left: `${(point.x / 420) * 100}%`,
                  top: `${(point.y / 280) * 100}%`,
                }}
              >
                <span className="sr-only">
                  {point.label} - {point.phase}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {selected ? (
        <div className="rounded-lg border border-[var(--amber-200)] bg-amber-50 p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-amber-700">
            Lecture du point
          </p>
          <p className="mt-1 text-sm font-semibold text-[var(--slate-900)]">{selected.label}</p>
          <p className="mt-1 text-sm text-[var(--slate-700)]">Phase: {selected.phase}</p>
          <p className="mt-2 text-sm text-[var(--slate-700)]">{selected.description}</p>
        </div>
      ) : null}
    </div>
  );
}
