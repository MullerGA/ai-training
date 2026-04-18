"use client";

import { ChevronRight, CircleHelp, RefreshCw, SlidersHorizontal } from "lucide-react";
import { type CSSProperties, useCallback, useEffect, useMemo, useRef, useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Slider } from "@/components/ui/slider";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { learnerLabScenarios } from "@/lib/learner/data";
import { runFunnel } from "@/lib/learner/funnel";
import type { LabPrediction } from "@/lib/learner/types";

type FunnelStageProps = {
  title: string;
  items: LabPrediction[];
  color: string;
};

type ParameterControlProps = {
  id: string;
  label: string;
  valueLabel: string;
  description: string;
  min: number;
  max: number;
  step: number;
  value: number;
  onValueChange: (value: number) => void;
};

type TokenDot = {
  key: string;
  x: number;
  y: number;
  title: string;
  probability: number;
};

const sampleWeightedToken = (items: LabPrediction[]) => {
  if (items.length === 0) {
    return null;
  }

  const total = items.reduce((acc, item) => acc + item.probability, 0);
  if (total <= 0) {
    return items[0] ?? null;
  }

  let cursor = Math.random() * total;
  for (const item of items) {
    cursor -= item.probability;
    if (cursor <= 0) {
      return item;
    }
  }

  return items[items.length - 1] ?? null;
};

const sortByProbability = (items: LabPrediction[]) => {
  return [...items].sort((a, b) => {
    const diff = b.probability - a.probability;
    if (Math.abs(diff) > 1e-9) {
      return diff;
    }
    return a.token.localeCompare(b.token, "fr");
  });
};

const isVisibleProbability = (probability: number) => {
  return probability * 100 >= 0.05;
};

const getFunnelGeometry = (temperature: number, topK: number, topP: number) => {
  const topWidth = 300 * (0.5 + temperature / 2);
  const middleWidth = Math.min(topWidth * 0.8, 240 * (topK / 10));
  const bottomWidth = Math.min(middleWidth * 0.8, 180 * topP);
  const outletWidth = 58;

  const path = `
    M ${200 - topWidth / 2},50
    C ${200 - topWidth / 2},50 ${200 - middleWidth / 2},150 ${200 - middleWidth / 2},150
    L ${200 + middleWidth / 2},150
    C ${200 + middleWidth / 2},150 ${200 + topWidth / 2},50 ${200 + topWidth / 2},50 Z

    M ${200 - middleWidth / 2},150
    C ${200 - middleWidth / 2},150 ${200 - bottomWidth / 2},250 ${200 - bottomWidth / 2},250
    L ${200 + bottomWidth / 2},250
    C ${200 + bottomWidth / 2},250 ${200 + middleWidth / 2},150 ${200 + middleWidth / 2},150 Z

    M ${200 - bottomWidth / 2},250
    C ${200 - bottomWidth / 2},250 ${200 - outletWidth / 2},350 ${200 - outletWidth / 2},350
    L ${200 + outletWidth / 2},350
    C ${200 + outletWidth / 2},350 ${200 + bottomWidth / 2},250 ${200 + bottomWidth / 2},250 Z
  `;

  return { topWidth, middleWidth, bottomWidth, path };
};

const getTokenDots = (items: LabPrediction[], centerY: number, radiusX: number): TokenDot[] => {
  if (items.length === 0) {
    return [];
  }

  return items.map((item, index) => {
    const angle = (index * (Math.PI * 2)) / items.length + Math.PI / 2;
    const distance = radiusX * (0.35 + item.probability * 0.5);

    return {
      key: `${centerY}-${item.token}`,
      x: 200 + Math.cos(angle) * distance,
      y: centerY + Math.sin(angle) * Math.max(18, radiusX * 0.16),
      title: `${item.token}: ${(item.probability * 100).toFixed(1)}%`,
      probability: item.probability,
    };
  });
};

function ParameterControl({
  id,
  label,
  valueLabel,
  description,
  min,
  max,
  step,
  value,
  onValueChange,
}: ParameterControlProps) {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <Label htmlFor={id} className="text-[var(--slate-700)]">
          {label}
        </Label>
        <span className="text-xs font-semibold text-[var(--slate-900)]">{valueLabel}</span>
      </div>
      <Slider
        id={id}
        min={min}
        max={max}
        step={step}
        value={[value]}
        onValueChange={(values) => onValueChange(values[0] ?? value)}
      />
      <p className="text-caption">{description}</p>
    </div>
  );
}

function FunnelStage({ title, items, color }: FunnelStageProps) {
  const visibleItems = sortByProbability(items).filter((item) =>
    isVisibleProbability(item.probability),
  );

  return (
    <article className="rounded-lg border border-[var(--slate-200)] bg-white p-3">
      <h3 className="flex items-center gap-2 text-sm font-semibold text-[var(--slate-900)]">
        <span className="inline-block size-2 rounded-full" style={{ backgroundColor: color }} />
        {title}
      </h3>
      <div className="mt-3 space-y-2">
        {visibleItems.map((item) => (
          <div key={item.token}>
            <div className="mb-1 flex items-center justify-between text-xs text-[var(--slate-600)]">
              <span className="font-semibold text-[var(--slate-900)]">{item.token}</span>
              <span>{(item.probability * 100).toFixed(1)}%</span>
            </div>
            <div className="h-2 rounded-full bg-[var(--slate-100)]">
              <div
                className="lab-probability-bar h-full rounded-full"
                style={{
                  width: `${Math.max(2, item.probability * 100)}%`,
                  backgroundColor: color,
                }}
              />
            </div>
            <p className="mt-1 text-xs text-[var(--slate-500)]">{item.description}</p>
          </div>
        ))}
        {visibleItems.length === 0 ? (
          <p className="text-caption">Aucun token visible à ce niveau avec ces paramètres.</p>
        ) : null}
      </div>
    </article>
  );
}

type DotLayerProps = {
  dots: TokenDot[];
  color: string;
  layer: number;
};

function DotLayer({ dots, color, layer }: DotLayerProps) {
  return dots.map((dot, index) => (
    <circle
      key={dot.key}
      cx={dot.x}
      cy={dot.y}
      r={3.7 + dot.probability * 3}
      fill={color}
      className="lab-token-point"
      style={
        {
          animationDelay: `${index * 70}ms`,
          "--lab-layer": String(layer),
        } as CSSProperties
      }
    >
      <title>{dot.title}</title>
    </circle>
  ));
}

type LabFunnelWidgetProps = {
  scenarioId?: string;
  embedded?: boolean;
};

export function LabFunnelWidget({ scenarioId, embedded = false }: LabFunnelWidgetProps) {
  const initialScenarioId = scenarioId ?? learnerLabScenarios[0]?.id ?? "";
  const [currentScenarioId, setCurrentScenarioId] = useState(initialScenarioId);
  const [temperature, setTemperature] = useState(0.7);
  const [topK, setTopK] = useState(5);
  const [topP, setTopP] = useState(0.8);
  const [selectedToken, setSelectedToken] = useState<LabPrediction | null>(null);
  const [displayedToken, setDisplayedToken] = useState<string>("...");
  const [isSpinning, setIsSpinning] = useState(false);
  const spinTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const scenario =
    learnerLabScenarios.find((entry) => entry.id === currentScenarioId) ?? learnerLabScenarios[0];

  const funnel = useMemo(() => {
    return runFunnel(scenario.predictions, { temperature, topK, topP });
  }, [scenario, temperature, topK, topP]);

  const geometry = useMemo(
    () => getFunnelGeometry(temperature, topK, topP),
    [temperature, topK, topP],
  );

  const tempDots = useMemo(
    () => getTokenDots(funnel.afterTemperature, 90, geometry.topWidth * 0.3),
    [funnel.afterTemperature, geometry.topWidth],
  );
  const topKDots = useMemo(
    () => getTokenDots(funnel.afterTopK, 190, geometry.middleWidth * 0.3),
    [funnel.afterTopK, geometry.middleWidth],
  );
  const topPDots = useMemo(
    () => getTokenDots(funnel.afterTopP, 290, geometry.bottomWidth * 0.3),
    [funnel.afterTopP, geometry.bottomWidth],
  );
  const finalCandidates = useMemo(() => sortByProbability(funnel.afterTopP), [funnel.afterTopP]);

  const runSelectionAnimation = useCallback(() => {
    if (spinTimerRef.current) {
      clearTimeout(spinTimerRef.current);
      spinTimerRef.current = null;
    }

    if (finalCandidates.length === 0) {
      setIsSpinning(false);
      setSelectedToken(null);
      setDisplayedToken("...");
      return;
    }

    const finalToken = sampleWeightedToken(finalCandidates);
    if (!finalToken) {
      setIsSpinning(false);
      setSelectedToken(null);
      setDisplayedToken("...");
      return;
    }

    setIsSpinning(true);
    setSelectedToken(null);

    const totalSteps = 16 + Math.floor(Math.random() * 8);
    let step = 0;

    const tick = () => {
      const candidate = sampleWeightedToken(finalCandidates);
      setDisplayedToken(candidate?.token ?? "...");
      step += 1;

      if (step >= totalSteps) {
        setDisplayedToken(finalToken.token);
        setSelectedToken(finalToken);
        setIsSpinning(false);
        spinTimerRef.current = null;
        return;
      }

      const delay = 50 + step * 16;
      spinTimerRef.current = setTimeout(tick, delay);
    };

    tick();
  }, [finalCandidates]);

  useEffect(() => {
    runSelectionAnimation();
  }, [runSelectionAnimation]);

  useEffect(() => {
    return () => {
      if (spinTimerRef.current) {
        clearTimeout(spinTimerRef.current);
      }
    };
  }, []);

  return (
    <TooltipProvider>
      <div className={embedded ? "w-full space-y-6" : "w-full space-y-6 px-4 py-8 md:px-6 xl:px-8"}>
        {embedded ? (
          <section className="space-y-2">
            <div className="flex items-center gap-2">
              <Badge variant="info">Lab funnel</Badge>
              <Badge variant="outline">Simulation locale</Badge>
            </div>
            <p className="text-sm text-[var(--slate-600)]">
              Manipule temperature, top-k et top-p pour observer l'impact sur les tokens.
            </p>
          </section>
        ) : (
          <section>
            <div className="mb-2 flex items-center gap-2">
              <Badge variant="info">Lab interactif</Badge>
              <Badge variant="outline">Déterministe</Badge>
            </div>
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <h1 className="page-title">Entonnoir de décision LLM</h1>
                <p className="page-lead">
                  Explore l'impact de <strong>temperature</strong>, <strong>top-k</strong> et{" "}
                  <strong>top-p</strong> sur la distribution des tokens avec une visualisation
                  guidée.
                </p>
              </div>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" size="sm">
                    En savoir plus <CircleHelp className="size-4" />
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-h-[86vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle>L'entonnoir de décision LLM</DialogTitle>
                    <DialogDescription>
                      Ce lab montre comment les probabilités sont rééquilibrées puis filtrées avant
                      le choix final d'un token.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4 text-sm leading-relaxed text-[var(--slate-700)]">
                    <section>
                      <h3 className="font-semibold text-[var(--slate-900)]">Processus</h3>
                      <p>
                        1. La <strong>température</strong> rend la distribution plus créative ou
                        plus conservatrice.
                      </p>
                      <p>
                        2. <strong>Top-K</strong> conserve uniquement les K tokens les plus
                        probables.
                      </p>
                      <p>
                        3. <strong>Top-P</strong> conserve le plus petit ensemble couvrant la
                        probabilité cumulée cible.
                      </p>
                    </section>
                    <section>
                      <h3 className="font-semibold text-[var(--slate-900)]">Lecture de l'écran</h3>
                      <p>
                        La colonne centrale affiche l'entonnoir, la légende indique le nombre de
                        tokens restants à chaque étape, et la colonne de droite détaille les
                        probabilités après chaque filtre.
                      </p>
                    </section>
                    <section>
                      <h3 className="font-semibold text-[var(--slate-900)]">Conseil pédagogique</h3>
                      <p>
                        Compare plusieurs scénarios avec les mêmes paramètres pour voir comment le
                        contexte initial change la sélection finale.
                      </p>
                    </section>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </section>
        )}

        <section className="grid gap-6 xl:grid-cols-[290px_1fr_320px]">
          <aside className="space-y-4">
            <article className="panel-card p-4">
              <h2 className="text-sm font-semibold text-[var(--slate-900)]">Scénarios</h2>
              <div className="mt-3 flex flex-wrap gap-2">
                {learnerLabScenarios.map((entry) => (
                  <Button
                    key={entry.id}
                    variant={entry.id === scenario.id ? "default" : "outline"}
                    size="sm"
                    onClick={() => setCurrentScenarioId(entry.id)}
                  >
                    {entry.title}
                  </Button>
                ))}
              </div>
              <p className="mt-3 text-sm text-[var(--slate-600)]">{scenario.prompt}</p>
              <p className="text-caption mt-1">{scenario.description}</p>
            </article>

            <article className="panel-card p-4">
              <div className="mb-3 flex items-center gap-2">
                <h2 className="text-sm font-semibold text-[var(--slate-900)]">Paramètres</h2>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <button
                      type="button"
                      className="focus-ring rounded p-1 text-[var(--slate-500)]"
                    >
                      <SlidersHorizontal className="size-4" />
                    </button>
                  </TooltipTrigger>
                  <TooltipContent sideOffset={8}>
                    Ajuste chaque filtre et observe la transformation de la distribution.
                  </TooltipContent>
                </Tooltip>
              </div>
              <div className="space-y-4">
                <ParameterControl
                  id="temperature"
                  label="Temperature"
                  valueLabel={temperature.toFixed(2)}
                  description="Plus élevé: réponses plus créatives et distribution plus aplatie."
                  min={0.1}
                  max={2}
                  step={0.1}
                  value={temperature}
                  onValueChange={setTemperature}
                />
                <ParameterControl
                  id="topk"
                  label="Top-K"
                  valueLabel={String(topK)}
                  description="Conserve uniquement les K candidats les plus probables."
                  min={1}
                  max={10}
                  step={1}
                  value={topK}
                  onValueChange={(value) => setTopK(Math.round(value))}
                />
                <ParameterControl
                  id="topp"
                  label="Top-P"
                  valueLabel={topP.toFixed(2)}
                  description="Conserve les tokens jusqu'au seuil de probabilité cumulée."
                  min={0.1}
                  max={1}
                  step={0.05}
                  value={topP}
                  onValueChange={(value) => setTopP(Number(value.toFixed(2)))}
                />
              </div>
            </article>
          </aside>

          <div className="space-y-4">
            <article className="panel-card p-5">
              <p className="text-lg font-medium leading-relaxed text-[var(--slate-800)]">
                {scenario.prompt}
                <span className="lab-blink-cursor px-1 text-[var(--blue-600)]">|</span>
                {displayedToken !== "..." ? (
                  <span
                    className={`lab-selection-pill ml-1 inline-flex items-center rounded-md border border-[var(--blue-200)] bg-[var(--blue-50)] px-2 py-0.5 font-bold text-[var(--blue-700)] ${isSpinning ? "lab-selection-pill-spinning" : ""}`}
                  >
                    {displayedToken}
                  </span>
                ) : (
                  <span className="font-bold text-[var(--blue-700)]">...</span>
                )}
              </p>
              <p className="mt-2 text-sm text-[var(--slate-600)]">{scenario.description}</p>
              <div className="mt-3">
                <Button
                  type="button"
                  size="sm"
                  variant="outline"
                  onClick={runSelectionAnimation}
                  className="lab-roulette-button"
                  data-spinning={isSpinning}
                >
                  Relancer le tirage <RefreshCw className="size-4" />
                </Button>
              </div>
            </article>

            <article className="panel-card p-4">
              <Collapsible>
                <CollapsibleTrigger asChild>
                  <button
                    type="button"
                    className="focus-ring group flex w-full items-center justify-between rounded-md px-2 py-1 text-left text-sm font-semibold text-[var(--slate-900)] hover:bg-[var(--slate-100)]"
                  >
                    Analyse préliminaire (tokenisation du prompt)
                    <ChevronRight className="size-4 transition-transform group-data-[state=open]:rotate-90" />
                  </button>
                </CollapsibleTrigger>
                <CollapsibleContent className="lab-collapsible-content">
                  <div className="mt-3 flex flex-wrap gap-2">
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
                </CollapsibleContent>
              </Collapsible>
            </article>

            <article className="panel-card relative overflow-hidden p-4">
              <div className="rounded-lg border border-[var(--slate-200)] bg-[var(--slate-50)] p-3">
                <svg
                  viewBox="0 0 400 400"
                  className="h-[460px] w-full"
                  role="img"
                  aria-label="Visualisation de l'entonnoir de décision"
                >
                  <path
                    d={geometry.path}
                    fill="#e2e8f0"
                    stroke="#64748b"
                    strokeWidth="2"
                    className="lab-funnel-path"
                  />

                  <DotLayer dots={tempDots} color="#93c5fd" layer={0} />
                  <DotLayer dots={topKDots} color="#3b82f6" layer={1} />
                  <DotLayer dots={topPDots} color="#1d4ed8" layer={2} />
                </svg>
              </div>

              <div className="absolute top-8 right-8 rounded-lg border border-[var(--slate-200)] bg-white/90 p-3 shadow-sm backdrop-blur">
                <div className="space-y-2">
                  <p className="text-xs font-semibold uppercase tracking-wide text-[var(--slate-500)]">
                    Légende
                  </p>
                  <p className="flex items-center gap-2 text-xs text-[var(--slate-700)]">
                    <span className="inline-block size-2 rounded-full bg-[#93c5fd]" />
                    Après température: {funnel.afterTemperature.length} token(s)
                  </p>
                  <p className="flex items-center gap-2 text-xs text-[var(--slate-700)]">
                    <span className="inline-block size-2 rounded-full bg-[#3b82f6]" />
                    Après top-k: {funnel.afterTopK.length} token(s)
                  </p>
                  <p className="flex items-center gap-2 text-xs text-[var(--slate-700)]">
                    <span className="inline-block size-2 rounded-full bg-[#1d4ed8]" />
                    Après top-p: {funnel.afterTopP.length} token(s)
                  </p>
                </div>
              </div>
            </article>
          </div>

          <aside className="panel-card p-4">
            <div className="mb-2 flex items-center gap-2">
              <h2 className="text-sm font-semibold text-[var(--slate-900)]">Résultats</h2>
              <Tooltip>
                <TooltipTrigger asChild>
                  <button type="button" className="focus-ring rounded p-1 text-[var(--slate-500)]">
                    <CircleHelp className="size-4" />
                  </button>
                </TooltipTrigger>
                <TooltipContent sideOffset={8}>
                  Compare l'évolution des probabilités à chaque étape du pipeline.
                </TooltipContent>
              </Tooltip>
            </div>
            <ScrollArea className={embedded ? "h-[620px] pr-3" : "h-[820px] pr-3"}>
              <div className="space-y-3">
                <FunnelStage
                  title={`Après température (${temperature.toFixed(2)})`}
                  items={funnel.afterTemperature}
                  color="#93c5fd"
                />
                <FunnelStage
                  title={`Après Top-K (${topK})`}
                  items={funnel.afterTopK}
                  color="#3b82f6"
                />
                <FunnelStage
                  title={`Après Top-P (${topP.toFixed(2)})`}
                  items={funnel.afterTopP}
                  color="#1d4ed8"
                />
                <article className="rounded-lg border border-[var(--blue-200)] bg-[var(--blue-50)] p-3">
                  <p className="text-xs font-semibold uppercase tracking-wide text-[var(--blue-700)]">
                    Token tiré (probabiliste)
                  </p>
                  <p className="mt-1 text-sm text-[var(--slate-800)]">
                    {selectedToken
                      ? `${selectedToken.token} (${(selectedToken.probability * 100).toFixed(1)}%)`
                      : isSpinning
                        ? "Tirage en cours..."
                        : "Aucun token sélectionné"}
                  </p>
                </article>
              </div>
            </ScrollArea>
          </aside>
        </section>
      </div>
    </TooltipProvider>
  );
}
