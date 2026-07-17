import Reveal from "@/components/Reveal/Reveal";
import { cancellationPolicy } from "@/lib/content";
import styles from "./CancellationPolicy.module.css";

export default function CancellationPolicy() {
  const { title, intro, sections, closing } = cancellationPolicy;

  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <span className={styles.eyebrow}>Legal</span>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.intro}>{intro}</p>
        </div>
      </section>

      <section className={styles.body}>
        <div className={styles.inner}>
          {sections.map((section) => (
            <Reveal key={section.heading} className={styles.section}>
              <h2 className={styles.sectionHeading}>{section.heading}</h2>
              {section.body.map((paragraph) => (
                <p key={paragraph} className={styles.sectionBody}>
                  {paragraph}
                </p>
              ))}
            </Reveal>
          ))}

          <Reveal className={styles.closingBox}>
            <p className={styles.closingText}>{closing}</p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
