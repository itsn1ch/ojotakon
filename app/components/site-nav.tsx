"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import type { NavItem } from "@/lib/guides";

export function SiteNav({ items }: { items: NavItem[] }) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const activeItem =
    items.find((item) =>
      item.href === "/" ? pathname === "/" : pathname.startsWith(item.href)
    ) ?? items[0];

  const groups: { name: string; items: NavItem[] }[] = [];
  for (const item of items) {
    const existing = groups.find((g) => g.name === item.group);
    if (existing) {
      existing.items.push(item);
    } else {
      groups.push({ name: item.group, items: [item] });
    }
  }

  const renderGroups = (isMobile: boolean, onNavigate?: () => void) => (
    <div className="space-y-6">
      {groups.map((group, idx) => (
        <div key={group.name}>
          <p className="mb-1 text-xs font-semibold text-zinc-900 dark:text-zinc-100">
            {group.name}
          </p>
          {idx === 0 && (
            <p className="mb-3 text-[11px] text-zinc-500 dark:text-zinc-400">
              ojo takon, langsung AI saja
            </p>
          )}
          <ul
            className={`space-y-1 border-l border-zinc-200 dark:border-zinc-800 ${
              idx > 0 ? "mt-2.5" : ""
            }`}
          >
            {group.items.map((item) => {
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
                    className={`-ml-px block border-l-2 pl-3.5 leading-snug transition-colors ${
                      isMobile ? "py-2 text-sm" : "py-1 text-[13px]"
                    } ${
                      isActive
                        ? "border-zinc-900 font-semibold text-zinc-950 dark:border-zinc-100 dark:text-zinc-50"
                        : "border-transparent text-zinc-500 hover:border-zinc-400 hover:text-zinc-900 dark:text-zinc-400 dark:hover:border-zinc-600 dark:hover:text-zinc-100"
                    }`}
                  >
                    {item.label}
                  </Link>

                  {isActive && item.sections.length > 0 && (
                    <ul className="mt-0.5 space-y-0.5 pl-6">
                      {item.sections.map((sec) => (
                        <li key={sec.id}>
                          <a
                            href={`#${sec.id}`}
                            onClick={onNavigate}
                            className={`block text-zinc-500 transition-colors hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-100 ${
                              isMobile ? "py-1.5 text-[13px]" : "py-0.5 text-xs"
                            }`}
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
        </div>
      ))}
    </div>
  );

  return (
    <>
      {/* Mobile sticky TOC bar */}
      <div className="sticky top-0 z-20 -mx-4 border-b border-zinc-200/80 bg-background/90 px-4 backdrop-blur-md dark:border-zinc-800/80 sm:-mx-6 sm:px-6 md:hidden">
        <div className="flex min-h-[52px] items-center justify-between gap-3">
          <Link
            href="/"
            onClick={() => setMobileOpen(false)}
            className="truncate text-xs font-bold tracking-tight text-zinc-950 dark:text-zinc-50"
          >
            ojotakon
            {activeItem && activeItem.href !== "/" && (
              <span className="font-normal text-zinc-400 dark:text-zinc-500">
                {" "}
                / {activeItem.label}
              </span>
            )}
          </Link>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-toc"
            className="shrink-0 rounded-md border border-zinc-300 px-3 py-1.5 text-xs font-medium text-zinc-700 transition-colors active:bg-zinc-200 dark:border-zinc-700 dark:text-zinc-300 dark:active:bg-zinc-800"
          >
            {mobileOpen ? "Tutup" : "Cara takon"}
          </button>
        </div>

        {mobileOpen && (
          <nav
            id="mobile-toc"
            aria-label="Cara takon"
            className="max-h-[75vh] overflow-y-auto border-t border-zinc-200/70 py-4 dark:border-zinc-800/70"
          >
            {renderGroups(true, () => setMobileOpen(false))}
          </nav>
        )}
      </div>

      {/* Desktop floating left TOC */}
      <aside
        aria-label="Cara takon"
        className="hidden md:sticky md:top-16 md:block md:w-52 md:shrink-0 md:self-start lg:w-56"
      >
        <nav>{renderGroups(false)}</nav>
      </aside>
    </>
  );
}
