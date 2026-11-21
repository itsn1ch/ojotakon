import { getGuideBySlug } from "@/lib/guides";
import { OG_SIZE, renderOgCard } from "@/lib/og-card";

export const alt =
  "ojotakon. — Jangan tanya untuk bertanya, langsung tanya saja";
export const size = OG_SIZE;
export const contentType = "image/png";

export default async function TwitterImage() {
  const guide = getGuideBySlug("");

  return renderOgCard({
    title: guide?.title ?? "Jangan tanya untuk bertanya, langsung tanya saja",
    description:
      guide?.description ??
      'Jangan cuma tanya "ada suhu Laravel di sini?" di grup chat. Langsung saja tulis pertanyaan dan detail masalahmu.',
    path: "ojotakon. /",
  });
}
