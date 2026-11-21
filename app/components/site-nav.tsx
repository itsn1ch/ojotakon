"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

type NavItem = {
  href: string;
  label: string;
  sections?: { id: string; label: string }[];
};

const NAV_ITEMS: NavItem[] = [
  {
    href: "/",
    label: "Jangan tanya untuk bertanya",
  },
  {
    href: "/xy-problem",
    label: "Masalah XY",
    sections: [
      { id: "apa-itu", label: "Apa itu Masalah XY?" },
      { id: "cara-menghindari", label: "Cara menghindarinya" },
      { id: "contoh-1", label: "Contoh 1: validasi upload" },
      { id: "contoh-2", label: "Contoh 2: permission VPS" },
    ],
  },
  {
    href: "/no-hello",
    label: "No Hello",
    sections: [
      { id: "jangan-begini", label: "Jangan lakukan ini" },
      { id: "lebih-baik", label: "Coba cara ini" },
      { id: "kenapa-penting", label: "Kenapa lebih nyaman?" },
    ],
  },
  {
    href: "/how-to-ask",
    label: "Cara bertanya yang baik",
    sections: [
      { id: "cari-dulu", label: "Cari dan riset dulu" },
      { id: "judul-spesifik", label: "Judul spesifik" },
      { id: "jelaskan-masalah", label: "Jelaskan masalah" },
      { id: "contoh-minimal", label: "Contoh minimal" },
      { id: "baca-ulang", label: "Baca ulang" },
    ],
  },
  {
    href: "/smart-questions",
    label: "Bertanya dengan cara cerdas",
    sections: [
      { id: "pengantar", label: "Pengantar" },
      { id: "sebelum-bertanya", label: "Sebelum bertanya" },
      { id: "saat-bertanya", label: "Saat bertanya" },
      { id: "menanggapi", label: "Menanggapi jawaban" },
      { id: "hindari", label: "Yang perlu dihindari" },
    ],
  },
];

export function SiteNav() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const renderToc = (onNavigate?: () => void) => (
    <ul className="space-y-1.5 border-l border-zinc-200 dark:border-zinc-800">
      {NAV_ITEMS.map((item) => {
        const isActive =
          item.href === "/"
            ? pathname === "/"
            : pathname.startsWith(item.href);

        return (
          <li key={item.href}>
            <Link
              href={item.href}
              onClick={onNavigate}
              aria-current={isActive ? "page" : undefined}
              className={`-ml-px block border-l-2 py-1 pl-3.5 text-[13px] leading-snug transition-colors ${
                isActive
                  ? "border-zinc-900 font-semibold text-zinc-950 dark:border-zinc-100 dark:text-zinc-50"
                  : "border-transparent text-zinc-500 hover:border-zinc-400 hover:text-zinc-900 dark:text-zinc-400 dark:hover:border-zinc-600 dark:hover:text-zinc-100"
              }`}
            >
              {item.label}
            </Link>

            {isActive && item.sections && (
              <ul className="mt-1 space-y-0.5 pl-6">
                {item.sections.map((sec) => (
                  <li key={sec.id}>
                    <a
                      href={`#${sec.id}`}
                      onClick={onNavigate}
                      className="block py-0.5 text-xs text-zinc-500 transition-colors hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-100"
                    >
                      {sec.label}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        );
      })}
    </ul>
  );

  return (
    <>
      {/* Mobile compact TOC toggle */}
      <div className="mb-8 border-b border-zinc-200 pb-4 dark:border-zinc-800 md:hidden">
        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-toc"
          className="flex w-full items-center justify-between text-xs font-semibold text-zinc-700 dark:text-zinc-300"
        >
          <span>Daftar isi</span>
          <span className="font-normal text-zinc-500 dark:text-zinc-400">
            {mobileOpen ? "sembunyikan" : "tampilkan"}
          </span>
        </button>

        {mobileOpen && (
          <nav id="mobile-toc" aria-label="Daftar isi" className="mt-3">
            {renderToc(() => setMobileOpen(false))}
          </nav>
        )}
      </div>

      {/* Desktop floating left TOC */}
      <aside
        aria-label="Daftar isi"
        className="hidden md:sticky md:top-16 md:block md:w-56 md:shrink-0 md:self-start"
      >
        <p className="mb-3 text-xs font-semibold text-zinc-400 dark:text-zinc-500">
          Daftar isi
        </p>
        <nav>{renderToc()}</nav>
      </aside>
    </>
  );
}
