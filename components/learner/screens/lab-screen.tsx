"use client";

import { useMemo, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { learnerLabScenarios } from "@/lib/learner/data";
import { runFunnel } from "@/lib/learner/funnel";

type FunnelStageProps = {
  title: string;
  items: Array<{ token: string; probability: number; description: string }>;
};

function FunnelStage({ title, items }: FunnelStageProps) {
  return (
    <article className="panel-card p-4">
      <h3 className="text-sm font-semibold text-[var(--slate-900)]">{title}</h3>
      <div className="mt-3 space-y-2">
        {items.map((item) => (
          <div key={item.token}>
            <div className="mb-1 flex items-center justify-between text-xs text-[var(--slate-600)]">
              <span className="font-semibold text-[var(--slate-900)]">{item.token}</span>
              <span>{(item.probability * 100).toFixed(1)}%</span>
            </div>
            <div className="h-2 rounded-full bg-[var(--slate-100)]">
              <div
                className="h-full rounded-full bg-[var(--blue-500)]"
                style={{ width: `${Math.max(2, item.probability * 100)}%` }}
              />
            </div>
            <p className="mt-1 text-xs text-[var(--slate-500)]">{item.description}</p>
          </div>
        ))}
      </div>
    </article>
  );
}

export function LabScreen() {
  const [scenarioId, setScenarioId] = useState(learnerLabScenarios[0].id);
  const [temperature, setTemperature] = useState(0.7);
  const [topK, setTopK] = useState(5);
  const [topP, setTopP] = useState(0.8);

  const scenario =
    learnerLabScenarios.find((entry) => entry.id === scenarioId) ?? learnerLabScenarios[0];

  const funnel = useMemo(() => {
    return runFunnel(scenario.predictions, { temperature, topK, topP });
  }, [scenario, temperature, topK, topP]);

  return (
    <div className="w-full space-y-6 px-4 py-8 md:px-6 xl:px-8">
      <section>
        <div className="mb-2 flex items-center gap-2">
          <Badge variant="info">Lab interactif</Badge>
          <Badge variant="outline">Déterministe</Badge>
        </div>
        <h1 className="page-title">Entonnoir de décision LLM</h1>
        <p className="page-lead">
          Explore l'impact de <strong>temperature</strong>, <strong>top-k</strong> et{" "}
          <strong>top-p</strong>
          sur la distribution des tokens, sans aléatoire caché.
        </p>
      </section>

      <section className="panel-card p-5">
        <h2 className="text-sm font-semibold text-[var(--slate-900)]">Scénarios</h2>
        <div className="mt-3 flex flex-wrap gap-2">
          {learnerLabScenarios.map((entry) => (
            <Button
              key={entry.id}
              variant={entry.id === scenario.id ? "default" : "outline"}
              size="sm"
              onClick={() => setScenarioId(entry.id)}
            >
              {entry.title}
            </Button>
          ))}
        </div>
        <p className="mt-3 text-sm text-[var(--slate-600)]">{scenario.prompt}</p>
        <p className="text-caption mt-1">{scenario.description}</p>

        <div className="mt-4 rounded-lg border border-[var(--slate-200)] bg-[var(--slate-50)] p-3">
          <p className="text-xs font-semibold uppercase tracking-wide text-[var(--slate-500)]">
            Tokenisation du prompt
          </p>
          <div className="mt-2 flex flex-wrap gap-2">
            {scenario.inputTokens.flatMap((word) =>
              word.tokens.map((token) => (
                <span
                  key={`${word.word}-${token}`}
                  className="rounded-full border border-[var(--slate-200)] bg-white px-3 py-1 text-xs"
                >
                  <strong>{token}</strong> ({word.word})
                </span>
              )),
            )}
          </div>
        </div>
      </section>

      <section className="grid gap-4 xl:grid-cols-3">
        <article className="panel-card p-4 xl:col-span-1">
          <h2 className="text-sm font-semibold text-[var(--slate-900)]">Paramètres</h2>
          <div className="mt-4 space-y-4">
            <label className="block text-sm text-[var(--slate-700)]">
              Temperature: <strong>{temperature.toFixed(2)}</strong>
              <input
                type="range"
                min={0.1}
                max={2}
                step={0.1}
                value={temperature}
                onChange={(event) => setTemperature(Number(event.target.value))}
                className="mt-2 w-full"
              />
            </label>

            <label className="block text-sm text-[var(--slate-700)]">
              Top-K: <strong>{topK}</strong>
              <input
                type="range"
                min={1}
                max={10}
                step={1}
                value={topK}
                onChange={(event) => setTopK(Number(event.target.value))}
                className="mt-2 w-full"
              />
            </label>

            <label className="block text-sm text-[var(--slate-700)]">
              Top-P: <strong>{topP.toFixed(2)}</strong>
              <input
                type="range"
                min={0.1}
                max={1}
                step={0.05}
                value={topP}
                onChange={(event) => setTopP(Number(event.target.value))}
                className="mt-2 w-full"
              />
            </label>
          </div>
          <div className="mt-4 rounded-lg bg-[var(--blue-50)] p-3 text-sm text-[var(--slate-700)]">
            <p className="font-semibold text-[var(--slate-900)]">Token sélectionné</p>
            <p>
              {funnel.selected
                ? `${funnel.selected.token} (${(funnel.selected.probability * 100).toFixed(1)}%)`
                : "Aucun token sélectionné"}
            </p>
          </div>
        </article>

        <div className="grid gap-4 xl:col-span-2 xl:grid-cols-3">
          <FunnelStage title="Après Temperature" items={funnel.afterTemperature} />
          <FunnelStage title="Après Top-K" items={funnel.afterTopK} />
          <FunnelStage title="Après Top-P" items={funnel.afterTopP} />
        </div>
      </section>
    </div>
  );
}
