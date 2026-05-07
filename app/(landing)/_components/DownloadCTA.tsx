"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { StoreBadges } from "./StoreBadges";

export function DownloadCTA() {
  return (
    <section
      id="download"
      className="scroll-mt-20 px-5 py-16 md:px-8 md:py-24"
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative mx-auto max-w-5xl overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#5A67D8] via-[#4C51BF] to-[#3F45A1] p-8 text-white shadow-[0_40px_80px_-40px_rgba(76,81,191,0.65)] md:p-14"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-gold/30 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-white/10 blur-3xl"
        />
        <Image
          src="/logo.png"
          alt=""
          width={320}
          height={320}
          aria-hidden
          className="pointer-events-none absolute -right-10 -top-10 h-64 w-64 rotate-12 opacity-15"
        />

        <div className="relative grid gap-10 md:grid-cols-[1.4fr_1fr] md:items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-gold backdrop-blur">
              Download
            </span>
            <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight md:text-5xl">
              Join the Auae <span className="text-gold">community.</span>
            </h2>
            <p
              lang="my"
              className="font-myanmar mt-3 text-base text-white/85 md:text-lg"
            >
              ဂျပန်ရောက် မြန်မာတွေရဲ့ နေရာသို့ ကြိုဆိုပါတယ်။ App ကို
              အခမဲ့ ဒေါင်းလုပ် ရယူနိုင်ပါတယ်။
            </p>
            <p className="mt-2 text-base text-white/75 md:text-lg">
              Free to download. Made by and for Myanmar in Japan.
            </p>
            <div className="mt-7">
              <StoreBadges />
            </div>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <div className="rounded-3xl bg-white p-3 shadow-lg ring-1 ring-black/5">
              <QrPlaceholder />
            </div>
            <p className="mt-3 text-sm text-white/80">
              Scan to install on your phone
            </p>
            <p
              lang="my"
              className="font-myanmar mt-0.5 text-xs text-white/60"
            >
              ဖုန်းပေါ်တင် Install လုပ်ရန် Scan ပါ
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function QrPlaceholder() {
  // Stylized QR-like grid (purely decorative). Real QR can replace this later.
  const cells = Array.from({ length: 49 });
  const filled = new Set([
    0, 1, 2, 3, 4, 5, 6, 8, 12, 14, 16, 18, 20, 21, 22, 23, 24, 25, 26, 28, 30,
    32, 34, 36, 38, 40, 42, 43, 44, 45, 46, 47, 48,
  ]);
  return (
    <div className="grid h-32 w-32 grid-cols-7 grid-rows-7 gap-[2px] rounded-2xl bg-white p-2">
      {cells.map((_, i) => (
        <span
          key={i}
          className={`rounded-[3px] ${
            filled.has(i) ? "bg-neutral-900" : "bg-transparent"
          }`}
        />
      ))}
    </div>
  );
}
