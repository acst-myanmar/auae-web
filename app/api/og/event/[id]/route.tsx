import { ImageResponse } from "@vercel/og";
import { getEvent } from "@/lib/getEvent";

export const runtime = "edge";
export const revalidate = 3600;

function formatEventTime(iso: string | null) {
  if (!iso) return null;
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return null;

  try {
    return new Intl.DateTimeFormat("en-US", {
      dateStyle: "medium",
      timeStyle: "short",
      timeZone: "Asia/Yangon",
    }).format(date);
  } catch {
    return date.toISOString();
  }
}

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const event = await getEvent(id);

  if (!event) {
    return new Response("Not Found", { status: 404 });
  }

  const title = event.title ?? "Untitled event";
  const description = event.description ?? "";
  const location = event.location_name ?? "TBA";
  const time = formatEventTime(event.start_time) ?? "Time TBA";
  const joinCount = event.join_count ?? 0;

  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          flexDirection: "column",
          padding: 72,
          backgroundImage: "linear-gradient(135deg, #0F0F0F 0%, #1A1A1A 100%)",
          color: "#FFFFFF",
          fontFamily:
            'ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial',
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 28,
          }}
        >
          <div
            style={{
              fontSize: 28,
              letterSpacing: 0.4,
              color: "#FFD700",
              fontWeight: 700,
            }}
          >
            🇲🇲 MM Hangouts
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 18,
            flex: 1,
            justifyContent: "center",
          }}
        >
          <div
            style={{
              fontSize: 64,
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: -1,
              maxWidth: 1020,
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {title}
          </div>

          <div
            style={{
              fontSize: 28,
              lineHeight: 1.35,
              color: "#B3B3B3",
              maxWidth: 1040,
              overflow: "hidden",
              display: "block",
            }}
          >
            {description}
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 18,
              marginTop: 14,
              fontSize: 26,
              color: "#E7E7E7",
              flexWrap: "wrap",
            }}
          >
            <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
              <span style={{ color: "#B3B3B3" }}>📍</span>
              <span>{location}</span>
            </div>
            <div style={{ opacity: 0.5 }}>•</div>
            <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
              <span style={{ color: "#B3B3B3" }}>🗓️</span>
              <span>{time}</span>
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 26,
            paddingTop: 22,
            borderTop: "1px solid rgba(255,255,255,0.12)",
          }}
        >
          <div style={{ fontSize: 28, color: "#FFFFFF", fontWeight: 700 }}>
            {`🔥 ${joinCount} joined`}
          </div>
          <div style={{ fontSize: 22, color: "#B3B3B3" }}>
            auae.acstlabs.com
          </div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 },
  );
}

