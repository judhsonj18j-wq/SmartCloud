import { useState } from "react";
import { cn } from "../utils/cn";
import { useScrollProgress } from "../hooks/useReveal";
import { Logo, Arrow } from "./Icons";
import Button from "./Button";
import TopBar from "./TopBar";

const links = [
  { label: "Features", href: "#features" },
  { label: "Templates", href: "#templates" },
  { label: "Showcase", href: "#showcase" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const scrolled = useScrollProgress();
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed inset-x-0 top-0 z-50">
      <TopBar />
      <header className={cn("transition-all duration-500", scrolled ? "py-2" : "py-4")}>
        <nav
          className={cn(
            "mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-4 transition-all duration-500 sm:px-6",
            scrolled ? "glass py-2.5 shadow-[0_16px_50px_-20px_rgba(0,0,0,0.8)]" : "py-3"
          )}
        >
          <a href="#top" className="flex items-center gap-2.5 font-display text-lg font-semibold tracking-tight">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-white/5 ring-1 ring-white/10">
              <Logo className="h-6 w-6" />
            </span>
            Smart<span className="text-gradient">Cloud</span>
          </a>

          <ul className="hidden items-center gap-1 md:flex">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="group relative rounded-full px-4 py-2 text-sm text-white/70 transition-colors hover:text-white"
                >
                  {l.label}
                  <span className="absolute inset-x-4 -bottom-0.5 h-px origin-left scale-x-0 bg-gradient-to-r from-aurora-400 to-iris-500 transition-transform duration-300 group-hover:scale-x-100" />
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-3 md:flex">
            <a
              href="tel:8837627472"
              className="text-xs font-semibold text-lime-400 bg-lime-400/10 hover:bg-lime-400/20 px-3 py-1.5 rounded-full ring-1 ring-lime-400/30 transition-colors"
            >
              📞 8837627472
            </a>
            <Button variant="primary" className="px-5 py-2.5">
              Get Started <Arrow className="h-4 w-4" />
            </Button>
          </div>

          <button
            className="grid h-10 w-10 place-items-center rounded-xl ring-1 ring-white/10 md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <div className="space-y-1.5">
              <span className={cn("block h-0.5 w-5 bg-white transition-transform", open && "translate-y-2 rotate-45")} />
              <span className={cn("block h-0.5 w-5 bg-white transition-opacity", open && "opacity-0")} />
              <span className={cn("block h-0.5 w-5 bg-white transition-transform", open && "-translate-y-2 -rotate-45")} />
            </div>
          </button>
        </nav>

        {open && (
          <div className="mx-auto mt-2 max-w-6xl px-4 md:hidden">
            <div className="glass flex flex-col gap-2 rounded-2xl p-4">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-2.5 text-sm text-white/80 hover:bg-white/5"
                >
                  {l.label}
                </a>
              ))}
              <div className="border-t border-white/10 pt-2 flex flex-col gap-2">
                <a
                  href="mailto:bluequantumofficial@gmail.com"
                  className="text-xs text-aurora-400 font-mono px-3 py-1"
                >
                  ✉️ bluequantumofficial@gmail.com
                </a>
                <a
                  href="tel:8837627472"
                  className="text-xs text-lime-400 font-semibold px-3 py-1"
                >
                  📞 Ph: 8837627472
                </a>
                <Button variant="primary" className="mt-1 w-full">
                  Get Started <Arrow className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}
