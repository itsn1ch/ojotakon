"use client";

import { useCallback, useState } from "react";
import type { VideoMeta } from "@/lib/video-transcripts";
import { useTranscriptDrawer } from "./transcript-drawer";

function ChatGptIcon({ className }: { className?: string }) {
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

type Props = {
  videoId: string;
  label: string;
  href: string;
  meta: VideoMeta | null;
};

export function YouTubeGuideCard({ videoId, label, href, meta }: Props) {
  const { openDrawer, activeVideoId } = useTranscriptDrawer();
  const [activeSec, setActiveSec] = useState<number>(0);
  const [hasJumped, setHasJumped] = useState(false);
  const [activeSnippet, setActiveSnippet] = useState<string>("");

  const handleJump = useCallback((seconds: number, snippet: string) => {
    setActiveSec(seconds);
    setHasJumped(true);
    setActiveSnippet(snippet);
  }, []);

  const embedSrc = hasJumped
    ? `https://www.youtube.com/embed/${videoId}?start=${activeSec}&autoplay=1`
    : `https://www.youtube.com/embed/${videoId}`;

  const chatGptPrompt = activeSnippet
    ? `Saya sedang menonton tutorial "${meta?.title ?? label}" (${href}&t=${activeSec}s) di bagian "${activeSnippet}". Tolong jelaskan langkah ini lebih detail dalam bahasa Indonesia.`
    : `Saya sedang menonton tutorial "${meta?.title ?? label}" (${href}). Tolong rangkum langkah-langkah utamanya dalam bahasa Indonesia.`;

  const chatGptUrl = `https://chatgpt.com/?q=${encodeURIComponent(chatGptPrompt)}`;
  const isDrawerOpen = activeVideoId === videoId;

  return (
    <figure className="my-5 overflow-hidden rounded-lg border border-zinc-200 bg-white shadow-xs dark:border-zinc-800 dark:bg-zinc-900/70">
      <div className="relative aspect-video w-full overflow-hidden bg-zinc-950">
        <iframe
          key={`${videoId}-${activeSec}-${hasJumped}`}
          src={embedSrc}
          title={label}
          width="560"
          height="315"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="absolute inset-0 h-full w-full border-0"
        />
      </div>

      <figcaption className="flex flex-col gap-3 border-t border-zinc-200/80 px-3.5 py-3 text-xs text-zinc-600 dark:border-zinc-800 dark:text-zinc-400 sm:flex-row sm:items-center sm:justify-between">
        <div className="min-w-0 flex-1">
          <p className="m-0 truncate font-semibold text-zinc-900 dark:text-zinc-100">
            {meta?.title ?? label}
          </p>
          <p className="m-0 mt-0.5 text-[11px] text-zinc-500 dark:text-zinc-400">
            {meta?.author ? `${meta.author} · ${meta.duration}` : label}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={() =>
              openDrawer({
                videoId,
                label,
                href,
                meta,
                onJump: handleJump,
              })
            }
            className={`rounded-md border px-2.5 py-1.5 text-[11px] font-semibold transition-colors ${
              isDrawerOpen
                ? "border-zinc-900 bg-zinc-900 text-zinc-50 dark:border-zinc-100 dark:bg-zinc-100 dark:text-zinc-950"
                : "border-zinc-300 bg-zinc-100/80 text-zinc-800 hover:bg-zinc-200/80 dark:border-zinc-700 dark:bg-zinc-800/80 dark:text-zinc-100 dark:hover:bg-zinc-700"
            }`}
          >
            Langkah &amp; Transkrip
          </button>

          <a
            href={chatGptUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-md bg-zinc-900 px-2.5 py-1.5 text-[11px] font-semibold text-zinc-50 transition-colors hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-950 dark:hover:bg-zinc-300"
          >
            <ChatGptIcon className="h-3.5 w-3.5" />
            <span>Tanya ChatGPT &nearr;</span>
          </a>

          <a
            href={hasJumped ? `${href}&t=${activeSec}s` : href}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border border-zinc-200 px-2 py-1.5 text-[11px] text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-zinc-900 dark:border-zinc-700 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-100"
          >
            YouTube &nearr;
          </a>
        </div>
      </figcaption>
    </figure>
  );
}
