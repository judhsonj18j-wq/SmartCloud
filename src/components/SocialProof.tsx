const brands = ["Northwind", "Vela", "Lumina", "Orbital", "Fjord", "Pulse", "Kestrel", "Monarch"];

export default function SocialProof() {
  return (
    <section className="reveal border-y border-white/5 py-12">
      <p className="mb-8 text-center text-xs font-medium uppercase tracking-[0.25em] text-white/40">
        Powering 40,000+ teams shipping the web
      </p>
      <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
        <div className="flex w-max animate-marquee gap-14 pr-14">
          {[...brands, ...brands].map((b, i) => (
            <span
              key={i}
              className="font-display text-2xl font-medium tracking-tight text-white/35 transition-colors hover:text-white/80"
            >
              {b}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
