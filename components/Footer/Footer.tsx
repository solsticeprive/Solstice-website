import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <span className={styles.logo}>
          Solstice <span className={styles.logoAccent}>Privé</span>
        </span>
        <span className={styles.tagline}>
          Luxury Experiences. Meaningful Connections. Extraordinary Memories.
        </span>
        <span className={styles.copyright}>© 2026 Solstice Privé</span>
      </div>
    </footer>
  );
}
