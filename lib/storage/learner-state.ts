"use client";

import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "ai-training:state:v1";

export type LearnerState = {
  completedModules: string[]; // `${parcoursSlug}/${moduleSlug}`
  moduleProgress: Record<string, number>; // 0..100, mÃªme clÃ©
  lastVisited?: { parcours: string; module: string };
};

const DEFAULT_STATE: LearnerState = {
  completedModules: [],
  moduleProgress: {},
};

function loadState(): LearnerState {
  if (typeof window === "undefined") return DEFAULT_STATE;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT_STATE;
    return JSON.parse(raw) as LearnerState;
  } catch {
    return DEFAULT_STATE;
  }
}

function saveState(state: LearnerState): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // localStorage peut Ãªtre bloquÃ© (mode privÃ© strict, quota dÃ©passÃ©)
  }
}

// Calcule le % de modules complÃ©tÃ©s dans un parcours donnÃ©.
export function getParcoursProgress(
  state: LearnerState,
  parcoursSlug: string,
  totalModules: number,
): number {
  if (totalModules === 0) return 0;
  const completed = state.completedModules.filter((key) =>
    key.startsWith(`${parcoursSlug}/`),
  ).length;
  return Math.round((completed / totalModules) * 100);
}

export function useLearnerState() {
  const [state, setState] = useState<LearnerState>(DEFAULT_STATE);

  useEffect(() => {
    setState(loadState());
  }, []);

  const markModuleComplete = useCallback((key: string) => {
    setState((prev) => {
      if (prev.completedModules.includes(key)) return prev;
      const next: LearnerState = {
        ...prev,
        completedModules: [...prev.completedModules, key],
        moduleProgress: { ...prev.moduleProgress, [key]: 100 },
      };
      saveState(next);
      return next;
    });
  }, []);

  const setModuleProgress = useCallback((key: string, value: number) => {
    setState((prev) => {
      const clamped = Math.max(0, Math.min(100, Math.round(value)));
      const next: LearnerState = {
        ...prev,
        moduleProgress: { ...prev.moduleProgress, [key]: clamped },
      };
      saveState(next);
      return next;
    });
  }, []);

  const setLastVisited = useCallback((parcours: string, module: string) => {
    setState((prev) => {
      const next: LearnerState = { ...prev, lastVisited: { parcours, module } };
      saveState(next);
      return next;
    });
  }, []);

  const resetState = useCallback(() => {
    setState(DEFAULT_STATE);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // localStorage peut etre bloque (mode prive strict, quota depasse)
    }
  }, []);

  return { state, markModuleComplete, setModuleProgress, setLastVisited, resetState };
}
