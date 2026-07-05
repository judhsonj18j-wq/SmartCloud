import Button from "./Button";
import { Arrow, Check } from "./Icons";

export default function CTA() {
  return (
    <section className="px-4 py-16 sm:px-6 sm:py-24">
      <div className="reveal relative mx-auto max-w-5xl overflow-hidden rounded-[2rem] border border-white/10 px-6 py-16 text-center sm:px-12 sm:py-24">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_20%,rgba(139,92,246,0.4),transparent_55%),radial-gradient(circle_at_75%_80%,rgba(56,189,248,0.35),transparent_55%)]" />
        <div className="grid-bg absolute inset-0 -z-10 opacity-40 animate-grid-pan" />

        <h2 className="mx-auto max-w-2xl font-display text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
          Your next site is <span className="text-gradient">one prompt</span> away
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-lg text-white/70">
          Join 40,000+ builders shipping faster on Smart Cloud. Launch your website today.
        </p>

        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button variant="primary" className="w-full px-8 py-4 sm:w-auto">
            Get Started Now <Arrow className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Button>
          <a
            href="tel:8837627472"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-lime-400/40 bg-lime-400/10 px-8 py-4 text-sm font-semibold text-lime-300 hover:bg-lime-400/20 transition-colors"
          >
            📞 Call Support: 8837627472
          </a>
        </div>

        {/* Contact details card */}
        <div className="mx-auto mt-10 max-w-md rounded-2xl glass p-4 text-center ring-1 ring-white/10">
          <div className="text-xs font-semibold uppercase tracking-wider text-aurora-300">Direct Contact & Inquiries</div>
          <div className="mt-2 flex flex-col sm:flex-row items-center justify-center gap-3 text-sm font-medium text-white/90">
            <a href="mailto:bluequantumofficial@gmail.com" className="hover:text-aurora-300 transition-colors underline">
              bluequantumofficial@gmail.com
            </a>
            <span className="hidden sm:inline text-white/30">•</span>
            <a href="tel:8837627472" className="text-lime-400 hover:underline">
              Ph: 8837627472
            </a>
          </div>
        </div>

        <div className="mt-7 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-white/60">
          {["Starter plan available", "No credit card required", "Cancel anytime"].map((t) => (
            <span key={t} className="inline-flex items-center gap-1.5">
              <Check className="h-4 w-4 text-lime-400" /> {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
