"use client";

import { Pause, Play, Volume2 } from "lucide-react";
import { useState } from "react";

export function LessonPlayer() {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="relative aspect-video overflow-hidden rounded-xl bg-[var(--slate-900)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_35%_40%,rgba(59,130,246,0.22)_0%,transparent_55%),radial-gradient(circle_at_75%_70%,rgba(99,102,241,0.18)_0%,transparent_55%)]" />
      <div className="absolute inset-0 flex items-center justify-center">
        <button
          type="button"
          onClick={() => setPlaying((prev) => !prev)}
          className="focus-ring inline-flex size-20 items-center justify-center rounded-full bg-white text-[var(--slate-900)]"
          aria-label={playing ? "Mettre en pause" : "Lire"}
        >
          {playing ? <Pause className="size-7" /> : <Play className="size-7" />}
        </button>
      </div>
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setPlaying((prev) => !prev)}
            className="focus-ring inline-flex"
            aria-label={playing ? "Mettre en pause" : "Lire"}
          >
            {playing ? <Pause className="size-5" /> : <Play className="size-5" />}
          </button>
          <span className="font-mono text-xs">02:14</span>
          <div className="h-1 flex-1 rounded-full bg-white/25">
            <div className="h-full w-[37%] rounded-full bg-white" />
          </div>
          <span className="font-mono text-xs">06:00</span>
          <Volume2 className="size-4" />
        </div>
      </div>
    </div>
  );
}
