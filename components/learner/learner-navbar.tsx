import { Beaker, Info, TrendingUp } from "lucide-react";
import Link from "next/link";

export function LearnerNavbar() {
  return (
    <header className="fixed top-0 z-50 h-16 w-full border-b border-white/10 bg-[var(--slate-900)] backdrop-blur-sm">
      <div className="flex h-full w-full items-center justify-between px-4 md:px-8">
        <Link
          href="/lab"
          className="flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 rounded-md"
        >
          <div className="bg-learner-gradient inline-flex size-8 items-center justify-center rounded-lg text-xs font-extrabold tracking-wide text-white">
            AI
          </div>
          <svg role="img" aria-label="AI TRAINING" viewBox="0 0 280 36" className="h-[22px] w-auto">
            <defs>
              <linearGradient id="ai-training-wordmark" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#60A5FA" />
                <stop offset="100%" stopColor="#A78BFA" />
              </linearGradient>
            </defs>
            <text
              x="0"
              y="26"
              fill="url(#ai-training-wordmark)"
              fontFamily="ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif"
              fontSize="24"
              fontWeight="800"
              letterSpacing="1.6"
            >
              AI TRAINING
            </text>
          </svg>
        </Link>
        <nav className="hidden items-center gap-1 md:flex" aria-label="Navigation principale">
          <Link
            href="/lab"
            className="flex items-center gap-2 rounded-md px-3 py-2 text-sm text-white/70 transition-colors hover:bg-white/10 hover:text-white"
          >
            <Beaker className="size-4" />
            Lab
          </Link>
          <Link
            href="/progression"
            className="flex items-center gap-2 rounded-md px-3 py-2 text-sm text-white/70 transition-colors hover:bg-white/10 hover:text-white"
          >
            <TrendingUp className="size-4" />
            Progression
          </Link>
          <Link
            href="/a-propos"
            className="flex items-center gap-2 rounded-md px-3 py-2 text-sm text-white/70 transition-colors hover:bg-white/10 hover:text-white"
          >
            <Info className="size-4" />À propos
          </Link>
        </nav>
      </div>
    </header>
  );
}
