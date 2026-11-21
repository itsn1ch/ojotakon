import { Suspense } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllGuides, getGuideBySlug } from "@/lib/guides";
import { MarkdownGuide } from "../components/markdown-guide";

export function generateStaticParams() {
  return getAllGuides()
    .filter((guide) => guide.slug !== "")
    .map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);

  if (!guide) {
    return {};
  }

  return {
    title: guide.title,
    description: guide.description,
    openGraph: {
      siteName: "ojotakon",
      title: `${guide.title} · ojotakon`,
      description: guide.description,
      type: "article",
      locale: "id_ID",
    },
    twitter: {
      card: "summary_large_image",
      title: `${guide.title} · ojotakon`,
      description: guide.description,
    },
  };
}

function GuideSkeleton() {
  return (
    <div className="w-full max-w-[680px] animate-pulse space-y-6">
      <div className="border-b border-zinc-200 pb-6 dark:border-zinc-800">
        <div className="h-8 w-2/3 rounded bg-zinc-200 dark:bg-zinc-800" />
      </div>
      <div className="space-y-3">
        <div className="h-4 w-full rounded bg-zinc-200/80 dark:bg-zinc-800/80" />
        <div className="h-4 w-5/6 rounded bg-zinc-200/80 dark:bg-zinc-800/80" />
        <div className="h-4 w-4/6 rounded bg-zinc-200/80 dark:bg-zinc-800/80" />
      </div>
    </div>
  );
}

async function GuideContent({
  params,
}: Pick<PageProps<"/[slug]">, "params">) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);

  if (!guide) {
    notFound();
  }

  return <MarkdownGuide guide={guide} />;
}

export default function GuidePage({ params }: PageProps<"/[slug]">) {
  return (
    <Suspense fallback={<GuideSkeleton />}>
      <GuideContent params={params} />
    </Suspense>
  );
}
