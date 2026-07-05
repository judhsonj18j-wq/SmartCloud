import { useEffect, useState } from "react";
import Button from "./Button";
import { Arrow, Bolt, Globe, Check } from "./Icons";

const words = ["websites", "storefronts", "portfolios", "landing pages", "web apps"];

export default function Hero() {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % words.length), 2400);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="top" className="relative px-4 pt-36 pb-20 sm:px-6 sm:pt-44 lg:pt-48">
      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        {/* Copy */}
        <div className="reveal in-view text-center lg:text-left">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-white/75">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75" style={{ animation: "pulse-ring 1.8s ease-out infinite" }} />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-lime-400" />
            </span>
            New — AI page builder v3.0 now live
          </span>

          <h1 className="mt-6 font-display text-5xl font-semibold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
            Build stunning
            <br className="hidden sm:block" />{" "}
            <span className="relative inline-block">
              <span key={idx} className="text-gradient inline-block" style={{ animation: "float-slow 0.6s ease" }}>
                {words[idx]}
              </span>
            </span>
            <br />
            in minutes.
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/65 lg:mx-0">
            Smart Cloud gives you a lightning-fast platform to design, deploy and scale
            websites — no servers to manage, no config to fight. Just ship.
          </p>

          <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row lg:justify-start">
            <Button variant="primary" className="w-full px-7 py-4 sm:w-auto">
              Get Started <Arrow className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Button>
            <Button variant="ghost" className="w-full px-7 py-4 sm:w-auto">
              Watch the 90s demo
            </Button>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-white/55 lg:justify-start">
            {["No credit card required", "Free custom domain SSL", "Deploy in 1 click"].map((t) => (
              <span key={t} className="inline-flex items-center gap-1.5">
                <Check className="h-4 w-4 text-lime-400" /> {t}
              </span>
            ))}
          </div>
        </div>

        {/* Live build canvas with real image screenshot */}
        <div className="reveal in-view relative">
          <div className="absolute -inset-6 rounded-[2rem] bg-[radial-gradient(circle_at_70%_20%,rgba(139,92,246,0.45),transparent_65%)] blur-2xl" />
          
          <div className="glass group relative overflow-hidden rounded-[1.6rem] p-3 shadow-[0_40px_120px_-40px_rgba(0,0,0,0.9)] transition-transform duration-500 hover:scale-[1.01]">
            {/* Browser chrome */}
            <div className="flex items-center gap-2 px-2 pb-3 pt-1">
              <span className="h-3 w-3 rounded-full bg-flush-400/80" />
              <span className="h-3 w-3 rounded-full bg-lime-400/80" />
              <span className="h-3 w-3 rounded-full bg-aurora-400/80" />
              <div className="ml-3 flex flex-1 items-center gap-2 rounded-lg bg-black/40 px-3 py-1.5 text-xs text-white/60">
                <Globe className="h-3.5 w-3.5 text-aurora-400" />
                <span className="font-mono text-white/80">yourbrand.smartcloud.app</span>
                <span className="ml-auto inline-flex items-center gap-1.5 rounded-full bg-lime-400/10 px-2 py-0.5 text-[11px] font-medium text-lime-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-lime-400 animate-pulse" /> Live
                </span>
              </div>
            </div>

            {/* High quality website image preview */}
            <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-white/10 bg-ink-900">
              <img
                src="/images/hero-website-preview.jpg"
                alt="Smart Cloud Website Builder Interface"
                className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-transparent to-transparent opacity-60" />

              {/* Interactive editor overlay badge */}
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between rounded-lg glass-light p-2.5 backdrop-blur-md">
                <div className="flex items-center gap-2">
                  <span className="grid h-6 w-6 place-items-center rounded-md bg-iris-500/30 text-iris-400">✨</span>
                  <span className="text-xs font-medium text-white/90">AI Page Generator Active</span>
                </div>
                <span className="rounded bg-lime-400/20 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-lime-300">Ready to Publish</span>
              </div>
            </div>
          </div>

          {/* Floating stat card 1 */}
          <div className="glass absolute -left-5 top-1/4 hidden animate-float-slow items-center gap-3 rounded-xl p-3 text-xs shadow-2xl sm:flex" style={{ animationDelay: "-2s" }}>
            <div className="grid h-9 w-9 place-items-center rounded-lg bg-aurora-400/20 text-aurora-400">
              <Bolt className="h-5 w-5" />
            </div>
            <div>
              <div className="font-bold text-white">0.38s Speed Score</div>
              <div className="text-white/55">100% Lighthouse Performance</div>
            </div>
          </div>

          {/* Floating stat card 2 */}
          <div className="glass absolute -right-4 bottom-6 hidden animate-float-slow items-center gap-3 rounded-xl p-3 text-xs shadow-2xl sm:flex" style={{ animationDelay: "-5s" }}>
            <div className="grid h-9 w-9 place-items-center rounded-lg bg-lime-400/20 text-lime-400">
              ✓
            </div>
            <div>
              <div className="font-bold text-white">Global Edge CDN</div>
              <div className="text-white/55">Deployed in 312 locations</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
