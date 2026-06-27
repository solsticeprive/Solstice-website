import Link from "next/link";
import styles from "./NotFound.module.css";

export default function NotFound() {
  return (
    <main className={styles.section}>
      <div className={styles.inner}>
        <span className={styles.stamp}>404</span>
        <span className={styles.eyebrow}>Off the Itinerary</span>
        <h1 className={styles.heading}>
          Looks like you&apos;ve <span className={styles.headingItalic}>wandered off the map.</span>
        </h1>
        <p className={styles.copy}>
          The page you&apos;re looking for has moved, been renamed, or never existed. Let&apos;s
          get you back on the itinerary.
        </p>
        <div className={styles.actions}>
          <Link href="/" className={styles.primaryCta}>
            Return Home
          </Link>
          <Link href="/#waitlist" className={styles.secondaryCta}>
            Join the Waitlist
          </Link>
        </div>
      </div>
    </main>
  );
}
