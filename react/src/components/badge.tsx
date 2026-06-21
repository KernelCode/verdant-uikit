import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import { cn } from "../lib/cn";

const badge = cva("inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-bold leading-none", {
  variants: {
    variant: {
      neutral: "bg-muted text-muted-foreground",
      brand: "bg-brand-100 text-brand-700",
      solid: "bg-primary text-primary-foreground",
      discount: "bg-discount text-discount-foreground",
      sale: "bg-accent text-accent-foreground",
      success: "bg-success/15 text-success",
      soft: "bg-brand-50 text-brand-700",
      outline: "border-2 border-border text-foreground",
    },
  },
  defaultVariants: { variant: "neutral" },
});

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badge> {}

export function Badge({ className, variant, ...props }: BadgeProps) {
  return <span className={cn(badge({ variant }), className)} {...props} />;
}
