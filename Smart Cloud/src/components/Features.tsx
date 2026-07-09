import type { ReactNode } from "react";
import { Bolt, Globe, Shield, Layers, Wand, Gauge } from "./Icons";
import { cn } from "../utils/cn";

interface Feature {
  icon: ReactNode;
  title: string;
  body: string;
  accent: string;
  span?: boolean;
}

const features: Feature[] = [
  {
    icon: <Wand />,
    title: "AI page builder",
    body: "Describe your idea in a sentence and watch Smart Cloud draft a polished, responsive page you can refine visually — no code required.",
    accent: "from-iris-500/25 to-flush-400/10",
    span: true,
  },
  {
    icon: <Bolt />,
    title: "Instant deploys",
    body: "Push and go live in under a second with atomic, zero-downtime releases and instant rollbacks.",
    accent: "from-aurora-500/25 to-transparent",
  },
  {
    icon: <Globe />,
    title: "Global edge network",
    body: "Your site is served from 300+ locations, so every visitor gets millisecond response times.",
    accent: "from-aurora-400/25 to-transparent",
  },
  {
    icon: <Shield />,
    title: "Secure by default",
    body: "Free automatic SSL, DDoS protection and SOC 2-grade infrastructure baked in from day one.",
    accent: "from-lime-400/20 to-transparent",
  },
  {
    icon: <Layers />,
    title: "Bring any stack",
    body: "Static, React, Astro, headless CMS or full-stack — Smart Cloud detects and builds it for you.",
    accent: "from-flush-400/20 to-transparent",
  },
  {
    icon: <Gauge />,
    title: "Analytics that matter",
    body: "Privacy-first, real-time insights on traffic, Core Web Vitals and conversions — no cookie banners.",
    accent: "from-iris-400/25 to-transparent",
    span: true,
  },
];

export default function Features() {
  return (
    <section id="features" className="relative px-4 py-24 sm:px-6 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-aurora-400">
            Everything included
          </span>
          <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            One platform for the <span className="text-gradient">entire journey</span>
          </h2>
          <p className="mt-4 text-lg text-white/60">
            From the first prompt to global scale — Smart Cloud replaces the tangle of tools
            with a single, delightful workflow.
          </p>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <article
              key={f.title}
              className={cn(
                "reveal group relative overflow-hidden rounded-2xl border border-white/8 bg-white/[0.02] p-7 transition-all duration-500 hover:-translate-y-1 hover:border-white/20",
                f.span && "lg:col-span-2"
              )}
              style={{ transitionDelay: `${(i % 3) * 90}ms` }}
            >
              <div className={cn("absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-500 group-hover:opacity-100", f.accent)} />
              <div className="relative">
                <div className="mb-5 grid h-12 w-12 place-items-center rounded-xl bg-white/5 text-white ring-1 ring-white/10 transition-transform duration-500 group-hover:scale-110 group-hover:text-aurora-400">
                  {f.icon}
                </div>
                <h3 className="font-display text-xl font-medium tracking-tight">{f.title}</h3>
                <p className="mt-2 max-w-md text-white/60">{f.body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
