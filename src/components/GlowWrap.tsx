import { type CSSProperties, type ReactNode } from "react";

type GlowWrapProps = {
  children: ReactNode;
  variant?: "on-dark" | "on-light" | "btn";
  className?: string;
  delay?: number;
};

/** Subtle animated lime glow — use sparingly on key CTAs and highlights */
export function GlowWrap({ children, variant = "on-dark", className = "", delay }: GlowWrapProps) {
  return (
    <span
      className={`glow-wrap glow-wrap--${variant} ${className}`.trim()}
      style={delay !== undefined ? ({ animationDelay: `${delay}s` } as CSSProperties) : undefined}
    >
      <span className="glow-wrap__inner">{children}</span>
    </span>
  );
}
