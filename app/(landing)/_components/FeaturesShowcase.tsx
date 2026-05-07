"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { features } from "../_data/features";
import { PhoneMock } from "./PhoneMock";
import { Placeholder } from "./Placeholder";

const tile = {
  hidden: { opacity: 0, y: 28, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const grid = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

export function FeaturesShowcase() {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [activeDot, setActiveDot] = useState(0);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const onScroll = () => {
      const cardWidth = el.scrollWidth / features.length;
      const idx = Math.round(el.scrollLeft / cardWidth);
      setActiveDot(Math.min(features.length - 1, Math.max(0, idx)));
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      id="features"
      className="relative scroll-mt-20 py-16 md:py-24"
    >
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center md:mb-14"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand-soft px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-ink">
            Features
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
            Everything you need, in one app.
          </h2>
          <p
            lang="my"
            className="font-myanmar mt-3 text-base text-neutral-600 md:text-lg"
          >
            တစ်ခုတည်းသော App ထဲမှာ လိုအပ်တာအားလုံး။
          </p>
        </motion.div>

        {/* Mobile: snap carousel */}
        <div className="md:hidden">
          <div
            ref={trackRef}
            className="-mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-6 scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {features.map((f, i) => (
              <article
                key={f.id}
                className="flex w-[78%] shrink-0 snap-center flex-col items-center"
              >
                <div className="w-full">
                  <PhoneMock src={f.screenshot ?? null} alt={f.titleEn}>
                    <Placeholder feature={f} index={i} />
                  </PhoneMock>
                </div>
                <div className="mt-5 px-1 text-center">
                  <h3 className="text-lg font-semibold">{f.titleEn}</h3>
                  <p
                    lang="my"
                    className="font-myanmar mt-0.5 text-sm font-medium text-brand-ink"
                  >
                    {f.titleMy}
                  </p>
                  <p className="mt-2 text-sm text-neutral-600">{f.descEn}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-2 flex items-center justify-center gap-1.5">
            {features.map((f, i) => (
              <span
                key={f.id}
                aria-hidden
                className={`h-1.5 rounded-full transition-all ${
                  i === activeDot ? "w-5 bg-gold" : "w-1.5 bg-neutral-300"
                }`}
              />
            ))}
          </div>
          <p className="mt-2 text-center text-xs text-neutral-500">
            Swipe to see more →
          </p>
        </div>

        {/* md+: 4x2 grid */}
        <motion.div
          variants={grid}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-10%" }}
          className="hidden grid-cols-2 gap-x-6 gap-y-12 md:grid lg:grid-cols-4"
        >
          {features.map((f, i) => (
            <motion.article
              key={f.id}
              variants={tile}
              className="group flex flex-col items-center"
            >
              <div className="w-full transition-transform duration-500 group-hover:-translate-y-1">
                <PhoneMock src={f.screenshot ?? null} alt={f.titleEn}>
                  <Placeholder feature={f} index={i} />
                </PhoneMock>
              </div>
              <div className="mt-5 text-center">
                <h3 className="text-lg font-semibold">{f.titleEn}</h3>
                <p
                  lang="my"
                  className="font-myanmar mt-0.5 text-sm font-medium text-brand-ink"
                >
                  {f.titleMy}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                  {f.descEn}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
