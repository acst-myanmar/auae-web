type StoreBadgesProps = {
  size?: "sm" | "md";
  className?: string;
};

export function StoreBadges({ size = "md", className = "" }: StoreBadgesProps) {
  const padding = size === "sm" ? "px-3 py-2" : "px-4 py-2.5";
  const titleClass = size === "sm" ? "text-[11px]" : "text-xs";
  const subtitleClass = size === "sm" ? "text-sm" : "text-base";

  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      <a
        href="#download"
        className={`group inline-flex items-center gap-2.5 rounded-2xl bg-neutral-900 ${padding} text-white transition hover:scale-[1.03] hover:bg-neutral-800 active:scale-95`}
        aria-label="Download on the App Store"
      >
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden
          className="h-6 w-6"
        >
          <path d="M16.365 1.43c0 1.14-.46 2.27-1.21 3.07-.79.86-2.08 1.52-3.13 1.43-.13-1.1.42-2.27 1.16-3.04.83-.88 2.23-1.52 3.18-1.46zm4.27 17.46c-.78 1.14-1.6 2.27-2.88 2.29-1.27.02-1.68-.75-3.13-.75-1.45 0-1.9.73-3.1.77-1.25.04-2.2-1.23-3-2.36-1.62-2.34-2.86-6.6-1.2-9.49.83-1.43 2.32-2.34 3.94-2.36 1.22-.02 2.36.82 3.1.82.74 0 2.13-1.01 3.6-.86.61.02 2.34.25 3.45 1.86-.09.06-2.06 1.2-2.04 3.59.02 2.85 2.49 3.8 2.52 3.81-.02.06-.39 1.34-1.27 2.65z" />
        </svg>
        <span className="flex flex-col leading-tight">
          <span className={`${titleClass} opacity-80`}>Download on the</span>
          <span className={`${subtitleClass} font-semibold`}>App Store</span>
        </span>
      </a>

      <a
        href="#download"
        className={`group inline-flex items-center gap-2.5 rounded-2xl bg-neutral-900 ${padding} text-white transition hover:scale-[1.03] hover:bg-neutral-800 active:scale-95`}
        aria-label="Get it on Google Play"
      >
        <svg viewBox="0 0 24 24" aria-hidden className="h-6 w-6">
          <defs>
            <linearGradient id="gp-a" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#5A67D8" />
              <stop offset="1" stopColor="#7F8DEA" />
            </linearGradient>
            <linearGradient id="gp-b" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#FFD700" />
              <stop offset="1" stopColor="#FFB347" />
            </linearGradient>
          </defs>
          <path
            d="M3.6 2.5c-.4.3-.6.7-.6 1.3v16.4c0 .6.2 1 .6 1.3l9.4-9.5z"
            fill="url(#gp-a)"
          />
          <path
            d="M16.7 8.6 13 11.9l3.7 3.7 3.5-2c.7-.4.7-1.4 0-1.8z"
            fill="url(#gp-b)"
          />
          <path
            d="M3.6 2.5 13 11.9 16.7 8.6 5.6 2.3c-.7-.4-1.5-.2-2 .2z"
            fill="#fff"
            opacity=".95"
          />
          <path
            d="m13 11.9-9.4 9.6c.5.4 1.3.6 2 .2l11.1-6.3z"
            fill="#fff"
            opacity=".75"
          />
        </svg>
        <span className="flex flex-col leading-tight">
          <span className={`${titleClass} opacity-80`}>Get it on</span>
          <span className={`${subtitleClass} font-semibold`}>Google Play</span>
        </span>
      </a>
    </div>
  );
}
