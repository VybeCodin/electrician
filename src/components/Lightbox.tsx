"use client";

import { useCallback, useEffect } from "react";
import Icon from "./Icon";
import {
  galleryCategories,
  type GalleryItem,
} from "@/lib/gallery";

const accentBg: Record<GalleryItem["accent"], string> = {
  violet: "from-violet-600 via-violet-800 to-ink-950",
  amber: "from-amber-600 via-orange-800 to-ink-950",
  sky: "from-sky-600 via-cyan-800 to-ink-950",
  emerald: "from-emerald-600 via-teal-800 to-ink-950",
  rose: "from-rose-600 via-rose-800 to-ink-950",
  slate: "from-slate-600 via-slate-800 to-ink-950",
};

type Props = {
  items: GalleryItem[];
  index: number;
  onClose: () => void;
  onNavigate: (next: number) => void;
};

export default function Lightbox({ items, index, onClose, onNavigate }: Props) {
  const item = items[index];

  const next = useCallback(() => {
    onNavigate((index + 1) % items.length);
  }, [index, items.length, onNavigate]);

  const prev = useCallback(() => {
    onNavigate((index - 1 + items.length) % items.length);
  }, [index, items.length, onNavigate]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    }
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose, next, prev]);

  if (!item) return null;

  const categoryLabel = galleryCategories.find((c) => c.value === item.category)?.label;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-ink-950/90 p-4 backdrop-blur-sm sm:p-8"
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:right-6 sm:top-6"
        aria-label="Close"
      >
        <Icon name="close" className="h-5 w-5" />
      </button>

      {items.length > 1 && (
        <>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            className="absolute left-2 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:left-6"
            aria-label="Previous image"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            className="absolute right-2 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:right-6"
            aria-label="Next image"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 6l6 6-6 6" />
            </svg>
          </button>
        </>
      )}

      <figure
        className="relative w-full max-w-5xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative overflow-hidden rounded-2xl bg-ink-900 shadow-2xl">
          <div className="relative aspect-[16/10] w-full">
            {item.image ? (
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url('${item.image}')` }}
                aria-hidden="true"
              />
            ) : (
              <>
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${accentBg[item.accent]}`}
                  aria-hidden="true"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Icon name={item.icon} className="h-32 w-32 text-white/30 sm:h-44 sm:w-44" />
                </div>
              </>
            )}
          </div>

          <figcaption className="border-t border-white/10 bg-ink-900/95 px-5 py-4 text-white sm:px-7 sm:py-5">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-wider text-brand-300">
                  {categoryLabel}
                </p>
                <h3 className="mt-1 text-lg font-semibold sm:text-xl">{item.title}</h3>
                <p className="mt-1 flex items-center gap-1.5 text-xs text-ink-300">
                  <Icon name="map" className="h-3.5 w-3.5" />
                  {item.location}
                </p>
              </div>
              <span className="flex-shrink-0 text-xs text-ink-400">
                {index + 1} / {items.length}
              </span>
            </div>
            <p className="mt-3 text-sm text-ink-200">{item.description}</p>
          </figcaption>
        </div>
      </figure>
    </div>
  );
}
