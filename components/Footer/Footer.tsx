import Image from "next/image";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <span className={styles.logo}>
          <Image src="/assets/logo-1.png" alt="Solstice Privé" width={150} height={40} />
        </span>
        <span className={styles.tagline}>
          Luxury Experiences. Meaningful Connections. Extraordinary Memories.
        </span>
        <span className={styles.copyright}>© 2026 Solstice Privé</span>
      </div>
    </footer>
  );
}
