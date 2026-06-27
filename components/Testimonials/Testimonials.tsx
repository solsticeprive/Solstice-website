import Reveal from "@/components/Reveal/Reveal";
import { testimonials } from "@/lib/content";
import styles from "./Testimonials.module.css";

export default function Testimonials() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <Reveal className={styles.headerWrap}>
          <span className={styles.eyebrow}>What Our Travelers Say</span>
        </Reveal>
        <div className={styles.grid}>
          {testimonials.map((t, index) => (
            <Reveal key={t.quote} delay={index as 0 | 1 | 2} className={styles.card}>
              <div
                className={styles.cardInner}
                style={
                  {
                    "--card-bg": t.bg,
                    "--card-text": t.text,
                    "--card-accent": t.accent,
                  } as React.CSSProperties
                }
              >
                <span className={styles.quoteMark}>&ldquo;</span>
                <p className={styles.quoteText}>{t.quote}</p>
                <span className={styles.attribution}>Solstice Privé Traveler</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
