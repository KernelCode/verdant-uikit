import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import { cn } from "../lib/cn";

const iconButton = cva(
  "inline-grid place-items-center rounded-full transition-transform active:scale-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50 disabled:opacity-50",
  {
    variants: {
      variant: {
        solid: "bg-primary text-primary-foreground hover:brightness-110",
        white: "bg-card text-foreground shadow-[var(--shadow-soft)] hover:bg-muted",
        ghost: "text-foreground hover:bg-muted",
        outline: "border border-border text-foreground hover:bg-muted",
      },
      size: { sm: "h-9 w-9", md: "h-11 w-11", lg: "h-14 w-14" },
    },
    defaultVariants: { variant: "white", size: "md" },
  },
);

export interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof iconButton> {}

export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ className, variant, size, ...props }, ref) => (
    <button ref={ref} type="button" className={cn(iconButton({ variant, size }), className)} {...props} />
  ),
);
IconButton.displayName = "IconButton";
