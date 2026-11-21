import type { Metadata, Viewport } from "next";
import { JetBrains_Mono } from "next/font/google";
import { getNavItems } from "@/lib/guides";
import { ChatGptHint } from "./components/chatgpt-hint";
import { SiteNav } from "./components/site-nav";
import { TranscriptDrawerProvider } from "./components/transcript-drawer";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
    { media: "(prefers-color-scheme: dark)", color: "#111113" },
  ],
};

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "https://ojotakon.vercel.app");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "ojotakon. — Jangan tanya untuk bertanya, langsung tanya saja",
    template: "%s · ojotakon.",
  },
  description:
    'Jangan cuma tanya "ada suhu Laravel di sini?" di grup chat. Langsung saja tulis pertanyaan dan detail masalahmu.',
  openGraph: {
    siteName: "ojotakon.",
    title: "ojotakon. — Jangan tanya untuk bertanya, langsung tanya saja",
    description:
      'Jangan cuma tanya "ada suhu Laravel di sini?" di grup chat. Langsung saja tulis pertanyaan dan detail masalahmu.',
    type: "website",
    locale: "id_ID",
  },
  twitter: {
    card: "summary_large_image",
    title: "ojotakon. — Jangan tanya untuk bertanya, langsung tanya saja",
    description:
      'Jangan cuma tanya "ada suhu Laravel di sini?" di grup chat. Langsung saja tulis pertanyaan dan detail masalahmu.',
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const navItems = getNavItems();

  return (
    <html lang="id" className={`${jetbrainsMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col overflow-x-clip font-mono bg-background text-foreground selection:bg-zinc-900 selection:text-zinc-50 dark:selection:bg-zinc-100 dark:selection:text-zinc-900">
        <TranscriptDrawerProvider>
          <div className="mx-auto flex w-full max-w-[960px] flex-1 flex-col px-4 pb-12 pt-0 sm:px-6 md:flex-row md:items-start md:gap-10 md:px-8 md:py-16 lg:gap-12">
            <SiteNav items={navItems} />
            <div className="flex min-w-0 flex-1 flex-col pt-6 md:pt-0">
              {children}
            </div>
          </div>
          <ChatGptHint />
        </TranscriptDrawerProvider>
      </body>
    </html>
  );
}
