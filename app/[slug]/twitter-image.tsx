import { getAllGuides, getGuideBySlug } from "@/lib/guides";
import { OG_SIZE, renderOgCard } from "@/lib/og-card";

export const alt = "ojotakon. — Cara takon, ojo takon langsung AI saja";
export const size = OG_SIZE;
export const contentType = "image/png";

export function generateStaticParams() {
  return getAllGuides()
    .filter((guide) => guide.slug !== "")
    .map((guide) => ({ slug: guide.slug }));
}

export default async function TwitterImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);

  return renderOgCard({
    title: guide?.title ?? "ojotakon.",
    description:
      guide?.description ?? "Panduan bertanya di grup chat dan forum.",
    path: `ojotakon. /${slug}`,
  });
}
