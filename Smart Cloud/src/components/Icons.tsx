import type { SVGProps } from "react";

type P = SVGProps<SVGSVGElement>;
const base = "h-5 w-5";

export const Logo = (p: P) => (
  <svg viewBox="0 0 32 32" fill="none" {...p}>
    <defs>
      <linearGradient id="lg" x1="0" y1="0" x2="32" y2="32">
        <stop stopColor="#6ee7ff" />
        <stop offset="0.5" stopColor="#a78bfa" />
        <stop offset="1" stopColor="#fb7bb0" />
      </linearGradient>
    </defs>
    <path
      d="M22.5 25a6.5 6.5 0 0 0 1-12.93A8 8 0 0 0 8.2 13.2 5.5 5.5 0 0 0 9 25h13.5Z"
      fill="url(#lg)"
      fillOpacity="0.18"
      stroke="url(#lg)"
      strokeWidth="1.6"
    />
    <path d="M14 18.5l2.2 2.2 4.3-5" stroke="url(#lg)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const Bolt = (p: P) => (
  <svg viewBox="0 0 24 24" fill="none" className={base} {...p}>
    <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
  </svg>
);

export const Globe = (p: P) => (
  <svg viewBox="0 0 24 24" fill="none" className={base} {...p}>
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
    <path d="M3 12h18M12 3c2.5 2.5 3.8 6 3.8 9s-1.3 6.5-3.8 9c-2.5-2.5-3.8-6-3.8-9S9.5 5.5 12 3Z" stroke="currentColor" strokeWidth="1.6" />
  </svg>
);

export const Shield = (p: P) => (
  <svg viewBox="0 0 24 24" fill="none" className={base} {...p}>
    <path d="M12 3l7 3v5c0 5-3.5 8.5-7 10-3.5-1.5-7-5-7-10V6l7-3Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const Layers = (p: P) => (
  <svg viewBox="0 0 24 24" fill="none" className={base} {...p}>
    <path d="M12 3 3 7.5l9 4.5 9-4.5L12 3Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    <path d="M3 12l9 4.5L21 12M3 16.5 12 21l9-4.5" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
  </svg>
);

export const Wand = (p: P) => (
  <svg viewBox="0 0 24 24" fill="none" className={base} {...p}>
    <path d="M4 20 15 9M14 4l.7 1.9L16.6 6l-1.9.7L14 8.6l-.7-1.9L11.4 6l1.9-.7L14 4ZM19 11l.5 1.3 1.3.5-1.3.5-.5 1.3-.5-1.3-1.3-.5 1.3-.5.5-1.3Z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const Gauge = (p: P) => (
  <svg viewBox="0 0 24 24" fill="none" className={base} {...p}>
    <path d="M4 18a8 8 0 1 1 16 0" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    <path d="M12 18l4-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    <circle cx="12" cy="18" r="1.4" fill="currentColor" />
  </svg>
);

export const Check = (p: P) => (
  <svg viewBox="0 0 24 24" fill="none" className={base} {...p}>
    <path d="m5 12.5 4 4 10-11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const Arrow = (p: P) => (
  <svg viewBox="0 0 24 24" fill="none" className={base} {...p}>
    <path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const Plus = (p: P) => (
  <svg viewBox="0 0 24 24" fill="none" className={base} {...p}>
    <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

export const Star = (p: P) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={base} {...p}>
    <path d="M12 2.5l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 18.9 6.1 20.5l1.2-6.5L2.5 9.4l6.6-.9L12 2.5Z" />
  </svg>
);
