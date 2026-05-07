"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { StoreBadges } from "./StoreBadges";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.09, delayChildren: 0.05 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-10 pb-16 md:pt-16 md:pb-24"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-[-120px] h-[420px] -z-10 [background:radial-gradient(60%_60%_at_50%_30%,rgba(90,103,216,0.18),transparent_70%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-[-80px] top-24 -z-10 h-72 w-72 rounded-full bg-gold/30 blur-3xl"
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mx-auto flex max-w-6xl flex-col items-center px-5 text-center md:px-8"
      >
        <motion.div variants={item} className="mb-6">
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative inline-flex h-24 w-24 items-center justify-center rounded-3xl bg-white shadow-[0_25px_60px_-25px_rgba(90,103,216,0.65)] ring-1 ring-black/5 md:h-28 md:w-28"
          >
            <span className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-brand/20 to-gold/20 blur-xl" />
            <Image
              src="/logo.png"
              alt="Auae logo"
              width={96}
              height={96}
              className="h-16 w-16 object-contain md:h-20 md:w-20"
              priority
            />
          </motion.div>
        </motion.div>

        <motion.div
          variants={item}
          className="mb-3 inline-flex items-center gap-2 rounded-full border border-black/5 bg-white/80 px-3 py-1 text-xs font-medium text-neutral-700 shadow-sm backdrop-blur"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-gold" />
          Built for Myanmar in Japan
          <span className="text-base leading-none">🇯🇵</span>
        </motion.div>

        <motion.h1
          variants={item}
          className="text-balance text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl"
        >
          Hangouts for the
          <br />
          <span className="bg-gradient-to-r from-brand via-brand-ink to-brand bg-clip-text text-transparent">
            Myanmar community
          </span>{" "}
          in Japan.
        </motion.h1>

        <motion.p
          variants={item}
          lang="my"
          className="font-myanmar mt-4 max-w-2xl text-balance text-base text-neutral-600 md:text-lg"
        >
          ဂျပန်ရောက်နေတဲ့ မြန်မာအချင်းချင်း တွေ့ဆုံ၊ စကားပြော၊ အလုပ်ရှာ၊
          အိမ်ရှာ၊ မိတ်ဆွေဖွဲ့ဖို့ နေရာတစ်ခု။
        </motion.p>

        <motion.p
          variants={item}
          className="mt-2 max-w-2xl text-balance text-base text-neutral-500 md:text-lg"
        >
          Events, group chats, jobs, housing, and friends — all in one app made
          for us.
        </motion.p>

        <motion.div variants={item} className="mt-8">
          <StoreBadges />
        </motion.div>

        <motion.div
          variants={item}
          className="mt-4 flex items-center gap-2 text-xs text-neutral-500"
        >
          <span className="inline-flex -space-x-2">
            <span className="h-6 w-6 rounded-full border-2 border-white bg-gradient-to-br from-brand to-brand-ink" />
            <span className="h-6 w-6 rounded-full border-2 border-white bg-gradient-to-br from-gold to-[#FFB347]" />
            <span className="h-6 w-6 rounded-full border-2 border-white bg-gradient-to-br from-brand-ink to-brand" />
          </span>
          Joining a growing community across Tokyo, Osaka, Nagoya & more.
        </motion.div>
      </motion.div>
    </section>
  );
}
