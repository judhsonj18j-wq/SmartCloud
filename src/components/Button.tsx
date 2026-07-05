import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "../utils/cn";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "ghost" | "soft";
  as?: "a";
  href?: string;
  children: ReactNode;
}

export default function Button({ variant = "primary", className, children, as, href, ...rest }: Props) {
  const styles = {
    primary:
      "group relative overflow-hidden text-ink-950 shadow-[0_10px_40px_-10px_rgba(139,92,246,0.7)] bg-[linear-gradient(110deg,#6ee7ff,#a78bfa_50%,#fb7bb0)] bg-[length:200%_auto] hover:bg-[position:100%_center] transition-[background-position,transform] duration-500 hover:-translate-y-0.5",
    ghost:
      "text-white/85 border border-white/12 hover:border-white/30 hover:bg-white/5 transition-colors",
    soft: "glass-light text-white hover:bg-white/8 transition-colors",
  }[variant];

  const cls = cn(
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-tight focus:outline-none focus-visible:ring-2 focus-visible:ring-iris-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950",
    styles,
    className
  );

  if (as === "a") {
    return (
      <a href={href} className={cls}>
        {children}
      </a>
    );
  }
  return (
    <button className={cls} {...rest}>
      {children}
    </button>
  );
}
