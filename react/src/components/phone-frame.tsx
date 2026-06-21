import type { ReactNode } from "react";
import { cn } from "../lib/cn";

interface PhoneFrameProps {
  children: ReactNode;
  /** Status-bar tint: matches the screen background behind it. */
  tone?: "light" | "dark";
  className?: string;
}

/**
 * A clean phone mockup that frames a mobile screen on larger surfaces (the
 * storefront showcase, the desktop hero). 9:19.5 with a notch + status bar.
 */
export function PhoneFrame({ children, tone = "light", className }: PhoneFrameProps) {
  const ink = tone === "dark";
  return (
    <div
      className={cn(
        "relative aspect-[9/19.5] w-[300px] shrink-0 overflow-hidden rounded-[2.75rem] border-[6px] border-foreground/90 bg-card shadow-[var(--shadow-pop)]",
        className,
      )}
    >
      {/* status bar */}
      <div className={cn("absolute inset-x-0 top-0 z-20 flex h-9 items-center justify-between px-6 text-[11px] font-semibold", ink ? "text-ink-foreground" : "text-foreground")}>
        <span className="font-mono">9:41</span>
        <span className="h-5 w-20 -translate-y-3 rounded-b-2xl bg-foreground/90" />
        <span className="font-mono tracking-tight">5G ●</span>
      </div>
      <div className="h-full w-full overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">{children}</div>
    </div>
  );
}
