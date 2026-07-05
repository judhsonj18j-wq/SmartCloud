export default function TopBar() {
  return (
    <div className="bg-gradient-to-r from-ink-900 via-iris-950/60 to-ink-900 border-b border-white/10 px-4 py-2 text-xs text-white/80">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-1.5 font-medium">
          <span className="inline-block h-2 w-2 rounded-full bg-lime-400 animate-pulse" />
          <span>Need custom web development or cloud setup?</span>
          <span className="hidden sm:inline text-white/50">| Contact our direct engineering support team</span>
        </div>

        <div className="flex items-center gap-4 text-xs">
          <a
            href="mailto:bluequantumofficial@gmail.com"
            className="flex items-center gap-1.5 font-medium text-aurora-400 hover:text-white transition-colors"
          >
            <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            bluequantumofficial@gmail.com
          </a>

          <a
            href="tel:8837627472"
            className="flex items-center gap-1.5 font-semibold text-lime-400 hover:text-white transition-colors"
          >
            <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            Ph: 8837627472
          </a>
        </div>
      </div>
    </div>
  );
}
