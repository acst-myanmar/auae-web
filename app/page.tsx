import { SiteHeader } from "./(landing)/_components/SiteHeader";
import { Hero } from "./(landing)/_components/Hero";
import { FeaturesShowcase } from "./(landing)/_components/FeaturesShowcase";
import { CommunityStrip } from "./(landing)/_components/CommunityStrip";
import { DownloadCTA } from "./(landing)/_components/DownloadCTA";
import { SiteFooter } from "./(landing)/_components/SiteFooter";

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <FeaturesShowcase />
        <CommunityStrip />
        <DownloadCTA />
      </main>
      <SiteFooter />
    </>
  );
}
