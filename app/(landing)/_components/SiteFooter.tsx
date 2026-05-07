import Image from "next/image";

export function SiteFooter() {
  return (
    <footer className="border-t border-black/5 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 md:flex-row md:items-center md:justify-between md:px-8">
        <div className="flex items-center gap-3">
          <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-xl bg-brand-soft">
            <Image
              src="/logo.png"
              alt="Auae"
              width={28}
              height={28}
              className="h-7 w-7 object-contain"
            />
          </span>
          <div>
            <div className="text-sm font-semibold">Auae</div>
            <div
              lang="my"
              className="font-myanmar text-xs text-neutral-500"
            >
              ဂျပန်ရောက် မြန်မာတွေအတွက်
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-neutral-600">
          <a href="#features" className="hover:text-brand-ink">
            Features
          </a>
          <a href="#community" className="hover:text-brand-ink">
            Community
          </a>
          <a href="#download" className="hover:text-brand-ink">
            Download
          </a>
          <a href="mailto:hello@auae.app" className="hover:text-brand-ink">
            hello@auae.app
          </a>
        </div>

        <div className="flex items-center gap-2 text-xs text-neutral-500">
          <span>© {new Date().getFullYear()} Auae</span>
          <span aria-hidden>·</span>
          <span className="inline-flex items-center gap-1 rounded-full border border-black/10 px-2 py-0.5">
            EN / <span lang="my" className="font-myanmar">မြန်မာ</span>
          </span>
        </div>
      </div>
    </footer>
  );
}
