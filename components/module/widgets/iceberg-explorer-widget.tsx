"use client";

import { useState } from "react";

type IcebergLayer = {
  id: string;
  label: string;
  subtitle: string;
  y: number;
  height: number;
  examples: string[];
};

const icebergLayers: IcebergLayer[] = [
  {
    id: "applications",
    label: "Applications",
    subtitle: "Partie visible",
    y: 20,
    height: 52,
    examples: [
      "Assistants metier (SAV, support, productivite)",
      "Copilotes bureautiques et creation de contenu",
      "Apps verticales (sante, legal, retail)",
    ],
  },
  {
    id: "deployment",
    label: "AI Deployment",
    subtitle: "Inference, orchestration, observabilite",
    y: 90,
    height: 58,
    examples: [
      "Model serving et routage multi-modeles",
      "Guardrails, evaluation, monitoring",
      "Caches, vector stores, agents outilles",
    ],
  },
  {
    id: "training",
    label: "AI Training",
    subtitle: "Donnees, entrainement, fine-tuning",
    y: 158,
    height: 66,
    examples: [
      "Corpora et pipelines de preparation",
      "Entrainement distribue sur GPU clusters",
      "Post-training, alignment et red team",
    ],
  },
  {
    id: "datacenter",
    label: "Data Center",
    subtitle: "Compute, reseau, refroidissement",
    y: 238,
    height: 76,
    examples: [
      "GPU/HBM, interconnexions haut debit",
      "Capacite cloud + datacenters dedies",
      "Planification capacitaire long terme",
    ],
  },
  {
    id: "energy",
    label: "Energie",
    subtitle: "Socle contraignant de tout le reste",
    y: 328,
    height: 84,
    examples: [
      "Contrats d'electricite et securisation reseau",
      "Optimisation PUE et refroidissement",
      "Strategies nucleaire / renouvelable",
    ],
  },
];

export function IcebergExplorerWidget() {
  const [selectedId, setSelectedId] = useState(icebergLayers[0]?.id ?? "");
  const selectedLayer = icebergLayers.find((layer) => layer.id === selectedId) ?? icebergLayers[0];

  return (
    <div className="space-y-4">
      <div className="overflow-hidden rounded-lg border border-[var(--slate-200)] bg-white p-4">
        <div className="relative">
          <svg
            viewBox="0 0 520 440"
            className="h-auto w-full"
            role="img"
            aria-label="Iceberg interactif des couches IA"
          >
            <rect x="0" y="0" width="520" height="440" fill="#f8fafc" />
            <path d="M 0 84 Q 80 70 160 84 T 320 84 T 520 84 L 520 440 L 0 440 Z" fill="#dbeafe" />
            <line x1="0" y1="84" x2="520" y2="84" stroke="#93c5fd" strokeWidth="2" />

            {icebergLayers.map((layer, index) => {
              const isSelected = layer.id === selectedLayer?.id;
              const width = 360 - index * 36;
              const x = (520 - width) / 2;
              const radius = Math.max(8, 14 - index);

              return (
                <g key={layer.id}>
                  <rect
                    x={x}
                    y={layer.y}
                    width={width}
                    height={layer.height}
                    rx={radius}
                    fill={isSelected ? "#2563eb" : "#bfdbfe"}
                    stroke={isSelected ? "#1d4ed8" : "#60a5fa"}
                    strokeWidth={isSelected ? 3 : 1.5}
                  />
                  <text
                    x={260}
                    y={layer.y + layer.height / 2 - 5}
                    textAnchor="middle"
                    className={`${isSelected ? "fill-white" : "fill-[var(--slate-800)]"} text-[13px] font-semibold`}
                  >
                    {layer.label}
                  </text>
                  <text
                    x={260}
                    y={layer.y + layer.height / 2 + 12}
                    textAnchor="middle"
                    className={`${isSelected ? "fill-[var(--blue-100)]" : "fill-[var(--slate-600)]"} text-[10px]`}
                  >
                    {layer.subtitle}
                  </text>
                </g>
              );
            })}
          </svg>

          <div className="absolute inset-0">
            {icebergLayers.map((layer, index) => {
              const width = 360 - index * 36;
              const x = (520 - width) / 2;

              return (
                <button
                  key={`target-${layer.id}`}
                  type="button"
                  onClick={() => setSelectedId(layer.id)}
                  className="focus-ring absolute rounded-md"
                  style={{
                    left: `${(x / 520) * 100}%`,
                    top: `${(layer.y / 440) * 100}%`,
                    width: `${(width / 520) * 100}%`,
                    height: `${(layer.height / 440) * 100}%`,
                  }}
                >
                  <span className="sr-only">{layer.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {selectedLayer ? (
        <div className="rounded-lg border border-[var(--blue-200)] bg-[var(--blue-50)] p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-[var(--blue-700)]">
            Couche active
          </p>
          <p className="mt-1 text-sm font-semibold text-[var(--slate-900)]">
            {selectedLayer.label}
          </p>
          <p className="mt-1 text-sm text-[var(--slate-700)]">{selectedLayer.subtitle}</p>
          <ul className="mt-3 space-y-1 text-sm text-[var(--slate-700)]">
            {selectedLayer.examples.map((example) => (
              <li key={example}>- {example}</li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}
