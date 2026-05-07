import type { Feature } from "../_data/features";

type PlaceholderProps = {
  feature: Feature;
  index: number;
};

/**
 * Numbered gradient screen used until real screenshots land in /public/screenshots/.
 * Mimics a stylized app screen so the page looks intentional during early states.
 */
export function Placeholder({ feature, index }: PlaceholderProps) {
  const number = String(index + 1).padStart(2, "0");

  return (
    <div
      className={`relative h-full w-full bg-gradient-to-br ${feature.gradient} text-white`}
    >
      <div className="absolute inset-0 opacity-20 mix-blend-overlay [background:radial-gradient(circle_at_30%_20%,white,transparent_55%)]" />

      <div className="relative flex h-full flex-col">
        <div className="flex items-center justify-between px-5 pt-3 text-[10px] font-semibold tracking-wider opacity-90">
          <span>9:41</span>
          <span className="flex items-center gap-1">
            <span className="h-1.5 w-1.5 rounded-full bg-white/90" />
            <span className="h-1.5 w-1.5 rounded-full bg-white/90" />
            <span className="h-1.5 w-1.5 rounded-full bg-white/90" />
          </span>
        </div>

        <div className="flex flex-1 flex-col justify-between p-5">
          <div className="space-y-2">
            <div className="text-[10px] font-medium uppercase tracking-[0.2em] opacity-70">
              Auae · {number}
            </div>
            <div className="text-xl font-bold leading-tight">
              {feature.titleEn}
            </div>
            <div className="font-myanmar text-sm opacity-90" lang="my">
              {feature.titleMy}
            </div>
          </div>

          <div className="space-y-2">
            <div className="h-2 w-3/4 rounded-full bg-white/40" />
            <div className="h-2 w-1/2 rounded-full bg-white/30" />
            <div className="h-2 w-2/3 rounded-full bg-white/30" />
          </div>

          <div className="space-y-2">
            <div className="rounded-2xl bg-white/15 p-3 backdrop-blur">
              <div className="mb-2 h-2 w-1/3 rounded-full bg-white/60" />
              <div className="h-1.5 w-full rounded-full bg-white/30" />
            </div>
            <div className="rounded-2xl bg-white/15 p-3 backdrop-blur">
              <div className="mb-2 h-2 w-1/2 rounded-full bg-white/60" />
              <div className="h-1.5 w-3/4 rounded-full bg-white/30" />
            </div>
          </div>

          <div className="flex items-center justify-center pb-1">
            <div className="h-1 w-16 rounded-full bg-white/70" />
          </div>
        </div>
      </div>
    </div>
  );
}
