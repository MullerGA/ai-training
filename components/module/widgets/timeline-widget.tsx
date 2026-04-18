"use client";

import { useMemo, useState } from "react";
import { learnerTimeline } from "@/lib/learner/data";

export function TimelineWidget() {
  const initialMilestone = useMemo(
    () => learnerTimeline.find((milestone) => milestone.era === "current") ?? learnerTimeline[0],
    [],
  );
  const [selectedId, setSelectedId] = useState(initialMilestone?.id ?? "");
  const selectedMilestone =
    learnerTimeline.find((milestone) => milestone.id === selectedId) ?? initialMilestone;

  return (
    <div className="space-y-4">
      <div className="rounded-lg border border-[var(--slate-200)] bg-[var(--slate-50)] p-4">
        <p className="text-xs font-semibold uppercase tracking-wide text-[var(--slate-500)]">
          Frise des innovations IA
        </p>
        <div className="mt-4 overflow-x-auto pb-2">
          <div className="relative min-w-[640px]">
            <div
              className="absolute top-[22px] left-0 h-0.5 w-full bg-[var(--slate-200)]"
              aria-hidden="true"
            />
            <ol className="relative grid grid-cols-7 gap-2">
              {learnerTimeline.map((milestone) => {
                const isSelected = milestone.id === selectedMilestone?.id;
                const toneClass =
                  milestone.era === "projection"
                    ? "border-[var(--amber-500)] text-[var(--amber-500)]"
                    : milestone.era === "current"
                      ? "border-[var(--green-600)] text-[var(--green-600)]"
                      : "border-[var(--blue-600)] text-[var(--blue-600)]";

                return (
                  <li key={milestone.id} className="flex flex-col items-center gap-2 text-center">
                    <button
                      type="button"
                      onClick={() => setSelectedId(milestone.id)}
                      aria-pressed={isSelected}
                      className={`focus-ring inline-flex size-5 items-center justify-center rounded-full border-2 bg-white transition-transform ${
                        isSelected ? `${toneClass} scale-110` : "border-[var(--slate-300)]"
                      }`}
                    >
                      <span className="sr-only">{milestone.label}</span>
                    </button>
                    <p className="text-xs font-semibold text-[var(--slate-700)]">
                      {milestone.year}
                    </p>
                    <p className="text-xs text-[var(--slate-600)]">{milestone.label}</p>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </div>

      {selectedMilestone ? (
        <div className="rounded-lg border border-[var(--blue-200)] bg-[var(--blue-50)] p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-[var(--blue-700)]">
            Point selectionne
          </p>
          <p className="mt-1 text-sm font-semibold text-[var(--slate-900)]">
            {selectedMilestone.year} - {selectedMilestone.label}
          </p>
          <p className="mt-2 text-sm text-[var(--slate-700)]">{selectedMilestone.description}</p>
        </div>
      ) : null}
    </div>
  );
}
