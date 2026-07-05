import { Logo } from "./Icons";

const cols = [
  { title: "Product", links: ["Features", "Templates", "AI Builder", "Pricing", "Changelog"] },
  { title: "Resources", links: ["Docs", "Guides", "API Reference", "Status", "Community"] },
  { title: "Company", links: ["About", "Blog", "Careers", "Contact", "Press"] },
  { title: "Legal", links: ["Privacy", "Terms", "Security", "Cookies", "DPA"] },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/8 px-4 pb-10 pt-16 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_repeat(4,1fr)]">
          <div>
            <a href="#top" className="flex items-center gap-2.5 font-display text-lg font-semibold">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-white/5 ring-1 ring-white/10">
                <Logo className="h-6 w-6" />
              </span>
              Smart<span className="text-gradient">Cloud</span>
            </a>
            <p className="mt-4 max-w-xs text-sm text-white/50">
              The fastest way to build, launch and scale beautiful websites — from first prompt to global scale.
            </p>

            <div className="mt-5 space-y-1.5 text-xs">
              <div className="text-white/40 uppercase tracking-wider font-semibold text-[10px]">Direct Contact</div>
              <a href="mailto:bluequantumofficial@gmail.com" className="block font-mono text-aurora-400 hover:underline">
                ✉️ bluequantumofficial@gmail.com
              </a>
              <a href="tel:8837627472" className="block font-semibold text-lime-400 hover:underline">
                📞 Ph: 8837627472
              </a>
            </div>

            <div className="mt-6 flex gap-3">
              {["X", "in", "GH", "Dr"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="grid h-9 w-9 place-items-center rounded-lg bg-white/5 text-xs text-white/60 ring-1 ring-white/10 transition-all hover:-translate-y-0.5 hover:text-white hover:ring-white/30"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {cols.map((c) => (
            <div key={c.title}>
              <h4 className="text-sm font-semibold text-white/85">{c.title}</h4>
              <ul className="mt-4 space-y-2.5">
                {c.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-sm text-white/50 transition-colors hover:text-white">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/8 pt-6 text-sm text-white/45 sm:flex-row">
          <span>© {new Date().getFullYear()} Smart Cloud, Inc. All rights reserved.</span>
          <div className="flex items-center gap-4 text-xs">
            <a href="mailto:bluequantumofficial@gmail.com" className="text-aurora-300 hover:underline">bluequantumofficial@gmail.com</a>
            <span className="text-white/20">•</span>
            <a href="tel:8837627472" className="text-lime-400 hover:underline">8837627472</a>
          </div>
          <span className="inline-flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-lime-400" /> All systems operational
          </span>
        </div>
      </div>
    </footer>
  );
}
