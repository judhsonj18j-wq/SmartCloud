import { useState } from "react";
import { cn } from "../utils/cn";
import { Check, Arrow } from "./Icons";
import Button from "./Button";

const plans = [
  {
    name: "Starter",
    tag: "For personal projects",
    monthly: "0 rs",
    yearly: "0 rs",
    features: ["1 project", "Smart Cloud subdomain", "Global CDN", "SSL Certificate", "Community support"],
    cta: "Get Started",
    highlight: false,
  },
  {
    name: "Pro",
    tag: "For growing teams",
    monthly: "15 rs",
    yearly: "12 rs",
    features: [
      "Unlimited projects",
      "Custom domains",
      "AI page builder",
      "Preview deploys",
      "Real-time analytics",
      "Priority support",
    ],
    cta: "Get Started Now",
    highlight: true,
  },
  {
    name: "Scale",
    tag: "For high-traffic sites",
    monthly: "60 rs",
    yearly: "50 rs",
    features: [
      "Everything in Pro",
      "Autoscaling infra",
      "SSO & roles",
      "SOC 2 report",
      "99.99% SLA",
      "Dedicated manager",
    ],
    cta: "Contact Sales",
    highlight: false,
  },
];

export default function Pricing() {
  const [yearly, setYearly] = useState(true);

  return (
    <section id="pricing" className="px-4 py-24 sm:px-6 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-aurora-400">
            Simple pricing
          </span>
          <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            Pay for growth, <span className="text-gradient">not overhead</span>
          </h2>

          <div className="mt-8 inline-flex items-center gap-3 rounded-full glass p-1.5 text-sm">
            <button
              onClick={() => setYearly(false)}
              className={cn("rounded-full px-4 py-1.5 transition", !yearly ? "bg-white text-ink-950 font-semibold" : "text-white/60")}
            >
              Monthly
            </button>
            <button
              onClick={() => setYearly(true)}
              className={cn("rounded-full px-4 py-1.5 transition", yearly ? "bg-white text-ink-950 font-semibold" : "text-white/60")}
            >
              Yearly <span className="text-lime-400 font-semibold">−20%</span>
            </button>
          </div>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {plans.map((p, i) => (
            <div
              key={p.name}
              className={cn(
                "reveal relative flex flex-col rounded-2xl border p-8 transition-all duration-500 hover:-translate-y-1.5",
                p.highlight
                  ? "border-transparent bg-gradient-to-b from-iris-500/15 to-aurora-500/5 shadow-[0_30px_90px_-30px_rgba(139,92,246,0.6)] ring-1 ring-iris-400/40 lg:-my-4 lg:py-12"
                  : "border-white/8 bg-white/[0.02] hover:border-white/20"
              )}
              style={{ transitionDelay: `${i * 90}ms` }}
            >
              {p.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[linear-gradient(110deg,#6ee7ff,#a78bfa,#fb7bb0)] px-3 py-1 text-xs font-semibold text-ink-950">
                  Most popular
                </span>
              )}
              <h3 className="font-display text-xl font-medium">{p.name}</h3>
              <p className="mt-1 text-sm text-white/50">{p.tag}</p>
              <div className="mt-6 flex items-end gap-1">
                <span className="font-display text-5xl font-semibold tracking-tight text-white">
                  {yearly ? p.yearly : p.monthly}
                </span>
                <span className="mb-1.5 text-sm text-white/50">/mo</span>
              </div>
              <ul className="mt-7 space-y-3 text-sm">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-white/75">
                    <Check className="h-4 w-4 shrink-0 text-lime-400" /> {f}
                  </li>
                ))}
              </ul>
              <Button
                variant={p.highlight ? "primary" : "soft"}
                className="mt-8 w-full"
              >
                {p.cta} {p.highlight && <Arrow className="h-4 w-4" />}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
