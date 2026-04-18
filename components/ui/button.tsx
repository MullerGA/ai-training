import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "radix-ui";
import type * as React from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "focus-ring inline-flex shrink-0 items-center justify-center gap-2 rounded-md border border-transparent text-sm font-medium whitespace-nowrap transition-all duration-200 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4",
  {
    variants: {
      variant: {
        default: "bg-[var(--slate-900)] text-white hover:bg-[var(--slate-800)]",
        gradient: "bg-learner-gradient text-white shadow-sm hover:opacity-90",
        outline:
          "border-[var(--slate-200)] bg-white text-[var(--slate-900)] hover:bg-[var(--slate-100)]",
        secondary: "bg-[var(--slate-100)] text-[var(--slate-900)] hover:bg-[var(--slate-200)]",
        ghost: "text-[var(--slate-600)] hover:bg-[var(--slate-100)] hover:text-[var(--slate-900)]",
        "ghost-light": "text-[var(--slate-300)] hover:bg-white/5 hover:text-white",
        destructive: "bg-[var(--red-500)] text-white hover:bg-[var(--red-600)]",
        link: "text-[var(--blue-600)] underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4",
        sm: "h-8 px-3 text-xs",
        lg: "h-11 px-6 text-[15px]",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot.Root : "button";

  return <Comp className={cn(buttonVariants({ variant, size, className }))} {...props} />;
}

export { Button, buttonVariants };
