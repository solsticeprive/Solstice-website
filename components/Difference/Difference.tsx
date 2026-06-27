import Reveal from "@/components/Reveal/Reveal";
import { differences } from "@/lib/content";
import styles from "./Difference.module.css";

export default function Difference() {
  return (
    <section id="difference" className={styles.section}>
      <div className={styles.inner}>
        <Reveal className={styles.headerWrap}>
          <span className={styles.eyebrow}>Our Difference</span>
          <h2 className={styles.heading}>
            Why travel with <span className={styles.headingItalic}>Solstice Privé?</span>
          </h2>
        </Reveal>
        <div className={styles.grid}>
          {differences.map((d, index) => (
            <Reveal
              key={d.num}
              delay={index as 0 | 1 | 2 | 3}
              className={styles.card}
            >
              <div
                className={styles.cardInner}
                style={
                  {
                    "--card-bg": d.bg,
                    "--num-color": d.numColor,
                    "--title-color": d.titleColor,
                    "--desc-color": d.descColor,
                  } as React.CSSProperties
                }
              >
                <span className={styles.num}>{d.num}</span>
                <h3 className={styles.title}>{d.title}</h3>
                <p className={styles.desc}>{d.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
