import { useEffect, useRef, useState } from "react";

interface Metric {
  value: number;
  suffix: string;
  label: string;
  decimals?: number;
}

const metrics: Metric[] = [
  { value: 92, suffix: "%", label: "faster time to launch" },
  { value: 0.4, suffix: "s", label: "average global load", decimals: 1 },
  { value: 40, suffix: "K+", label: "teams building daily" },
  { value: 99.99, suffix: "%", label: "uptime guaranteed", decimals: 2 },
];

function Counter({ m }: { m: Metric }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const done = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !done.current) {
        done.current = true;
        const start = performance.now();
        const dur = 1600;
        const tick = (now: number) => {
          const p = Math.min((now - start) / dur, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          setVal(m.value * eased);
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }
    }, { threshold: 0.5 });
    io.observe(el);
    return () => io.disconnect();
  }, [m.value]);

  return (
    <div ref={ref} className="text-center">
      <div className="font-display text-5xl font-semibold tracking-tight sm:text-6xl">
        <span className="text-gradient">
          {val.toFixed(m.decimals ?? 0)}
          {m.suffix}
        </span>
      </div>
      <div className="mt-2 text-sm text-white/55">{m.label}</div>
    </div>
  );
}

export default function Benefits() {
  return (
    <section className="px-4 py-20 sm:px-6">
      <div className="reveal mx-auto max-w-5xl rounded-3xl border border-white/8 bg-white/[0.02] px-6 py-14 sm:px-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((m) => (
            <Counter key={m.label} m={m} />
          ))}
        </div>
      </div>
    </section>
  );
}
