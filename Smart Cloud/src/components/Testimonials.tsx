import { Star } from "./Icons";

const items = [
  {
    quote:
      "We migrated our marketing site to Smart Cloud in an afternoon. Load times dropped by half and our team ships pages without ever pinging engineering.",
    name: "Amara Osei",
    role: "Head of Growth, Vela",
    avatar: "https://images.pexels.com/photos/33680700/pexels-photo-33680700.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    quote:
      "The AI builder is uncanny. I described a pricing page and got something 90% done in seconds. Smart Cloud is the first tool that keeps pace with how fast I think.",
    name: "Diego Marín",
    role: "Founder, Orbital Studio",
    avatar: "https://images.pexels.com/photos/5308640/pexels-photo-5308640.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    quote:
      "Global edge, automatic SSL, previews on every commit — it replaced three separate vendors for us. Our infra bill went down and reliability went up.",
    name: "Priya Nair",
    role: "CTO, Lumina",
    avatar: "https://images.pexels.com/photos/34761515/pexels-photo-34761515.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    quote:
      "Onboarding new clients used to take a week. Now I hand them a Smart Cloud workspace and they're live the same day. Absolute game changer.",
    name: "Tomás Berg",
    role: "Agency Owner, Fjord",
    avatar: "https://images.pexels.com/photos/14950779/pexels-photo-14950779.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
];

export default function Testimonials() {
  return (
    <section className="px-4 py-24 sm:px-6 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-flush-400">
            Loved By Builders
          </span>
          <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            Teams don't just switch — <span className="text-gradient">they stay</span>
          </h2>
        </div>

        <div className="mt-16 columns-1 gap-6 sm:columns-2">
          {items.map((t, i) => (
            <figure
              key={t.name}
              className="reveal group mb-6 break-inside-avoid rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition-all duration-500 hover:-translate-y-1 hover:border-white/25 hover:shadow-2xl"
              style={{ transitionDelay: `${(i % 2) * 100}ms` }}
            >
              <div className="mb-4 flex gap-1 text-lime-400">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} className="h-4 w-4" />
                ))}
              </div>
              <blockquote className="text-lg leading-relaxed text-white/90">"{t.quote}"</blockquote>
              <figcaption className="mt-6 flex items-center gap-3.5">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="h-11 w-11 rounded-full object-cover ring-2 ring-iris-400/50"
                />
                <div>
                  <span className="block font-semibold text-white">{t.name}</span>
                  <span className="block text-xs text-white/50">{t.role}</span>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
