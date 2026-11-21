import Link from "next/link";
import ReactMarkdown from "react-markdown";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import type { Guide } from "@/lib/guides";
import { getVideoMeta } from "@/lib/video-transcripts";
import { YouTubeGuideCard } from "./youtube-guide-card";

function extractYouTubeId(url: string): string | null {
  try {
    const parsed = new URL(url);
    if (
      parsed.hostname === "www.youtube.com" ||
      parsed.hostname === "youtube.com" ||
      parsed.hostname === "m.youtube.com"
    ) {
      return parsed.searchParams.get("v");
    }
    if (parsed.hostname === "youtu.be") {
      return parsed.pathname.slice(1) || null;
    }
    return null;
  } catch {
    return null;
  }
}

type HastNode = {
  type?: string;
  tagName?: string;
  properties?: { href?: string };
  children?: HastNode[];
  value?: string;
};

function getPlainText(nodes?: HastNode[]): string {
  if (!nodes) return "";
  return nodes
    .map((n) => (n.type === "text" ? (n.value ?? "") : getPlainText(n.children)))
    .join("");
}

export function MarkdownGuide({ guide }: { guide: Guide }) {
  return (
    <div className="flex flex-1 flex-col justify-between">
      <main className="w-full max-w-[680px] space-y-5 text-[14px] leading-[1.75] text-zinc-800 dark:text-zinc-200 sm:space-y-6 sm:text-[15px] md:text-[16px] md:leading-[1.8]">
        <header className="space-y-3 border-b border-zinc-200 pb-5 dark:border-zinc-800 sm:pb-6">
          <h1 className="text-xl font-bold leading-snug tracking-tight text-zinc-950 dark:text-zinc-50 sm:text-2xl md:text-3xl md:leading-tight">
            {guide.title}
          </h1>
          {guide.sections.length > 0 && (
            <nav
              aria-label="Daftar bagian"
              className="flex gap-2 overflow-x-auto pb-1 text-xs text-zinc-500 dark:text-zinc-400 md:hidden"
            >
              {guide.sections.map((sec) => (
                <a
                  key={sec.id}
                  href={`#${sec.id}`}
                  className="shrink-0 rounded-md border border-zinc-200 bg-zinc-100/70 px-2.5 py-1 transition-colors hover:text-zinc-900 dark:border-zinc-800 dark:bg-zinc-900/60 dark:hover:text-zinc-100"
                >
                  {sec.label}
                </a>
              ))}
            </nav>
          )}
        </header>

        <article className="space-y-4 break-words sm:space-y-5">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeSlug]}
            components={{
              h2: ({ children, ...props }) => (
                <h2
                  {...props}
                  className="scroll-mt-20 pt-3 text-base font-bold text-zinc-950 dark:text-zinc-50 sm:pt-4 sm:text-lg md:text-xl"
                >
                  {children}
                </h2>
              ),
              p: ({ children, node }) => {
                const hast = node as unknown as HastNode | undefined;
                if (
                  hast?.children?.length === 1 &&
                  hast.children[0]?.tagName === "a" &&
                  typeof hast.children[0]?.properties?.href === "string"
                ) {
                  const href = hast.children[0].properties.href;
                  const videoId = extractYouTubeId(href);
                  if (videoId) {
                    const label =
                      getPlainText(hast.children[0].children) ||
                      "Video YouTube";
                    return (
                      <YouTubeGuideCard
                        videoId={videoId}
                        label={label}
                        href={href}
                        meta={getVideoMeta(videoId)}
                      />
                    );
                  }
                }

                return <p className="m-0">{children}</p>;
              },
              ul: ({ children }) => (
                <ul className="list-disc space-y-2 pl-5 text-zinc-700 dark:text-zinc-300">
                  {children}
                </ul>
              ),
              ol: ({ children }) => (
                <ol className="list-decimal space-y-2 pl-5 text-zinc-700 dark:text-zinc-300">
                  {children}
                </ol>
              ),
              blockquote: ({ children }) => (
                <blockquote className="space-y-2 break-words rounded-md border border-zinc-200 border-l-4 border-l-zinc-400 bg-white px-3.5 py-3 text-[13px] leading-relaxed shadow-xs dark:border-zinc-800 dark:border-l-zinc-600 dark:bg-zinc-900/70 sm:px-4 sm:py-3.5 sm:text-[15px]">
                  {children}
                </blockquote>
              ),
              code: ({ children }) => (
                <code className="break-words rounded bg-zinc-200/70 px-1.5 py-0.5 text-[0.88em] text-zinc-900 dark:bg-zinc-800 dark:text-zinc-100">
                  {children}
                </code>
              ),
              strong: ({ children }) => (
                <strong className="font-semibold text-zinc-950 dark:text-zinc-50">
                  {children}
                </strong>
              ),
              a: ({ href, children }) => {
                if (href?.startsWith("/")) {
                  return (
                    <Link
                      href={href}
                      className="text-sky-700 underline decoration-sky-700/40 underline-offset-4 transition-colors hover:text-sky-900 hover:decoration-sky-900 dark:text-sky-400 dark:decoration-sky-400/40 dark:hover:text-sky-300"
                    >
                      {children}
                    </Link>
                  );
                }

                return (
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sky-700 underline decoration-sky-700/40 underline-offset-4 transition-colors hover:text-sky-900 hover:decoration-sky-900 dark:text-sky-400 dark:decoration-sky-400/40 dark:hover:text-sky-300"
                  >
                    {children}
                  </a>
                );
              },
            }}
          >
            {guide.content}
          </ReactMarkdown>
        </article>
      </main>

      {guide.sources.length > 0 && (
        <footer className="mt-12 w-full max-w-[680px] border-t border-zinc-200 pt-5 text-xs leading-relaxed text-zinc-500 dark:border-zinc-800 dark:text-zinc-500 sm:mt-14">
          Diadaptasi dari{" "}
          {guide.sources.map((src, index) => (
            <span key={src.url}>
              {index > 0 && " · "}
              <a
                href={src.url}
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 hover:text-zinc-800 dark:hover:text-zinc-300"
              >
                {src.label}
              </a>
            </span>
          ))}
        </footer>
      )}
    </div>
  );
}
