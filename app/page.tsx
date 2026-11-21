import { notFound } from "next/navigation";
import { getGuideBySlug } from "@/lib/guides";
import { MarkdownGuide } from "./components/markdown-guide";

export default function HomePage() {
  const guide = getGuideBySlug("");

  if (!guide) {
    notFound();
  }

  return <MarkdownGuide guide={guide} />;
}
