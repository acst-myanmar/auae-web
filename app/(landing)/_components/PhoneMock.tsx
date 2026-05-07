import Image from "next/image";
import type { ReactNode } from "react";

type PhoneMockProps = {
  /** Optional image src under /public. When omitted, render `children` instead. */
  src?: string | null;
  alt?: string;
  children?: ReactNode;
  className?: string;
};

/**
 * Pure CSS phone-frame mockup. Renders an inner screen that either shows an
 * optimized image or arbitrary children (used by Placeholder).
 */
export function PhoneMock({
  src,
  alt = "",
  children,
  className = "",
}: PhoneMockProps) {
  return (
    <div
      className={`relative mx-auto aspect-[9/19] w-full max-w-[260px] rounded-[2.5rem] bg-neutral-900 p-[6px] shadow-[0_25px_60px_-25px_rgba(90,103,216,0.5),0_8px_20px_-10px_rgba(15,16,36,0.25)] ring-1 ring-black/5 ${className}`}
    >
      <div className="absolute -inset-1 -z-10 rounded-[2.75rem] bg-gradient-to-br from-brand/25 via-transparent to-gold/25 blur-2xl opacity-70" />

      <div className="relative h-full w-full overflow-hidden rounded-[2.05rem] bg-neutral-100">
        <div className="pointer-events-none absolute left-1/2 top-1.5 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-neutral-900" />

        {src ? (
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(max-width: 768px) 70vw, 260px"
            className="object-cover"
          />
        ) : (
          children
        )}
      </div>
    </div>
  );
}
