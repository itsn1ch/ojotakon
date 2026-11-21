import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import { SiteNav } from "./components/site-nav";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jangan tanya untuk bertanya, langsung tanya saja",
  description:
    'Jangan cuma tanya "ada suhu Laravel di sini?" di grup chat. Langsung saja tulis pertanyaan dan detail masalahmu.',
  openGraph: {
    title: "Jangan tanya untuk bertanya, langsung tanya saja",
    description:
      'Jangan cuma tanya "ada suhu Laravel di sini?" di grup chat. Langsung saja tulis pertanyaan dan detail masalahmu.',
    type: "website",
    locale: "id_ID",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="id" className={`${jetbrainsMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-mono bg-background text-foreground selection:bg-zinc-900 selection:text-zinc-50 dark:selection:bg-zinc-100 dark:selection:text-zinc-900">
        <div className="mx-auto flex w-full max-w-[960px] flex-1 flex-col px-5 py-10 sm:px-8 md:flex-row md:items-start md:gap-12 md:py-16">
          <SiteNav />
          <div className="flex min-w-0 flex-1 flex-col">{children}</div>
        </div>
      </body>
    </html>
  );
}
