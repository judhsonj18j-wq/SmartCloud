import { useState } from "react";
import { cn } from "../utils/cn";
import { Plus } from "./Icons";

const faqs = [
  {
    q: "Do I need to know how to code?",
    a: "Not at all. Smart Cloud's visual editor and AI builder let anyone create a professional site. If you do code, connect a Git repo and we'll build and deploy it automatically.",
  },
  {
    q: "Can I use my own domain?",
    a: "Yes. On Pro and Scale you can connect unlimited custom domains, and we provision free SSL certificates automatically — usually within seconds.",
  },
  {
    q: "How fast are the deploys, really?",
    a: "Most sites go live in under a second thanks to atomic edge releases. Every commit also gets an isolated preview URL so you can review before promoting to production.",
  },
  {
    q: "What frameworks are supported?",
    a: "Static HTML, React, Next.js, Astro, Vue, SvelteKit and most headless CMS setups. Smart Cloud auto-detects your stack and configures the build for you.",
  },
  {
    q: "What is included in the Starter plan?",
    a: "The Starter plan costs 0 rs and includes global CDN, SSL certificate, and a Smart Cloud subdomain — perfect for personal websites and prototypes.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes. Plans are month-to-month or annual, and you can upgrade, downgrade or cancel from your dashboard whenever you like — no friction.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="px-4 py-24 sm:px-6 sm:py-32">
      <div className="mx-auto max-w-3xl">
        <div className="reveal text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-iris-400">
            Questions
          </span>
          <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            Everything you need to know
          </h2>
        </div>

        <div className="reveal mt-12 space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={f.q}
                className={cn(
                  "overflow-hidden rounded-2xl border transition-colors duration-300",
                  isOpen ? "border-white/20 bg-white/[0.04]" : "border-white/8 bg-white/[0.02] hover:border-white/15"
                )}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-lg font-medium">{f.q}</span>
                  <Plus
                    className={cn(
                      "h-5 w-5 shrink-0 text-white/60 transition-transform duration-300",
                      isOpen && "rotate-45 text-aurora-400"
                    )}
                  />
                </button>
                <div
                  className={cn(
                    "grid transition-all duration-400 ease-out",
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-white/60">{f.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
