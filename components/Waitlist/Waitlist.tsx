import Reveal from "@/components/Reveal/Reveal";
import WaitlistForm from "@/components/WaitlistForm/WaitlistForm";
import { marquee } from "@/lib/content";
import styles from "./Waitlist.module.css";

interface WaitlistProps {
  defaultInterest?: string;
}

export default function Waitlist({ defaultInterest }: WaitlistProps) {
  return (
    <section id="waitlist" className={styles.section}>
      <Reveal className={styles.inner}>
        <span className={styles.eyebrow}>Your Next Chapter</span>
        <h2 className={styles.heading}>
          Your next chapter starts with a <span className={styles.headingItalic}>passport.</span>
        </h2>
        <p className={styles.copy}>
          Join an exclusive community of travelers who believe life should be celebrated,
          explored, and experienced to the fullest.
        </p>
        <WaitlistForm defaultInterest={defaultInterest} />
      </Reveal>

      <div className={styles.marqueeWrap}>
        <div className={styles.marqueeLabelRow}>
          <span className={styles.marqueeLabel}>Upcoming Destinations</span>
        </div>
        <div className={styles.marqueeMask}>
          <div className={styles.marqueeTrack}>
            {marquee.map((city, index) => (
              <span key={`${city}-${index}`} className={styles.marqueeItem}>
                {city} <span className={styles.marqueeStar}>✦</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
