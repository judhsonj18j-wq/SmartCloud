import { useState } from "react";
import { cn } from "../utils/cn";
import { Arrow, Check } from "./Icons";

const categories = [
  "All Templates",
  "SaaS & Tech",
  "E-Commerce",
  "Portfolio & Agency",
  "Web Apps & Dashboards",
  "Blogs & Docs",
];

export interface Template {
  id: string;
  title: string;
  category: string;
  image: string;
  badge: string;
  speed: string;
  tags: string[];
  description: string;
  sections: string[];
  stack: string[];
}

const templates: Template[] = [
  // SaaS & Tech (3)
  {
    id: "saas-vortex",
    title: "Vortex — AI & SaaS Landing Page",
    category: "SaaS & Tech",
    image: "/images/template-saas.jpg",
    badge: "Popular Reference",
    speed: "0.29s load",
    tags: ["Dark Mode", "Conversion-Focused", "Interactive UI"],
    description: "A conversion-optimized SaaS landing page featuring animated hero sections, interactive pricing toggles, and feature bento grids.",
    sections: ["Sticky Nav", "Hero Video", "Feature Bento Grid", "Interactive Pricing", "Testimonials Carousel", "Footer CTA"],
    stack: ["React 19", "Tailwind CSS", "Framer Motion", "Vite"],
  },
  {
    id: "saas-apex",
    title: "Apex — AI Cloud Platform",
    category: "SaaS & Tech",
    image: "/images/hero-website-preview.jpg",
    badge: "Featured Tech",
    speed: "0.25s load",
    tags: ["AI Builder", "Real-time Analytics", "Dark Theme"],
    description: "Sleek tech platform layout designed for AI developer tools, cloud infrastructure providers, and high-growth tech startups.",
    sections: ["Interactive Terminal", "Speed Metrics", "Feature Comparison", "API Docs Preview", "Dark Mode Glass"],
    stack: ["Next.js", "Tailwind CSS", "TypeScript", "Vercel Edge"],
  },
  {
    id: "saas-nova",
    title: "Nova — B2B Software Platform",
    category: "SaaS & Tech",
    image: "/images/template-agency.jpg",
    badge: "Enterprise",
    speed: "0.28s load",
    tags: ["B2B SaaS", "Lead Capture", "Feature Matrix"],
    description: "Enterprise SaaS reference template with interactive product tours, ROI calculators, and security compliance badges.",
    sections: ["Value Prop Hero", "Interactive Product Tour", "ROI Calculator", "Enterprise Security", "Contact Sales"],
    stack: ["React", "Tailwind CSS", "TypeScript"],
  },

  // E-Commerce (3)
  {
    id: "ecommerce-aura",
    title: "Aura — Luxury Fashion Storefront",
    category: "E-Commerce",
    image: "/images/template-ecommerce.jpg",
    badge: "Best Seller",
    speed: "0.34s load",
    tags: ["Stripe Ready", "Fast Checkout", "Product Gallery"],
    description: "High-end product showcase for apparel, luxury goods, or digital items with cart drawer and filterable product grids.",
    sections: ["Hero Banner", "Featured Collection Grid", "Product Zoom Drawer", "Customer Reviews", "Newsletter Subscribe"],
    stack: ["React", "Tailwind CSS", "Stripe API", "Cloudinary"],
  },
  {
    id: "ecommerce-luxe",
    title: "Luxe — Boutique Digital Store",
    category: "E-Commerce",
    image: "/images/template-portfolio.jpg",
    badge: "Boutique",
    speed: "0.26s load",
    tags: ["Minimalist", "Instant Checkout", "Mobile First"],
    description: "Clean boutique shop layout focusing on high-impact product photography, quick buy drawers, and customer reviews.",
    sections: ["Grid Banner", "Lookbook Carousel", "Size Guide Drawer", "Instant Cart", "Customer Ratings"],
    stack: ["React", "Tailwind CSS", "Shopify Buy SDK"],
  },
  {
    id: "ecommerce-techmart",
    title: "TechMart — Electronics & Gadgets Shop",
    category: "E-Commerce",
    image: "/images/template-fintech.jpg",
    badge: "Gadgets",
    speed: "0.30s load",
    tags: ["Specs Table", "Filter Drawer", "Discounts"],
    description: "Feature-packed store for hardware, devices, and accessories with smart filters, spec comparisons, and inventory badges.",
    sections: ["Category Carousel", "Filter Bar", "Spec Comparisons", "Flash Deals Timer", "Express Checkout"],
    stack: ["Next.js", "Tailwind CSS", "Stripe"],
  },

  // Portfolio & Agency (3)
  {
    id: "portfolio-minimal",
    title: "Minimal — Creator & Studio Portfolio",
    category: "Portfolio & Agency",
    image: "/images/template-portfolio.jpg",
    badge: "Designer Pick",
    speed: "0.22s load",
    tags: ["Bold Typography", "Case Studies", "Contact Form"],
    description: "Architectural and minimalist layout built for designers, creative agencies, freelancers, and photographers.",
    sections: ["Full-Screen Hero", "Masonry Portfolio Grid", "Interactive Case Study Modal", "Client Logos", "Direct Contact"],
    stack: ["React", "Tailwind CSS", "GSAP Animations"],
  },
  {
    id: "agency-nexus",
    title: "Nexus — Digital Agency & Studio",
    category: "Portfolio & Agency",
    image: "/images/template-agency.jpg",
    badge: "Corporate",
    speed: "0.27s load",
    tags: ["Project Showcase", "Service Cards", "Client Testimonials"],
    description: "Sophisticated agency reference template with client case studies, service highlights, and booking integrations.",
    sections: ["Agency Hero", "Services Grid", "Case Studies", "Stat Counters", "Team Cards", "Lead Capture"],
    stack: ["React", "Tailwind CSS", "Vite", "Web Vitals 100"],
  },
  {
    id: "portfolio-prism",
    title: "Prism — Creative Photography & Visuals",
    category: "Portfolio & Agency",
    image: "/images/template-saas.jpg",
    badge: "Visual Studio",
    speed: "0.24s load",
    tags: ["Full Height Media", "Dark Aesthetic", "Lightbox"],
    description: "Visual portfolio created for photographers, directors, and 3D artists with smooth scroll motion and full screen media views.",
    sections: ["Infinite Scroll Gallery", "Fullscreen Lightbox", "Client Work Grid", "Bio & Awards", "Booking Form"],
    stack: ["React", "Tailwind CSS", "Framer Motion"],
  },

  // Web Apps & Dashboards (3)
  {
    id: "app-pulse",
    title: "Pulse — AI Web App & Dashboard Portal",
    category: "Web Apps & Dashboards",
    image: "/images/template-app.jpg",
    badge: "Full-Stack",
    speed: "0.31s load",
    tags: ["Real-time Data", "Auth Built-in", "Tailwind CSS"],
    description: "A complete Web App portal template equipped with sidebar navigation, user profile settings, charts, and table views.",
    sections: ["Sidebar Nav", "Metrics Overview", "Data Charts", "User Settings", "Notification Center", "API Keys Panel"],
    stack: ["React 19", "Tailwind CSS", "Recharts", "Lucide Icons"],
  },
  {
    id: "app-quantum",
    title: "Quantum — Cloud Metrics Console",
    category: "Web Apps & Dashboards",
    image: "/images/hero-website-preview.jpg",
    badge: "Developer Tool",
    speed: "0.25s load",
    tags: ["Live Logs", "Server Health", "Dark Mode"],
    description: "Real-time infrastructure and server monitoring dashboard with live log streams, latency charts, and alert management.",
    sections: ["Server Status Widget", "Latency Heatmap", "Log Streamer", "Alert Rules Config", "User Management"],
    stack: ["React", "Tailwind CSS", "WebSockets"],
  },
  {
    id: "app-finvue",
    title: "FinVue — Financial & Crypto Dashboard",
    category: "Web Apps & Dashboards",
    image: "/images/template-fintech.jpg",
    badge: "Fintech",
    speed: "0.28s load",
    tags: ["Crypto Charts", "Portfolio Tracker", "Dark UI"],
    description: "Financial management and crypto portfolio tracking dashboard with live candlestick charts and transaction history.",
    sections: ["Asset Overview", "Candlestick Charts", "Recent Transactions", "Wallet Integration", "Export Reports"],
    stack: ["React", "Tailwind CSS", "TradingView Widgets"],
  },

  // Blogs & Docs (3)
  {
    id: "blog-devhub",
    title: "DevHub — Developer Docs & Knowledge Base",
    category: "Blogs & Docs",
    image: "/images/template-blog.jpg",
    badge: "Docs Portal",
    speed: "0.21s load",
    tags: ["Code Highlighting", "Markdown Ready", "Search Bar"],
    description: "Fast documentation portal and engineering blog template with instant search, syntax highlighting, and table of contents.",
    sections: ["Global Search Header", "Docs Navigation Tree", "Code Block Preview", "Article TOC", "Author Byline"],
    stack: ["Astro / React", "Tailwind CSS", "Shiki Code Highlighter"],
  },
  {
    id: "blog-chronicle",
    title: "Chronicle — Tech Magazine & Media Hub",
    category: "Blogs & Docs",
    image: "/images/template-magazine.jpg",
    badge: "Editorial",
    speed: "0.23s load",
    tags: ["Editorial Grid", "Newsletter", "Category Tags"],
    description: "High-impact online magazine and publication template for tech news, opinion pieces, and podcast releases.",
    sections: ["Headline Banner", "Featured Articles Grid", "Podcast Player Bar", "Newsletter Signup", "Author Profiles"],
    stack: ["Next.js", "Tailwind CSS", "Contentful CMS"],
  },
  {
    id: "blog-syntax",
    title: "Syntax — Engineering Blog & Newsletter",
    category: "Blogs & Docs",
    image: "/images/template-portfolio.jpg",
    badge: "Engineering",
    speed: "0.20s load",
    tags: ["Code Snippets", "Substack Style", "Reading Time"],
    description: "Clean engineering publication theme optimized for deep-dive technical articles, code walkthroughs, and paid newsletter subscriptions.",
    sections: ["Featured Post Hero", "Tag Filter Bar", "Code Highlights", "Newsletter Box", "Archive List"],
    stack: ["React", "Tailwind CSS", "MDX"],
  },
];

export default function TemplateGallery() {
  const [filter, setFilter] = useState("All Templates");
  const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(null);
  const [device, setDevice] = useState<"desktop" | "tablet" | "mobile">("desktop");
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  const filtered = filter === "All Templates" 
    ? templates 
    : templates.filter((t) => t.category === filter);

  const handleImageError = (id: string) => {
    setFailedImages((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <section id="templates" className="relative px-4 py-24 sm:px-6 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="reveal in-view mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-lime-400">
            Reference Templates Library
          </span>
          <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            Pick a <span className="text-gradient">reference template</span> to customize
          </h2>
          <p className="mt-4 text-lg text-white/60">
            Explore world-class website layouts for every industry. Every category contains production-ready reference designs. Click any template to view its full interactive inspection modal.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="reveal in-view mt-10 flex flex-wrap justify-center gap-2">
          {categories.map((cat) => {
            const count = cat === "All Templates" 
              ? templates.length 
              : templates.filter(t => t.category === cat).length;
              
            return (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={cn(
                  "flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium transition-all duration-300 sm:text-sm cursor-pointer",
                  filter === cat
                    ? "bg-gradient-to-r from-aurora-400 to-iris-500 text-ink-950 shadow-lg font-semibold"
                    : "glass text-white/70 hover:bg-white/10 hover:text-white"
                )}
              >
                <span>{cat}</span>
                <span className={cn(
                  "rounded-full px-2 py-0.5 text-[11px] font-bold",
                  filter === cat ? "bg-black/20 text-ink-950" : "bg-white/10 text-white/80"
                )}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Grid of Templates - ensuring in-view opacity is always 1 */}
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((t) => (
            <div
              key={t.id}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition-all duration-500 hover:-translate-y-2 hover:border-white/25 hover:shadow-[0_20px_50px_-15px_rgba(139,92,246,0.3)] animate-fade-in"
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-ink-900">
                {!failedImages[t.id] ? (
                  <img
                    src={t.image}
                    alt={t.title}
                    onError={() => handleImageError(t.id)}
                    className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  <div className="flex h-full w-full flex-col justify-between bg-gradient-to-br from-ink-800 via-ink-900 to-iris-950 p-4 font-mono text-xs">
                    <div className="flex items-center justify-between text-aurora-400">
                      <span>{t.category}</span>
                      <span>{t.speed}</span>
                    </div>
                    <div className="my-auto text-center font-display text-base font-bold text-white">
                      {t.title}
                    </div>
                    <div className="flex justify-between text-[10px] text-white/50">
                      <span>SmartCloud UI</span>
                      <span>Responsive</span>
                    </div>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/20 to-transparent opacity-80" />

                {/* Category & Badge top left */}
                <div className="absolute left-3 top-3 flex items-center gap-2">
                  <span className="rounded-full bg-black/70 backdrop-blur-md px-3 py-1 text-xs font-medium text-white/90 ring-1 ring-white/20">
                    {t.badge}
                  </span>
                </div>

                {/* Speed indicator top right */}
                <div className="absolute right-3 top-3">
                  <span className="inline-flex items-center gap-1 rounded-full bg-lime-400/20 px-2.5 py-1 text-xs font-semibold text-lime-300 backdrop-blur-md">
                    ⚡ {t.speed}
                  </span>
                </div>

                {/* Hover action button overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-ink-950/60 backdrop-blur-[3px]">
                  <button
                    onClick={() => setSelectedTemplate(t)}
                    className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-xs font-bold text-ink-950 shadow-xl transition-transform hover:scale-105 cursor-pointer"
                  >
                    Preview Reference Design <Arrow className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* Card info */}
              <div className="mt-4 flex flex-1 flex-col justify-between px-1">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-aurora-400">
                      {t.category}
                    </span>
                  </div>
                  <h3 className="mt-1 font-display text-lg font-semibold text-white group-hover:text-aurora-400 transition-colors">
                    {t.title}
                  </h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-white/60 line-clamp-2">
                    {t.description}
                  </p>
                </div>

                <div className="mt-4 flex flex-wrap gap-1.5 pt-3 border-t border-white/5">
                  {t.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-white/5 px-2 py-0.5 text-[10px] font-medium text-white/60 ring-1 ring-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => setSelectedTemplate(t)}
                  className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-white/5 py-2 text-xs font-semibold text-aurora-400 ring-1 ring-aurora-400/20 hover:bg-aurora-400/10 hover:text-white transition-colors cursor-pointer"
                >
                  Inspect Template Reference <Arrow className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Modal Preview for Reference Templates */}
      {selectedTemplate && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-md animate-fade-in">
          <div className="glass relative flex h-[90vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl border border-white/20 shadow-2xl">
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-white/10 bg-ink-950/90 px-6 py-4">
              <div className="flex items-center gap-3">
                <span className="rounded-full bg-aurora-400/20 px-3 py-1 text-xs font-semibold text-aurora-300">
                  {selectedTemplate.category}
                </span>
                <h3 className="font-display text-lg font-bold text-white">
                  {selectedTemplate.title}
                </h3>
              </div>

              {/* Responsive Device Switcher */}
              <div className="hidden items-center gap-1 rounded-lg bg-white/5 p-1 sm:flex">
                <button
                  onClick={() => setDevice("desktop")}
                  className={cn("rounded px-2.5 py-1 text-xs font-medium transition cursor-pointer", device === "desktop" ? "bg-white text-ink-950 font-bold" : "text-white/60")}
                >
                  💻 Desktop
                </button>
                <button
                  onClick={() => setDevice("tablet")}
                  className={cn("rounded px-2.5 py-1 text-xs font-medium transition cursor-pointer", device === "tablet" ? "bg-white text-ink-950 font-bold" : "text-white/60")}
                >
                  📱 Tablet
                </button>
                <button
                  onClick={() => setDevice("mobile")}
                  className={cn("rounded px-2.5 py-1 text-xs font-medium transition cursor-pointer", device === "mobile" ? "bg-white text-ink-950 font-bold" : "text-white/60")}
                >
                  📲 Mobile
                </button>
              </div>

              <button
                onClick={() => setSelectedTemplate(null)}
                className="grid h-8 w-8 place-items-center rounded-lg bg-white/10 text-white/80 hover:bg-white/20 hover:text-white cursor-pointer"
              >
                ✕
              </button>
            </div>

            {/* Modal Body */}
            <div className="flex flex-1 flex-col overflow-y-auto lg:flex-row">
              {/* Preview Canvas */}
              <div className="flex flex-1 items-center justify-center bg-ink-950 p-6">
                <div
                  className={cn(
                    "relative overflow-hidden rounded-xl border border-white/10 bg-black shadow-2xl transition-all duration-500",
                    device === "desktop" && "w-full max-w-3xl aspect-[16/10]",
                    device === "tablet" && "w-[480px] aspect-[4/3]",
                    device === "mobile" && "w-[300px] aspect-[9/16]"
                  )}
                >
                  <img
                    src={selectedTemplate.image}
                    alt={selectedTemplate.title}
                    className="h-full w-full object-cover object-top"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-4">
                    <span className="inline-flex items-center gap-2 text-xs font-medium text-lime-400">
                      <span className="h-2 w-2 rounded-full bg-lime-400 animate-ping" />
                      Live Template Preview Mockup ({selectedTemplate.category})
                    </span>
                  </div>
                </div>
              </div>

              {/* Template Specs & Contact details */}
              <div className="w-full border-t border-white/10 bg-ink-900/90 p-6 lg:w-80 lg:border-l lg:border-t-0">
                <div className="space-y-6">
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-white/50">About Reference</h4>
                    <p className="mt-2 text-xs text-white/80 leading-relaxed">
                      {selectedTemplate.description}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-white/50">Included Layout Sections</h4>
                    <ul className="mt-2.5 space-y-2">
                      {selectedTemplate.sections.map((sec) => (
                        <li key={sec} className="flex items-center gap-2 text-xs text-white/80">
                          <Check className="h-3.5 w-3.5 text-lime-400" />
                          {sec}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-white/50">Tech Stack</h4>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {selectedTemplate.stack.map((st) => (
                        <span key={st} className="rounded bg-iris-500/20 px-2 py-0.5 text-[10px] font-semibold text-iris-300">
                          {st}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Direct Contact info box */}
                  <div className="rounded-xl border border-aurora-400/30 bg-aurora-400/10 p-4 text-xs">
                    <div className="font-semibold text-aurora-300">Need Custom Template Setup?</div>
                    <p className="mt-1 text-[11px] text-white/70">Contact our developers directly:</p>
                    <div className="mt-2.5 space-y-1 font-mono text-[11px]">
                      <a href="mailto:bluequantumofficial@gmail.com" className="block text-aurora-300 hover:underline">
                        ✉️ bluequantumofficial@gmail.com
                      </a>
                      <a href="tel:8837627472" className="block text-lime-300 hover:underline">
                        📞 Ph: 8837627472
                      </a>
                    </div>
                  </div>

                  <a
                    href="tel:8837627472"
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-aurora-400 to-iris-500 py-3 text-xs font-bold text-ink-950 shadow-lg hover:opacity-90 transition-opacity"
                  >
                    Build With This Template <Arrow className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
