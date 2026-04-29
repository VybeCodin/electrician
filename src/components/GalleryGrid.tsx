"use client";

import { useMemo, useState } from "react";
import Icon from "./Icon";
import Lightbox from "./Lightbox";
import {
  galleryCategories,
  galleryItems,
  type GalleryCategory,
  type GalleryItem,
} from "@/lib/gallery";

const accentClasses: Record<GalleryItem["accent"], string> = {
  violet: "from-violet-500/30 via-violet-700/20 to-ink-900",
  amber: "from-amber-500/30 via-orange-700/20 to-ink-900",
  sky: "from-sky-500/30 via-cyan-700/20 to-ink-900",
  emerald: "from-emerald-500/30 via-teal-700/20 to-ink-900",
  rose: "from-rose-500/30 via-rose-700/20 to-ink-900",
  slate: "from-slate-500/30 via-slate-700/20 to-ink-900",
};

const accentChip: Record<GalleryItem["accent"], string> = {
  violet: "bg-violet-500/20 text-violet-200 border-violet-400/30",
  amber: "bg-amber-500/20 text-amber-200 border-amber-400/30",
  sky: "bg-sky-500/20 text-sky-200 border-sky-400/30",
  emerald: "bg-emerald-500/20 text-emerald-200 border-emerald-400/30",
  rose: "bg-rose-500/20 text-rose-200 border-rose-400/30",
  slate: "bg-slate-500/20 text-slate-200 border-slate-400/30",
};

export default function GalleryGrid() {
  const [filter, setFilter] = useState<"all" | GalleryCategory>("all");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const items = useMemo(
    () => (filter === "all" ? galleryItems : galleryItems.filter((i) => i.category === filter)),
    [filter],
  );

  return (
    <>
      <div className="mb-8 flex flex-wrap justify-center gap-2">
        {galleryCategories.map((c) => {
          const active = c.value === filter;
          return (
            <button
              key={c.value}
              type="button"
              onClick={() => setFilter(c.value)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                active
                  ? "bg-brand-500 text-white shadow-md shadow-brand-500/30"
                  : "border border-ink-200 bg-white text-ink-700 hover:border-ink-300 hover:bg-ink-50"
              }`}
            >
              {c.label}
            </button>
          );
        })}
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, i) => (
          <button
            type="button"
            key={item.id}
            onClick={() => setOpenIndex(i)}
            className="group relative block w-full overflow-hidden rounded-2xl border border-ink-100 bg-white text-left shadow-sm transition hover:-translate-y-1 hover:border-brand-200 hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2"
            aria-label={`View ${item.title}`}
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              {item.image ? (
                <div
                  className="absolute inset-0 bg-cover bg-center transition duration-500 group-hover:scale-105"
                  style={{ backgroundImage: `url('${item.image}')` }}
                  aria-hidden="true"
                />
              ) : (
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${accentClasses[item.accent]}`}
                  aria-hidden="true"
                />
              )}

              {!item.image && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <Icon
                    name={item.icon}
                    className="h-20 w-20 text-white/40 transition group-hover:scale-110 group-hover:text-white/60"
                  />
                </div>
              )}

              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/90 via-ink-950/20 to-transparent" />

              <span
                className={`absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium backdrop-blur ${accentChip[item.accent]}`}
              >
                <Icon name={item.icon} className="h-3 w-3" />
                {galleryCategories.find((c) => c.value === item.category)?.label}
              </span>

              <span className="absolute right-3 top-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white opacity-0 backdrop-blur transition group-hover:opacity-100">
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5" />
                </svg>
              </span>

              <div className="absolute inset-x-0 bottom-0 p-4 text-white">
                <h3 className="text-base font-semibold">{item.title}</h3>
                <p className="mt-0.5 flex items-center gap-1 text-xs text-ink-200">
                  <Icon name="map" className="h-3 w-3" />
                  {item.location}
                </p>
              </div>
            </div>

            <p className="border-t border-ink-100 p-4 text-sm text-ink-600">
              {item.description}
            </p>
          </button>
        ))}
      </div>

      {items.length === 0 && (
        <p className="mt-8 text-center text-sm text-ink-500">
          No projects in this category yet — check back soon.
        </p>
      )}

      {openIndex !== null && (
        <Lightbox
          items={items}
          index={openIndex}
          onClose={() => setOpenIndex(null)}
          onNavigate={setOpenIndex}
        />
      )}
    </>
  );
}
