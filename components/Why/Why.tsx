import Reveal from "@/components/Reveal/Reveal";
import { features } from "@/lib/content";
import styles from "./Why.module.css";

export default function Why() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <Reveal>
          <span className={styles.eyebrow}>Why Solstice Privé</span>
          <h2 className={styles.heading}>
            We don&apos;t just plan trips. We{" "}
            <span className={styles.headingItalic}>curate experiences.</span>
          </h2>
          <p className={styles.copy}>
            Whether you&apos;re celebrating a milestone, looking for love, reconnecting with your
            spouse, prioritizing your health, or ready to explore with like-minded people. Every
            experience is designed entirely around you.
          </p>
        </Reveal>
        <Reveal delay={1} className={styles.grid}>
          {features.map((feature) => (
            <div
              key={feature.label}
              className={styles.card}
              style={{ "--card-bg": feature.bg, "--card-fg": feature.fg } as React.CSSProperties}
            >
              <span className={styles.icon}>{feature.icon}</span>
              <span className={styles.label}>{feature.label}</span>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
