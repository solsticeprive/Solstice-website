import Image from "next/image";
import Reveal from "@/components/Reveal/Reveal";
import { manifesto } from "@/lib/content";
import styles from "./Manifesto.module.css";

export default function Manifesto() {
  const { eyebrow, tagline, collage, paragraphs, pillars, closingLine } = manifesto;
  const [firstWord, ...restWords] = tagline.split(" ");

  return (
    <section id="philosophy" className={styles.section}>
      <div className={styles.inner}>
        <Reveal className={styles.headerWrap}>
          <span className={styles.eyebrow}>{eyebrow}</span>
          <h2 className={styles.tagline}>
            {firstWord} <span className={styles.taglineAccent}>{restWords.join(" ")}</span>
          </h2>
        </Reveal>

        <Reveal className={styles.collage} delay={1}>
          {collage.map((item) => (
            <div key={item.image} className={styles.collageItem}>
              <Image
                src={item.image}
                alt={item.alt}
                fill
                sizes="(max-width: 900px) 100vw, 33vw"
                className={styles.collageImage}
              />
            </div>
          ))}
        </Reveal>

        <Reveal className={styles.copyWrap} delay={2}>
          {paragraphs.map((paragraph) => (
            <p key={paragraph} className={styles.paragraph}>
              {paragraph}
            </p>
          ))}
        </Reveal>

        <Reveal className={styles.pillars} delay={3}>
          {pillars.map((pillar) => (
            <div key={pillar.num} className={styles.pillar}>
              <Image
                src={pillar.image}
                alt={pillar.alt}
                fill
                sizes="(max-width: 900px) 100vw, 33vw"
                className={styles.pillarImage}
              />
              <div className={styles.pillarScrim} />
              <span className={styles.pillarNum}>{pillar.num}</span>
              <span className={styles.pillarLabel}>{pillar.label}</span>
            </div>
          ))}
        </Reveal>

        <Reveal className={styles.closingWrap} delay={4}>
          <p className={styles.closingLine}>{closingLine}</p>
        </Reveal>
      </div>
    </section>
  );
}
