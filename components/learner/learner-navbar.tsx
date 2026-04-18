import { BookOpen, MessageCircleQuestion } from "lucide-react";

import { Button } from "@/components/ui/button";

export function LearnerNavbar() {
  return (
    <header className="fixed top-0 z-50 h-16 w-full border-b border-white/10 bg-[var(--slate-900)] backdrop-blur-sm">
      <div className="flex h-full w-full items-center justify-between px-4 md:px-8">
        <div className="flex items-center gap-3">
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
        </div>
        <div className="hidden items-center gap-2 md:flex">
          <Button variant="ghost-light" size="sm">
            <BookOpen />
            Support de formation
          </Button>
          <Button variant="gradient" size="sm">
            <MessageCircleQuestion />
            Questions ?
          </Button>
        </div>
      </div>
    </header>
  );
}
