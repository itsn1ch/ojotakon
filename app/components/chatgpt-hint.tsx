"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";
import { useTranscriptDrawer } from "./transcript-drawer";

const WORDPRESS_PROMPT =
  "Saya sedang belajar WordPress di hosting cPanel. Bantu saya menjelaskan masalah berikut langkah demi langkah dalam bahasa Indonesia: ";

const GENERAL_PROMPT =
  "Saya mengalami error di proyek web saya. Tolong bantu jelaskan penyebab dan cara memperbaikinya dalam bahasa Indonesia. Detail error dan kode saya: ";

function ChatGptLogo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.872zm16.597 3.855-5.833-3.387L15.119 7.2a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.407-.667zm2.01-3.023-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08L8.704 5.46a.795.795 0 0 0-.393.681zm1.097-2.365 2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z" />
    </svg>
  );
}

export function ChatGptHint() {
  const pathname = usePathname();
  const { activeVideoId } = useTranscriptDrawer();
  const [open, setOpen] = useState(true);

  const isWordPress = pathname.startsWith("/roadmap-wordpress");
  const prompt = isWordPress ? WORDPRESS_PROMPT : GENERAL_PROMPT;
  const chatGptUrl = `https://chatgpt.com/?q=${encodeURIComponent(prompt)}`;
  const sidecarOpen = Boolean(activeVideoId);

  if (!open) {
    return (
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={`fixed bottom-4 z-30 inline-flex items-center gap-2.5 rounded-full border border-zinc-300 bg-white/95 px-4 py-2.5 text-xs font-semibold text-zinc-900 shadow-md backdrop-blur-md transition-all hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-900/95 dark:text-zinc-100 dark:hover:bg-zinc-800 sm:bottom-6 ${
          sidecarOpen
            ? "hidden lg:inline-flex lg:right-[404px] xl:right-[444px]"
            : "right-4 sm:right-6"
        }`}
      >
        <ChatGptLogo className="h-6 w-6 shrink-0" />
        <span>Tanya ChatGPT</span>
      </button>
    );
  }

  return (
    <aside
      aria-label="Saran tanya ChatGPT"
      className={`fixed bottom-4 left-4 z-30 rounded-xl border border-zinc-200 bg-white/95 p-4 text-xs leading-relaxed shadow-xl backdrop-blur-md transition-all dark:border-zinc-800 dark:bg-zinc-900/95 sm:left-auto sm:bottom-6 sm:w-[340px] sm:p-5 ${
        sidecarOpen
          ? "hidden lg:block lg:right-[404px] xl:right-[444px]"
          : "right-4 sm:right-6"
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3.5">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-zinc-900 text-zinc-50 dark:bg-zinc-100 dark:text-zinc-950">
            <ChatGptLogo className="h-8 w-8" />
          </div>
          <div>
            <p className="m-0 text-sm font-bold text-zinc-950 dark:text-zinc-50">
              Mentok? Tanya ChatGPT dulu
            </p>
            <p className="m-0 text-[11px] text-zinc-500 dark:text-zinc-400">
              chatgpt.com
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={() => setOpen(false)}
          aria-label="Tutup popup"
          className="-mr-1 -mt-1 rounded px-1.5 py-0.5 text-base leading-none text-zinc-400 transition-colors hover:bg-zinc-100 hover:text-zinc-700 dark:hover:bg-zinc-800 dark:hover:text-zinc-200"
        >
          &times;
        </button>
      </div>

      <p className="mt-3 mb-4 text-zinc-600 dark:text-zinc-400">
        {isWordPress
          ? "Kalau bingung soal cPanel, error plugin, atau kode WordPress, coba tanyakan dulu ke ChatGPT beserta pesan error lengkapnya."
          : "Sebelum bertanya di grup, coba tempel pesan error dan potongan kodemu ke ChatGPT dulu. Sering kali jawabannya langsung ketemu."}
      </p>

      <div className="flex items-center justify-between gap-2">
        <a
          href={chatGptUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-md bg-zinc-900 px-3.5 py-2 text-xs font-semibold text-zinc-50 transition-colors hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-950 dark:hover:bg-zinc-300"
        >
          <ChatGptLogo className="h-4 w-4" />
          <span>Buka ChatGPT &nearr;</span>
        </a>
        <button
          type="button"
          onClick={() => setOpen(false)}
          className="text-zinc-500 transition-colors hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-200"
        >
          Nanti saja
        </button>
      </div>
    </aside>
  );
}
