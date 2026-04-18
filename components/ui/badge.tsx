import { cva, type VariantProps } from "class-variance-authority";
import type * as React from "react";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-xs font-semibold",
  {
    variants: {
      variant: {
        default: "border-transparent bg-[var(--slate-900)] text-white",
        secondary: "border-transparent bg-[var(--slate-100)] text-[var(--slate-900)]",
        outline: "border-[var(--slate-200)] text-[var(--slate-700)]",
        info: "border-transparent bg-[var(--blue-100)] text-[var(--blue-700)]",
        success: "border-transparent bg-[#dcfce7] text-[#15803d]",
        warn: "border-transparent bg-[#fef3c7] text-[#a16207]",
        gradient: "border-transparent bg-learner-gradient text-white",
      },
    },
    defaultVariants: {
      variant: "secondary",
    },
  },
);

export function Badge({
  className,
  variant,
  ...props
}: React.ComponentProps<"span"> & VariantProps<typeof badgeVariants>) {
  return <span className={cn(badgeVariants({ variant }), className)} {...props} />;
}
