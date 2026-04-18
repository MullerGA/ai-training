import {
  Beaker,
  Compass,
  Home,
  Info,
  Layers,
  PlayCircle,
  Target,
  TrendingUp,
  Workflow,
} from "lucide-react";
import Link from "next/link";

import { learnerNavItems } from "@/lib/learner/data";

const iconByHref = {
  "/learner/dashboard": Home,
  "/learner/diagrammes": Workflow,
  "/learner/catalogue": Compass,
  "/learner/parcours": Layers,
  "/learner/lecon": PlayCircle,
  "/learner/exercice": Target,
  "/learner/lab": Beaker,
  "/learner/progression": TrendingUp,
} as const;

export function LearnerSidebar() {
  return (
    <aside className="hidden border-r border-[var(--slate-200)] bg-white p-3 lg:sticky lg:top-0 lg:block lg:h-[calc(100vh-64px)] lg:overflow-y-auto">
      <p className="px-3 py-2 text-[10px] font-semibold tracking-[0.08em] text-[var(--slate-400)] uppercase">
        Parcours learner
      </p>
      <nav className="space-y-1">
        {learnerNavItems.map(({ href, label }) => {
          const Icon = iconByHref[href];

          return (
            <Link
              key={href}
              href={href}
              className="focus-ring flex items-center gap-2 rounded-md px-3 py-2 text-sm text-[var(--slate-600)] transition-colors hover:bg-[var(--slate-100)] hover:text-[var(--slate-900)]"
            >
              <Icon className="size-4" />
              {label}
            </Link>
          );
        })}
      </nav>

      <p className="mt-7 px-3 py-2 text-[10px] font-semibold tracking-[0.08em] text-[var(--slate-400)] uppercase">
        À propos
      </p>
      <div className="space-y-1">
        <Link
          href="/learner/a-propos"
          className="focus-ring flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm text-[var(--slate-600)] hover:bg-[var(--slate-100)] hover:text-[var(--slate-900)]"
        >
          <Info className="size-4" />À propos
        </Link>
      </div>
    </aside>
  );
}
