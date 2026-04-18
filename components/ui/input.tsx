import type * as React from "react";

import { cn } from "@/lib/utils";

export function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      className={cn(
        "focus-ring h-10 w-full rounded-md border border-[var(--slate-200)] bg-white px-3 text-sm text-[var(--slate-900)] placeholder:text-[var(--slate-400)]",
        className,
      )}
      {...props}
    />
  );
}
