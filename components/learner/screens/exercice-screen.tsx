"use client";

import { ArrowRight, CheckCircle2, ChevronRight, Clock3, Lightbulb } from "lucide-react";
import { useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export function ExerciceScreen() {
  const [answer, setAnswer] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const wordCount = answer.trim().split(/\s+/).filter(Boolean).length;

  return (
    <div className="grid w-full gap-6 px-4 py-8 md:px-6 xl:grid-cols-[1fr_300px] xl:px-8">
      <div className="space-y-5">
        <div className="text-caption flex items-center gap-2">
          <span>Module 2 · Bien formuler ses prompts</span>
          <ChevronRight className="size-3" />
          <span className="font-medium text-[var(--slate-900)]">
            Atelier pratique · Reformuler un brief
          </span>
        </div>

        <article className="panel-card p-5">
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <Badge variant="info">Exercice 2 sur 3</Badge>
            <Badge variant="outline">
              <Clock3 className="size-3" /> 10 min
            </Badge>
            <Badge variant="outline">Pratique</Badge>
          </div>
          <h1 className="text-2xl font-semibold text-[var(--slate-900)]">
            Reformule ce brief en prompt structuré
          </h1>
          <p className="mt-2 text-[15px] leading-relaxed text-[var(--slate-600)]">
            Applique la règle des 4 ingrédients: rôle, contexte, tâche, format.
          </p>
        </article>

        <article className="panel-card">
          <div className="border-b border-[var(--slate-200)] bg-[var(--slate-50)] px-5 py-4">
            <h2 className="text-base font-semibold text-[var(--slate-900)]">Contexte</h2>
            <p className="text-caption">Le brief reçu par email</p>
          </div>
          <div className="bg-[var(--slate-50)] p-5 font-mono text-sm leading-relaxed text-[var(--slate-700)]">
            "Salut, tu peux me faire un petit résumé du dernier rapport RH pour la réu de jeudi ?
            Merci."
          </div>
        </article>

        <section>
          <label
            htmlFor="prompt-answer"
            className="mb-2 block text-sm font-medium text-[var(--slate-900)]"
          >
            Ton prompt reformulé
          </label>
          <Textarea
            id="prompt-answer"
            value={answer}
            onChange={(event) => setAnswer(event.target.value)}
            className="min-h-40"
            placeholder="Ex: Tu es analyste RH..."
          />
          <div className="mt-2 flex items-center justify-between text-xs text-[var(--slate-500)]">
            <span>{wordCount} mots · min. 30 recommandé</span>
            <span>
              <Lightbulb className="mr-1 inline size-3" /> Pense aux 4 ingrédients
            </span>
          </div>
        </section>

        <div className="flex flex-wrap items-center gap-2">
          <Button variant="gradient" onClick={() => setSubmitted(true)} disabled={wordCount < 5}>
            Valider ma réponse
          </Button>
          <Button variant="outline">Voir un exemple</Button>
          <span className="grow" />
          <Button variant="ghost">Passer</Button>
        </div>

        {submitted ? (
          <article className="panel-card flex items-start gap-3 bg-[#f0fdf4] p-4">
            <span className="inline-flex size-9 items-center justify-center rounded-lg bg-[#dcfce7] text-[#15803d]">
              <CheckCircle2 className="size-5" />
            </span>
            <div>
              <h3 className="text-sm font-semibold text-[#15803d]">Bien joué</h3>
              <p className="mt-1 text-sm text-[var(--slate-700)]">
                Tu as bien identifié le rôle et le contexte. Pour aller plus loin, précise davantage
                le format de sortie.
              </p>
              <Button variant="outline" size="sm" className="mt-3">
                Passer à l'exercice suivant <ArrowRight className="size-4" />
              </Button>
            </div>
          </article>
        ) : null}
      </div>

      <aside className="panel-card">
        <div className="border-b border-[var(--slate-200)] px-4 py-3">
          <h2 className="text-sm font-semibold text-[var(--slate-900)]">Indices</h2>
          <p className="text-caption">À utiliser en cas de besoin</p>
        </div>
        <div className="space-y-2 p-4">
          {[
            ["Rôle", "Qui doit répondre ? Analyste ? Rédacteur ?"],
            ["Contexte", "Pour qui ? Quelle occasion ? Quel enjeu ?"],
            ["Tâche", "Action précise et verbe d'action."],
            ["Format", "Longueur, structure, ton, exemples."],
          ].map(([label, hint]) => (
            <div
              key={label}
              className="rounded-lg border border-[var(--slate-200)] bg-[var(--slate-50)] p-3"
            >
              <p className="text-xs font-semibold text-[var(--blue-700)]">{label}</p>
              <p className="mt-1 text-xs text-[var(--slate-600)]">{hint}</p>
            </div>
          ))}
        </div>
      </aside>
    </div>
  );
}
