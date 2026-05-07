import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Noto_Sans_Myanmar } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const notoMyanmar = Noto_Sans_Myanmar({
  variable: "--font-noto-myanmar",
  weight: ["400", "500", "600", "700"],
  subsets: ["myanmar"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Auae — Hangouts for Myanmar in Japan",
  description:
    "Auae is the hangouts app for Myanmar people living in Japan. Find events, group chats, jobs, housing, and friends across Tokyo, Osaka, and beyond.",
  openGraph: {
    title: "Auae — Hangouts for Myanmar in Japan",
    description:
      "Find events, group chats, jobs, housing, and friends across Japan. Built for the Myanmar community.",
    images: ["/logo.png"],
    type: "website",
  },
  icons: {
    icon: "/logo.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#5A67D8",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${notoMyanmar.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
