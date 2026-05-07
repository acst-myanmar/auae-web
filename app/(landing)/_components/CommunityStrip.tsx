const CITIES = [
  "Tokyo 東京",
  "Osaka 大阪",
  "Nagoya 名古屋",
  "Fukuoka 福岡",
  "Sapporo 札幌",
  "Kyoto 京都",
  "Yokohama 横浜",
  "Nagano 長野",
  "Kobe 神戸",
  "Sendai 仙台",
  "Hiroshima 広島",
  "Saitama 埼玉",
];

export function CommunityStrip() {
  return (
    <section
      id="community"
      className="relative scroll-mt-20 overflow-hidden border-y border-black/5 bg-gradient-to-br from-brand-soft via-white to-brand-soft py-14 md:py-20"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-gold/30 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 top-1/3 h-72 w-72 rounded-full bg-brand/25 blur-3xl"
      />

      <div className="mx-auto max-w-6xl px-5 text-center md:px-8">
        <p
          lang="my"
          className="font-myanmar text-sm font-semibold uppercase tracking-[0.25em] text-brand-ink"
        >
          ဂျပန်ရောက် မြန်မာတွေအတွက်
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
          Built for the Myanmar
          <br className="md:hidden" /> community in Japan.
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-base text-neutral-600 md:text-lg">
          From Hokkaido to Kyushu — find your people, your place, and your next
          opportunity.
        </p>

        <div className="mt-8 grid grid-cols-3 gap-3 md:mt-12 md:grid-cols-3 md:gap-6">
          <Stat value="12+" labelEn="Cities" labelMy="မြို့" />
          <Stat
            value="8"
            labelEn="Core features"
            labelMy="အဓိက လုပ်ဆောင်ချက်"
          />
          <Stat value="24/7" labelEn="Community" labelMy="Community" />
        </div>
      </div>

      {/* Marquee */}
      <div
        className="mt-10 select-none [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]"
        aria-hidden
      >
        <div className="flex w-max animate-marquee gap-3 motion-reduce:animate-none">
          {[...CITIES, ...CITIES].map((city, i) => (
            <span
              key={`${city}-${i}`}
              className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-white/90 px-4 py-2 text-sm font-medium text-neutral-800 shadow-sm backdrop-blur"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-gold" />
              {city}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Stat({
  value,
  labelEn,
  labelMy,
}: {
  value: string;
  labelEn: string;
  labelMy: string;
}) {
  return (
    <div className="rounded-2xl border border-black/5 bg-white/80 px-3 py-4 text-center shadow-sm backdrop-blur">
      <div className="bg-gradient-to-br from-brand to-brand-ink bg-clip-text text-3xl font-bold text-transparent md:text-4xl">
        {value}
      </div>
      <div className="mt-1 text-xs font-semibold uppercase tracking-wider text-neutral-700 md:text-sm">
        {labelEn}
      </div>
      <div
        lang="my"
        className="font-myanmar mt-0.5 text-[11px] text-neutral-500 md:text-xs"
      >
        {labelMy}
      </div>
    </div>
  );
}
