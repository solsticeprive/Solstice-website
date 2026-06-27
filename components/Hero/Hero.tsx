"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { slides } from "@/lib/content";
import styles from "./Hero.module.css";

const AUTOPLAY_MS = 5500;

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = (index: number) => {
    setCurrent(((index % slides.length) + slides.length) % slides.length);
  };

  const restart = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrent((c) => (c + 1) % slides.length);
    }, AUTOPLAY_MS);
  };

  useEffect(() => {
    restart();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  return (
    <header className={styles.hero}>
      {slides.map((slide, index) => {
        const active = index === current;
        return (
          <div
            key={slide.kicker}
            className={`${styles.slide} ${active ? styles.active : ""}`}
            aria-hidden={!active}
          >
            <Image
              src={slide.image}
              alt={slide.alt}
              fill
              priority={index === 0}
              sizes="100vw"
              className={styles.image}
            />
            <div className={styles.scrim} />
            <div className={styles.captionWrap}>
              <div className={styles.caption}>
                <div className={styles.kickerRow}>
                  <span className={styles.kickerLine} />
                  <span className={styles.kicker}>{slide.kicker}</span>
                </div>
                <h1 className={styles.title}>
                  {slide.title.split("\n").map((line) => (
                    <span key={line} className={styles.titleLine}>
                      {line}
                    </span>
                  ))}
                </h1>
                <p className={styles.sub}>{slide.sub}</p>
              </div>
            </div>
          </div>
        );
      })}

      <div className={styles.overlay}>
        <div className={styles.overlayInner}>
          <div className={styles.counter}>
            <span className={styles.counterNum}>{String(current + 1).padStart(2, "0")}</span>
            <span className={styles.counterLine} />
            <span className={styles.counterTotal}>{String(slides.length).padStart(2, "0")}</span>
          </div>

          <div className={styles.bottomRow}>
            <div className={styles.ctaGroup}>
              <a href="#experiences" className={styles.primaryCta}>
                Explore Experiences →
              </a>
              <a href="#waitlist" className={styles.secondaryCta}>
                Join the Waitlist
              </a>
            </div>
            <div className={styles.controls}>
              <div className={styles.dots}>
                {slides.map((slide, index) => (
                  <button
                    key={slide.kicker}
                    type="button"
                    aria-label={`Go to slide ${index + 1}`}
                    className={`${styles.dot} ${index === current ? styles.dotActive : ""}`}
                    onClick={() => {
                      goTo(index);
                      restart();
                    }}
                  />
                ))}
              </div>
              <div className={styles.arrows}>
                <button
                  type="button"
                  aria-label="Previous slide"
                  className={styles.arrow}
                  onClick={() => {
                    goTo(current - 1);
                    restart();
                  }}
                >
                  ←
                </button>
                <button
                  type="button"
                  aria-label="Next slide"
                  className={styles.arrow}
                  onClick={() => {
                    goTo(current + 1);
                    restart();
                  }}
                >
                  →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
