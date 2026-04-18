import type { LabPrediction } from "@/lib/learner/types";

export type FunnelParams = {
  temperature: number;
  topK: number;
  topP: number;
};

export type FunnelResult = {
  afterTemperature: LabPrediction[];
  afterTopK: LabPrediction[];
  afterTopP: LabPrediction[];
  selected: LabPrediction | null;
};

const EPSILON = 1e-9;

const sortDeterministic = (predictions: LabPrediction[]) => {
  return [...predictions].sort((a, b) => {
    const diff = b.probability - a.probability;
    if (Math.abs(diff) > EPSILON) {
      return diff;
    }
    return a.token.localeCompare(b.token, "fr");
  });
};

const normalize = (predictions: LabPrediction[]) => {
  const safe = predictions.filter((entry) => entry.probability > 0);
  const total = safe.reduce((acc, entry) => acc + entry.probability, 0);
  if (total <= EPSILON) {
    return [];
  }

  return safe.map((entry) => ({
    ...entry,
    probability: entry.probability / total,
  }));
};

export const applyTemperature = (predictions: LabPrediction[], temperature: number) => {
  const temp = Math.max(0.1, temperature);
  const sorted = sortDeterministic(predictions);

  const logits = sorted.map((entry) => Math.log(Math.max(entry.probability, EPSILON)) / temp);
  const maxLogit = Math.max(...logits);
  const expValues = logits.map((value) => Math.exp(value - maxLogit));
  const expSum = expValues.reduce((acc, value) => acc + value, 0);

  return sorted.map((entry, index) => ({
    ...entry,
    probability: expValues[index] / expSum,
  }));
};

export const applyTopK = (predictions: LabPrediction[], topK: number) => {
  const k = Math.max(1, Math.floor(topK));
  return normalize(sortDeterministic(predictions).slice(0, k));
};

export const applyTopP = (predictions: LabPrediction[], topP: number) => {
  const threshold = Math.max(0.05, Math.min(1, topP));
  const ordered = sortDeterministic(predictions);

  const selected: LabPrediction[] = [];
  let cumulative = 0;

  for (const entry of ordered) {
    selected.push(entry);
    cumulative += entry.probability;
    if (cumulative >= threshold) {
      break;
    }
  }

  return normalize(selected);
};

export const runFunnel = (predictions: LabPrediction[], params: FunnelParams): FunnelResult => {
  const afterTemperature = applyTemperature(predictions, params.temperature);
  const afterTopK = applyTopK(afterTemperature, params.topK);
  const afterTopP = applyTopP(afterTopK, params.topP);
  const selected = sortDeterministic(afterTopP)[0] ?? null;

  return {
    afterTemperature,
    afterTopK,
    afterTopP,
    selected,
  };
};
