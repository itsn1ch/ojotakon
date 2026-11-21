"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import type { VideoMeta } from "@/lib/video-transcripts";

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

export type DrawerPayload = {
  videoId: string;
  label: string;
  href: string;
  meta: VideoMeta | null;
  initialTab?: "steps" | "transcript";
  onJump: (seconds: number, snippet: string) => void;
};

type DrawerContextValue = {
  openDrawer: (payload: DrawerPayload) => void;
  closeDrawer: () => void;
  activeVideoId: string | null;
};

const TranscriptDrawerContext = createContext<DrawerContextValue | null>(null);

export function useTranscriptDrawer() {
  const ctx = useContext(TranscriptDrawerContext);
  if (!ctx) {
    throw new Error(
      "useTranscriptDrawer must be used inside TranscriptDrawerProvider"
    );
  }
  return ctx;
}

export function TranscriptDrawerProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [payload, setPayload] = useState<DrawerPayload | null>(null);
  const [tab, setTab] = useState<"steps" | "transcript">("steps");
  const [selectedSec, setSelectedSec] = useState<number | null>(null);
  const [selectedSnippet, setSelectedSnippet] = useState("");
  const [query, setQuery] = useState("");

  const openDrawer = useCallback((next: DrawerPayload) => {
    setPayload((prev) => {
      if (prev?.videoId === next.videoId) {
        return null;
      }
      return next;
    });
    const hasSteps = Boolean(next.meta && next.meta.steps.length > 0);
    setTab(next.initialTab ?? (hasSteps ? "steps" : "transcript"));
    setSelectedSec(null);
    setSelectedSnippet("");
    setQuery("");
  }, []);

  const closeDrawer = useCallback(() => {
    setPayload(null);
  }, []);

  useEffect(() => {
    if (!payload) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeDrawer();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [payload, closeDrawer]);

  const filteredTranscript = useMemo(() => {
    if (!payload?.meta?.transcript) return [];
    const q = query.trim().toLowerCase();
    if (!q) return payload.meta.transcript;
    return payload.meta.transcript.filter(
      (line) =>
        line.text.toLowerCase().includes(q) || line.timestamp.includes(q)
    );
  }, [payload, query]);

  const handleJump = (seconds: number, snippet: string) => {
    setSelectedSec(seconds);
    setSelectedSnippet(snippet);
    payload?.onJump(seconds, snippet);
  };

  const chatGptPrompt = payload
    ? selectedSnippet
      ? `Saya sedang menonton tutorial "${payload.meta?.title ?? payload.label}" (${payload.href}&t=${selectedSec ?? 0}s) di bagian "${selectedSnippet}". Tolong jelaskan langkah ini lebih detail dalam bahasa Indonesia dan apa yang harus diperhatikan kalau saya praktik di hosting cPanel.`
      : `Saya sedang menonton tutorial "${payload.meta?.title ?? payload.label}" (${payload.href}). Tolong rangkum langkah-langkah utamanya dalam bahasa Indonesia dan bantu saya kalau ada bagian yang membingungkan.`
    : "";

  const chatGptUrl = `https://chatgpt.com/?q=${encodeURIComponent(chatGptPrompt)}`;
  const hasSteps = Boolean(payload?.meta && payload.meta.steps.length > 0);
  const hasTranscript = Boolean(
    payload?.meta && payload.meta.transcript.length > 0
  );

  const renderPanelContent = () => {
    if (!payload) return null;

    return (
      <>
        {/* Header */}
        <div className="flex items-start justify-between gap-3 border-b border-zinc-200 px-4 py-3.5 dark:border-zinc-800">
          <div className="min-w-0">
            <p className="m-0 text-xs font-bold leading-snug text-zinc-950 dark:text-zinc-50 sm:text-sm">
              {payload.meta?.title ?? payload.label}
            </p>
            {payload.meta?.author && (
              <p className="m-0 mt-1 text-[11px] text-zinc-500 dark:text-zinc-400">
                {payload.meta.author} &middot; {payload.meta.duration}
              </p>
            )}
          </div>
          <button
            type="button"
            onClick={closeDrawer}
            aria-label="Tutup sidecar"
            className="shrink-0 rounded-md border border-zinc-200 px-2 py-1 text-xs text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-zinc-950 dark:border-zinc-700 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-100"
          >
            Tutup
          </button>
        </div>

        {/* Tabs */}
        <div className="flex items-center justify-between border-b border-zinc-200 px-4 py-2.5 dark:border-zinc-800">
          <div className="flex gap-1.5">
            <button
              type="button"
              onClick={() => setTab("steps")}
              className={`rounded-md px-3 py-1.5 text-xs font-semibold transition-colors ${
                tab === "steps"
                  ? "bg-zinc-900 text-zinc-50 dark:bg-zinc-100 dark:text-zinc-950"
                  : "text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
              }`}
            >
              Langkah ({payload.meta?.steps.length ?? 0})
            </button>
            <button
              type="button"
              onClick={() => setTab("transcript")}
              className={`rounded-md px-3 py-1.5 text-xs font-semibold transition-colors ${
                tab === "transcript"
                  ? "bg-zinc-900 text-zinc-50 dark:bg-zinc-100 dark:text-zinc-950"
                  : "text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
              }`}
            >
              Transkrip ({payload.meta?.transcript.length ?? 0})
            </button>
          </div>
          <span className="text-[11px] text-zinc-400 dark:text-zinc-500">
            klik waktu
          </span>
        </div>

        {/* Search in transcript */}
        {tab === "transcript" && hasTranscript && (
          <div className="border-b border-zinc-200 px-4 py-2.5 dark:border-zinc-800">
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Cari kata di transkrip..."
              className="w-full rounded-md border border-zinc-200 bg-white px-3 py-1.5 text-xs text-zinc-800 outline-none placeholder:text-zinc-400 focus:border-zinc-400 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-zinc-500"
            />
          </div>
        )}

        {/* Scrollable list */}
        <div className="flex-1 overflow-y-auto p-3">
          {tab === "steps" ? (
            hasSteps ? (
              <ul className="m-0 list-none space-y-1.5 p-0">
                {payload.meta!.steps.map((step, idx) => {
                  const isCurrent = selectedSec === step.seconds;
                  return (
                    <li key={`${step.seconds}-${idx}`}>
                      <button
                        type="button"
                        onClick={() => handleJump(step.seconds, step.label)}
                        className={`flex w-full items-start gap-2.5 rounded-md px-3 py-2 text-left text-xs leading-relaxed transition-colors ${
                          isCurrent
                            ? "bg-zinc-900 text-zinc-50 dark:bg-zinc-100 dark:text-zinc-950"
                            : "text-zinc-700 hover:bg-zinc-200/70 dark:text-zinc-300 dark:hover:bg-zinc-800/70"
                        }`}
                      >
                        <span
                          className={`mt-0.5 shrink-0 rounded px-1.5 py-0.5 text-[10px] font-semibold ${
                            isCurrent
                              ? "bg-zinc-700 text-zinc-100 dark:bg-zinc-300 dark:text-zinc-950"
                              : "bg-zinc-200/80 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
                          }`}
                        >
                          {step.timestamp}
                        </span>
                        <span className="break-words">{step.label}</span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            ) : (
              <p className="p-3 text-xs text-zinc-500 dark:text-zinc-400">
                Belum ada daftar langkah untuk video ini.
              </p>
            )
          ) : hasTranscript ? (
            filteredTranscript.length > 0 ? (
              <ul className="m-0 list-none space-y-1.5 p-0">
                {filteredTranscript.map((line, idx) => {
                  const isCurrent = selectedSec === line.seconds;
                  return (
                    <li key={`${line.seconds}-${idx}`}>
                      <button
                        type="button"
                        onClick={() => handleJump(line.seconds, line.text)}
                        className={`flex w-full items-start gap-2.5 rounded-md px-3 py-2 text-left text-xs leading-relaxed transition-colors ${
                          isCurrent
                            ? "bg-zinc-900 text-zinc-50 dark:bg-zinc-100 dark:text-zinc-950"
                            : "text-zinc-700 hover:bg-zinc-200/70 dark:text-zinc-300 dark:hover:bg-zinc-800/70"
                        }`}
                      >
                        <span
                          className={`mt-0.5 shrink-0 rounded px-1.5 py-0.5 text-[10px] font-semibold ${
                            isCurrent
                              ? "bg-zinc-700 text-zinc-100 dark:bg-zinc-300 dark:text-zinc-950"
                              : "bg-zinc-200/80 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
                          }`}
                        >
                          {line.timestamp}
                        </span>
                        <span className="break-words">{line.text}</span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            ) : (
              <p className="p-3 text-xs text-zinc-500 dark:text-zinc-400">
                Tidak ada baris transkrip yang cocok dengan &quot;{query}&quot;.
              </p>
            )
          ) : (
            <p className="p-3 text-xs text-zinc-500 dark:text-zinc-400">
              Pembuat video menonaktifkan subtitle di YouTube untuk video ini.
              Pakai tombol Tanya ChatGPT di bawah kalau ada bagian yang ingin
              ditanyakan.
            </p>
          )}
        </div>

        {/* Footer with Ask ChatGPT */}
        <div className="flex items-center justify-between gap-2 border-t border-zinc-200 px-4 py-3 dark:border-zinc-800">
          <a
            href={chatGptUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-zinc-900 px-3.5 py-2 text-xs font-semibold text-zinc-50 transition-colors hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-950 dark:hover:bg-zinc-300"
          >
            <ChatGptIcon className="h-4 w-4" />
            <span>Tanya ChatGPT &nearr;</span>
          </a>
          <a
            href={
              selectedSec !== null
                ? `${payload.href}&t=${selectedSec}s`
                : payload.href
            }
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-zinc-500 underline underline-offset-4 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
          >
            Buka YouTube &nearr;
          </a>
        </div>
      </>
    );
  };

  return (
    <TranscriptDrawerContext.Provider
      value={{
        openDrawer,
        closeDrawer,
        activeVideoId: payload?.videoId ?? null,
      }}
    >
      <div className="flex min-h-full w-full flex-1">
        <div className="flex min-w-0 flex-1 flex-col">{children}</div>

        {/* Desktop docked sidecar (does not cover page or video) */}
        {payload && (
          <aside
            aria-label="Sidecar langkah dan transkrip video"
            className="hidden lg:sticky lg:top-0 lg:flex lg:h-screen lg:w-[380px] lg:shrink-0 lg:flex-col lg:border-l lg:border-zinc-200 lg:bg-zinc-50/70 lg:dark:border-zinc-800 lg:dark:bg-zinc-950/70 xl:w-[420px]"
          >
            {renderPanelContent()}
          </aside>
        )}
      </div>

      {/* Mobile / tablet bottom sheet (leaves video visible above) */}
      {payload && (
        <aside
          aria-label="Panel langkah dan transkrip video"
          className="fixed inset-x-0 bottom-0 z-40 flex max-h-[60vh] flex-col rounded-t-xl border-t border-zinc-200 bg-background shadow-2xl dark:border-zinc-800 lg:hidden"
        >
          {renderPanelContent()}
        </aside>
      )}
    </TranscriptDrawerContext.Provider>
  );
}
