"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./Reveal.module.css";

interface RevealProps {
  children: React.ReactNode;
  delay?: 0 | 1 | 2 | 3 | 4;
  className?: string;
}

const delayClass = {
  0: "",
  1: styles.delay1,
  2: styles.delay2,
  3: styles.delay3,
  4: styles.delay4,
};

export default function Reveal({ children, delay = 0, className }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -7% 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={[styles.reveal, visible ? styles.visible : "", delayClass[delay], className]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </div>
  );
}
