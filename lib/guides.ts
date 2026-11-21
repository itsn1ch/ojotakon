import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export type GuideSource = {
  label: string;
  url: string;
};

export type GuideSection = {
  id: string;
  label: string;
};

export type Guide = {
  slug: string;
  href: string;
  title: string;
  navTitle: string;
  description: string;
  group: string;
  order: number;
  sources: GuideSource[];
  sections: GuideSection[];
  content: string;
};

export type NavItem = {
  href: string;
  label: string;
  group: string;
  sections: GuideSection[];
};

const CONTENT_DIR = path.join(process.cwd(), "content");

function slugifyHeading(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-");
}

function extractSections(markdown: string): GuideSection[] {
  const sections: GuideSection[] = [];
  const regex = /^##\s+(.+)$/gm;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(markdown)) !== null) {
    const label = match[1].trim();
    sections.push({
      id: slugifyHeading(label),
      label,
    });
  }

  return sections;
}

export function getAllGuides(): Guide[] {
  const files = fs
    .readdirSync(CONTENT_DIR)
    .filter((file) => file.endsWith(".md"));

  const guides = files.map((file) => {
    const raw = fs.readFileSync(path.join(CONTENT_DIR, file), "utf8");
    const { data, content } = matter(raw);
    const slug = typeof data.slug === "string" ? data.slug : "";

    return {
      slug,
      href: slug ? `/${slug}` : "/",
      title: String(data.title ?? ""),
      navTitle: String(data.navTitle ?? data.title ?? ""),
      description: String(data.description ?? ""),
      group: typeof data.group === "string" ? data.group : "Cara takon",
      order: Number(data.order ?? 99),
      sources: Array.isArray(data.sources) ? (data.sources as GuideSource[]) : [],
      sections: extractSections(content),
      content: content.trim(),
    };
  });

  return guides.sort((a, b) => a.order - b.order);
}

export function getGuideBySlug(slug: string): Guide | undefined {
  return getAllGuides().find((guide) => guide.slug === slug);
}

export function getNavItems(): NavItem[] {
  return getAllGuides().map((guide) => ({
    href: guide.href,
    label: guide.navTitle,
    group: guide.group,
    sections: guide.sections,
  }));
}
