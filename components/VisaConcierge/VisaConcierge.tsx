import Reveal from "@/components/Reveal/Reveal";
import { visaConcierge } from "@/lib/content";
import styles from "./VisaConcierge.module.css";

export default function VisaConcierge() {
  const {
    eyebrow,
    intro,
    includes,
    disclaimer,
    notIncluded,
    notIncludedNote,
    fee,
    feeUnit,
    paymentContactEmail,
  } = visaConcierge;

  const notifyHref = `mailto:${paymentContactEmail}?subject=${encodeURIComponent(
    "Zelle payment sent — Visa Concierge Service"
  )}&body=${encodeURIComponent(
    `Hi Solstice Privé,\n\nI've sent my $${fee} payment for the Visa Concierge Service via Zelle.\n\nFull name:\n`
  )}`;

  return (
    <section id="visa" className={styles.section}>
      <div className={styles.inner}>
        <Reveal className={styles.headerWrap}>
          <span className={styles.eyebrow}>{eyebrow}</span>
          <h2 className={styles.heading}>
            Visa <span className={styles.headingItalic}>Concierge</span> Service
          </h2>
          <p className={styles.intro}>{intro}</p>
        </Reveal>

        <div className={styles.grid}>
          <Reveal className={styles.card}>
            <h3 className={styles.cardTitle}>What&apos;s Included</h3>
            <ul className={styles.includesList}>
              {includes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Reveal>

          <Reveal className={styles.card} delay={1}>
            <h3 className={styles.cardTitle}>Not Included</h3>
            <ul className={styles.notIncludedList}>
              {notIncluded.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className={styles.note}>{notIncludedNote}</p>
          </Reveal>
        </div>

        <Reveal className={styles.disclaimerBox} delay={2}>
          <p className={styles.disclaimer}>{disclaimer}</p>
        </Reveal>

        <Reveal className={styles.feeBar} delay={3}>
          <div className={styles.feeInfo}>
            <span className={styles.feeLabel}>Visa Concierge Service Fee</span>
            <span className={styles.feeAmount}>
              ${fee} <span className={styles.feeUnit}>{feeUnit}</span>
            </span>
          </div>
        </Reveal>

        <Reveal className={styles.paymentOptions} delay={4}>
          <div className={styles.paymentMethod}>
            <span className={styles.paymentMethodTitle}>Pay by ACH / Zelle / Wire — no fee</span>
            <p className={styles.paymentMethodText}>
              Send your ${fee} payment via Zelle to <strong>{paymentContactEmail}</strong>.
            </p>
            <a href={notifyHref} className={styles.wireButton}>
              Notify Us You&apos;ve Sent Payment →
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
