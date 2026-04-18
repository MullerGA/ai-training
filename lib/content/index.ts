import { leMondeDeIA } from "@/lib/content/parcours/le-monde-de-l-ia";
import type { Module, Parcours } from "@/lib/content/types";

export const allParcours: Parcours[] = [leMondeDeIA];

export function getParcours(slug: string): Parcours | undefined {
  return allParcours.find((p) => p.slug === slug);
}

export function getModule(parcoursSlug: string, moduleSlug: string): Module | undefined {
  return getParcours(parcoursSlug)?.modules.find((m) => m.slug === moduleSlug);
}
