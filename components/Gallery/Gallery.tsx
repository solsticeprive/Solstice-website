"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Reveal from "@/components/Reveal/Reveal";
import { galleryItems } from "@/lib/content";
import styles from "./Gallery.module.css";

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const close = useCallback(() => setActiveIndex(null), []);
  const showPrev = useCallback(
    () => setActiveIndex((i) => (i === null ? null : (i - 1 + galleryItems.length) % galleryItems.length)),
    []
  );
  const showNext = useCallback(
    () => setActiveIndex((i) => (i === null ? null : (i + 1) % galleryItems.length)),
    []
  );

  useEffect(() => {
    if (activeIndex === null) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowLeft") showPrev();
      if (event.key === "ArrowRight") showNext();
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [activeIndex, close, showPrev, showNext]);

  const active = activeIndex === null ? null : galleryItems[activeIndex];

  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <span className={styles.eyebrow}>The Gallery</span>
          <h1 className={styles.title}>
            Moments From Our <span className={styles.titleItalic}>Travelers</span>
          </h1>
          <p className={styles.intro}>
            Real trips, real friendships, real memories. A look at the extraordinary places and
            people that make up the Solstice Privé community.
          </p>
        </div>
      </section>

      <section className={styles.body}>
        <div className={styles.grid}>
          {galleryItems.map((item, index) => (
            <Reveal key={item.src} delay={(index % 4) as 0 | 1 | 2 | 3} className={styles.item}>
              <button
                type="button"
                className={styles.itemButton}
                onClick={() => setActiveIndex(index)}
                aria-label={`View ${item.kind === "video" ? "video" : "larger image"}: ${item.caption}`}
              >
                <Image
                  src={item.kind === "video" ? item.poster : item.src}
                  alt={item.alt}
                  width={item.width}
                  height={item.height}
                  sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw"
                  className={styles.itemImage}
                />
                {item.kind === "video" && (
                  <span className={styles.playBadge} aria-hidden="true">
                    ▶
                  </span>
                )}
                <span className={styles.itemScrim} />
                <span className={styles.itemCaption}>{item.caption}</span>
              </button>
            </Reveal>
          ))}
        </div>
      </section>

      {active && (
        <div className={styles.lightbox} onClick={close} role="dialog" aria-modal="true">
          <button type="button" className={styles.lightboxClose} onClick={close} aria-label="Close">
            ✕
          </button>
          <button
            type="button"
            className={styles.lightboxPrev}
            onClick={(event) => {
              event.stopPropagation();
              showPrev();
            }}
            aria-label="Previous item"
          >
            ←
          </button>
          <div className={styles.lightboxContent} onClick={(event) => event.stopPropagation()}>
            {active.kind === "video" ? (
              <video
                src={active.src}
                poster={active.poster}
                controls
                autoPlay
                playsInline
                className={styles.lightboxVideo}
              />
            ) : (
              <Image
                src={active.src}
                alt={active.alt}
                width={active.width}
                height={active.height}
                sizes="90vw"
                className={styles.lightboxImage}
                priority
              />
            )}
            <p className={styles.lightboxCaption}>{active.caption}</p>
          </div>
          <button
            type="button"
            className={styles.lightboxNext}
            onClick={(event) => {
              event.stopPropagation();
              showNext();
            }}
            aria-label="Next item"
          >
            →
          </button>
        </div>
      )}
    </>
  );
}
