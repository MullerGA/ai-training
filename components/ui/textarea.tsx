import type * as React from "react";

import { cn } from "@/lib/utils";

export function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      className={cn(
        "focus-ring min-h-20 w-full rounded-md border border-[var(--slate-200)] bg-white px-3 py-2 text-sm text-[var(--slate-900)] placeholder:text-[var(--slate-400)]",
        className,
      )}
      {...props}
    />
  );
}
