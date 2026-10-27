"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import { Play, ExternalLink, X, ChevronLeft, ChevronRight } from "lucide-react";
import type { GalleryItem } from "@/app/gallery/items";

interface GalleryGridProps {
  cloudName: string;
  items: GalleryItem[];
}

function imageUrl(cloudName: string, item: GalleryItem, width: number) {
  return `https://res.cloudinary.com/${cloudName}/image/upload/c_fill,w_${width},h_${width},g_auto/f_auto/q_auto/${item.publicId}`;
}

function fullImageUrl(cloudName: string, item: GalleryItem, width: number) {
  return `https://res.cloudinary.com/${cloudName}/image/upload/c_limit,w_${width}/f_auto/q_auto/${item.publicId}`;
}

function posterUrl(cloudName: string, item: GalleryItem, width: number) {
  return item.posterPublicId
    ? `https://res.cloudinary.com/${cloudName}/image/upload/q_auto,f_auto,w_${width},c_fill/${item.posterPublicId}`
    : `https://res.cloudinary.com/${cloudName}/video/upload/so_0,q_auto,f_jpg,w_${width},c_fill/${item.publicId}.jpg`;
}

function splitTags(tags: string | null) {
  return (tags ?? "")
    .split(",")
    .map((t) => t.trim())
    .filter(Boolean);
}

export default function GalleryGrid({ cloudName, items }: GalleryGridProps) {
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const tags = useMemo(() => {
    const all = new Set<string>();
    for (const item of items) {
      for (const tag of splitTags(item.tags)) all.add(tag);
    }
    return Array.from(all).sort();
  }, [items]);

  const visible = useMemo(
    () =>
      activeTag
        ? items.filter((item) => splitTags(item.tags).includes(activeTag))
        : items,
    [items, activeTag],
  );

  const close = useCallback(() => setOpenIndex(null), []);
  const prev = useCallback(() => {
    setOpenIndex((i) =>
      i === null ? i : (i - 1 + visible.length) % visible.length,
    );
  }, [visible.length]);
  const next = useCallback(() => {
    setOpenIndex((i) => (i === null ? i : (i + 1) % visible.length));
  }, [visible.length]);

  // Keyboard navigation and scroll lock while the lightbox is open
  useEffect(() => {
    if (openIndex === null) return;
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowLeft") prev();
      else if (e.key === "ArrowRight") next();
    }
    document.addEventListener("keydown", handleKey);
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = overflow;
    };
  }, [openIndex, close, prev, next]);

  if (items.length === 0) {
    return (
      <p className="text-center text-muted font-body py-12">
        Gallery is being prepared. Check back soon.
      </p>
    );
  }

  const current =
    openIndex !== null && openIndex < visible.length
      ? visible[openIndex]
      : null;

  const chipClass = (active: boolean) =>
    `px-3 py-1.5 rounded-full text-xs font-body font-semibold transition-colors ${
      active
        ? "bg-primary text-white"
        : "bg-white text-dark border border-gray-200 hover:bg-gray-50"
    }`;

  return (
    <div>
      {tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-6 sm:mb-8">
          <button
            type="button"
            onClick={() => setActiveTag(null)}
            className={chipClass(activeTag === null)}
          >
            All
          </button>
          {tags.map((tag) => (
            <button
              key={tag}
              type="button"
              onClick={() => setActiveTag(tag)}
              className={chipClass(activeTag === tag)}
            >
              #{tag}
            </button>
          ))}
        </div>
      )}

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
        {visible.map((item, i) => {
          const isVideo = item.resourceType === "video";
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => setOpenIndex(i)}
              className="group rounded-lg overflow-hidden relative aspect-square bg-gray-100 block w-full text-left focus:outline-none focus:ring-2 focus:ring-primary"
              aria-label={`Open ${item.caption ?? (isVideo ? "video" : "image")}`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element -- Cloudinary already resizes and optimises */}
              <img
                src={
                  isVideo
                    ? posterUrl(cloudName, item, 800)
                    : imageUrl(cloudName, item, 800)
                }
                alt={item.caption ?? (isVideo ? "Video" : "Gallery image")}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              {isVideo && (
                <span className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-colors">
                  <Play
                    size={36}
                    className="text-white drop-shadow-lg"
                    fill="white"
                  />
                </span>
              )}
              {(item.caption || item.link) && (
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-2 sm:p-3 pointer-events-none">
                  <div className="flex items-center gap-1 text-white text-xs sm:text-sm font-body">
                    <span className="line-clamp-2">{item.caption}</span>
                    {item.link && <ExternalLink size={12} />}
                  </div>
                </div>
              )}
            </button>
          );
        })}
      </div>

      {current && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 sm:p-8"
          onClick={close}
          role="dialog"
          aria-modal="true"
        >
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              close();
            }}
            className="absolute top-4 right-4 text-white/80 hover:text-white p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            aria-label="Close"
          >
            <X size={24} />
          </button>
          {visible.length > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  prev();
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                aria-label="Previous"
              >
                <ChevronLeft size={28} />
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  next();
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                aria-label="Next"
              >
                <ChevronRight size={28} />
              </button>
            </>
          )}
          <div
            className="relative max-w-6xl w-full max-h-full flex flex-col items-center gap-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full flex items-center justify-center">
              {current.resourceType === "video" ? (
                <video
                  key={current.id}
                  autoPlay
                  controls
                  playsInline
                  poster={posterUrl(cloudName, current, 1600)}
                  src={`https://res.cloudinary.com/${cloudName}/video/upload/q_auto,f_auto/${current.publicId}`}
                  className="max-h-[80vh] w-auto max-w-full rounded-lg"
                />
              ) : (
                // eslint-disable-next-line @next/next/no-img-element -- Cloudinary already resizes and optimises
                <img
                  key={current.id}
                  src={fullImageUrl(cloudName, current, 1600)}
                  alt={current.caption ?? "Gallery image"}
                  className="max-h-[80vh] w-auto max-w-full object-contain rounded-lg"
                />
              )}
            </div>
            {(current.caption || current.link) && (
              <div className="text-center text-white font-body max-w-2xl">
                {current.caption && (
                  <p className="text-sm sm:text-base">{current.caption}</p>
                )}
                {current.link && (
                  <a
                    href={current.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-1 mt-2 text-xs sm:text-sm text-white/80 hover:text-white underline"
                  >
                    Open link <ExternalLink size={12} />
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
