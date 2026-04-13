import type { Metadata } from "next";
import { getEvent } from "@/lib/getEvent";

export const revalidate = 3600;

type Props = {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

function getBaseUrl() {
  const base = process.env.NEXT_PUBLIC_BASE_URL;
  if (!base) return null;
  try {
    return new URL(base);
  } catch {
    return null;
  }
}

export async function generateMetadata({ params, searchParams }: Props): Promise<Metadata> {
  const { id } = await params;
  const sp = await searchParams;

  const event = await getEvent(id);
  if (!event) {
    return {
      title: "Event not found",
      description: "This event is unavailable.",
      robots: { index: false, follow: false },
    };
  }

  const baseUrl = getBaseUrl();
  const v = typeof sp.v === "string" ? sp.v : undefined;

  const ogPath = `/api/og/event/${encodeURIComponent(id)}${v ? `?v=${encodeURIComponent(v)}` : ""}`;
  const ogUrl = baseUrl ? new URL(ogPath, baseUrl).toString() : ogPath;

  const title = event.title ?? "MM Hangouts";
  const description = event.description ?? "Join the event on MM Hangouts.";

  const openGraphImage = baseUrl ? ogUrl : undefined;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: openGraphImage ? [{ url: openGraphImage, width: 1200, height: 630 }] : [],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: openGraphImage ? [openGraphImage] : [],
    },
  };
}

export default async function EventSharePage({ params }: Props) {
  // Fetch server-side as required (and to keep parity with metadata fetch).
  const { id } = await params;
  await getEvent(id);

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily:
          'ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial',
      }}
    >
      <div style={{ color: "#666", fontSize: 16 }}>Opening app...</div>
    </main>
  );
}

