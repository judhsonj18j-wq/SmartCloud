import { useState } from "react";
import { cn } from "../utils/cn";
import { Check } from "./Icons";

const tabs = [
  {
    id: "design",
    label: "Design",
    heading: "A visual canvas that keeps up with your ideas",
    body: "Drag, drop and fine-tune with a real-time visual editor. Every component is responsive by default and snaps to a designer-grade layout system with full custom CSS capability.",
    points: ["Pixel-perfect responsive breakpoints", "AI-assisted color & layout palettes", "Live multi-user collaboration cursors"],
    render: () => (
      <div className="relative h-full w-full overflow-hidden rounded-xl bg-ink-900 border border-white/10 group">
        <img
          src="/images/template-saas.jpg"
          alt="Visual design canvas preview"
          className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-transparent to-black/30 opacity-60" />
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between rounded-lg glass-light p-3 backdrop-blur-md">
          <div className="flex items-center gap-2 text-xs font-semibold text-white">
            <span className="h-2 w-2 rounded-full bg-aurora-400 animate-ping" />
            Visual Editor Active
          </div>
          <span className="text-[11px] text-white/70">Responsive Desktop View</span>
        </div>
      </div>
    ),
  },
  {
    id: "deploy",
    label: "Deploy",
    heading: "Ship the moment inspiration strikes",
    body: "Connect a repo or click deploy. Smart Cloud builds, optimizes images, and distributes your site across 300+ global edge locations with instant preview URLs for every commit.",
    points: ["Git-connected instant previews", "Atomic 1-click rollbacks", "Zero-downtime edge distribution"],
    render: () => (
      <div className="flex h-full flex-col justify-center gap-3 rounded-xl bg-black/80 p-5 font-mono text-xs sm:text-sm border border-white/10 shadow-2xl">
        {[
          ["→ Initializing Smart Cloud Edge Build...", "text-white/60"],
          ["✓ Optimized 142 webp & avif assets", "text-aurora-400"],
          ["✓ Compiled React & Tailwind CSS bundle in 1.4s", "text-aurora-400"],
          ["✓ Generated SSL certificate for custom domain", "text-iris-400"],
          ["✓ Deployed to 312 edge nodes worldwide", "text-lime-400 font-semibold"],
          ["● Live at https://yourbrand.com", "text-flush-400 font-bold"],
        ].map(([t, c], i) => (
          <div key={i} className={cn("flex items-center gap-2", c as string)}>
            <span>{t}</span>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: "scale",
    label: "Scale",
    heading: "Grows effortlessly from launch day to launch year",
    body: "Autoscaling serverless infrastructure absorbs unexpected viral traffic spikes without a single configuration change. Monitor Core Web Vitals and live visitors in real time.",
    points: ["Autoscaling serverless by default", "Real-time Core Web Vitals tracking", "Built-in DDoS protection & WAF"],
    render: () => (
      <div className="relative h-full w-full overflow-hidden rounded-xl bg-ink-900 border border-white/10 group">
        <img
          src="/images/template-app.jpg"
          alt="Smart Cloud Analytics & Scaling Dashboard"
          className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-transparent to-black/20 opacity-70" />
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between rounded-lg glass p-3">
          <div className="text-xs font-semibold text-lime-400 flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-lime-400" />
            99.999% Edge Uptime
          </div>
          <div className="text-[11px] font-medium text-white/80">1.2M reqs/sec capacity</div>
        </div>
      </div>
    ),
  },
];

export default function Showcase() {
  const [active, setActive] = useState(0);
  const tab = tabs[active];

  return (
    <section id="showcase" className="px-4 py-24 sm:px-6 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-iris-400">
            See It In Motion
          </span>
          <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            Design, deploy, scale — <span className="text-gradient">in one place</span>
          </h2>
        </div>

        <div className="reveal mt-12 flex justify-center">
          <div className="glass inline-flex gap-1 rounded-full p-1.5">
            {tabs.map((t, i) => (
              <button
                key={t.id}
                onClick={() => setActive(i)}
                className={cn(
                  "rounded-full px-5 py-2 text-sm font-medium transition-all duration-300",
                  active === i ? "bg-white text-ink-950 shadow-lg font-semibold" : "text-white/60 hover:text-white"
                )}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        <div className="reveal mt-12 grid items-center gap-10 lg:grid-cols-2">
          <div key={tab.id} style={{ animation: "float-slow 0.5s ease" }}>
            <h3 className="font-display text-3xl font-medium tracking-tight">{tab.heading}</h3>
            <p className="mt-4 text-lg text-white/60 leading-relaxed">{tab.body}</p>
            <ul className="mt-6 space-y-3">
              {tab.points.map((p) => (
                <li key={p} className="flex items-center gap-3 text-white/85">
                  <span className="grid h-6 w-6 place-items-center rounded-full bg-lime-400/15 text-lime-400 shrink-0">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  {p}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-[radial-gradient(circle_at_60%_40%,rgba(56,189,248,0.25),transparent_60%)] blur-2xl" />
            <div className="glass relative h-80 sm:h-96 rounded-2xl p-3 shadow-2xl">
              <div key={tab.id} className="h-full">
                {tab.render()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
