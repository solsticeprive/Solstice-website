import Image from "next/image";
import Reveal from "@/components/Reveal/Reveal";
import { collections } from "@/lib/content";
import styles from "./Experiences.module.css";

export default function Experiences() {
  return (
    <section id="experiences" className={styles.section}>
      <div className={styles.inner}>
        <Reveal className={styles.headerWrap}>
          <span className={styles.eyebrow}>Featured Experiences</span>
          <h2 className={styles.heading}>
            Our Signature <span className={styles.headingItalic}>Collections</span>
          </h2>
        </Reveal>
        <div className={styles.grid}>
          {collections.map((collection) => (
            <Reveal key={collection.title} className={styles.card}>
              <div className={styles.media}>
                <Image
                  src={collection.image}
                  alt={collection.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1000px) 50vw, 33vw"
                  className={styles.mediaImage}
                />
                <div className={styles.mediaScrim} style={{ background: collection.gradient }} />
                <span className={styles.emoji}>{collection.emoji}</span>
                <span className={styles.tag}>{collection.tag}</span>
              </div>
              <div className={styles.body}>
                <h3 className={styles.title}>{collection.title}</h3>
                <p className={styles.desc}>{collection.desc}</p>
              </div>
            </Reveal>
          ))}
          <Reveal className={styles.ctaCardWrap}>
            <a href="#waitlist" className={styles.ctaCard}>
              <span className={styles.ctaTitle}>Your collection awaits</span>
              <span className={styles.ctaLabel}>Join the waitlist →</span>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
