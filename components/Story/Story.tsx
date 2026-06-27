import Image from "next/image";
import Reveal from "@/components/Reveal/Reveal";
import { founder } from "@/lib/content";
import styles from "./Story.module.css";

export default function Story() {
  return (
    <section id="story" className={styles.section}>
      <div className={styles.portrait}>
        <Image
          src={founder.image}
          alt={founder.alt}
          fill
          sizes="(max-width: 900px) 100vw, 50vw"
          className={styles.portraitImage}
        />
        <div className={styles.portraitScrim} />
        <span className={styles.caption}>Founder · {founder.name}</span>
        <Reveal className={styles.quoteWrap}>
          <span className={styles.quote}>&ldquo;{founder.quote}&rdquo;</span>
        </Reveal>
      </div>
      <Reveal className={styles.content}>
        <span className={styles.eyebrow}>Founder&apos;s Story</span>
        <h2 className={styles.heading}>
          The journey behind <span className={styles.headingItalic}>Solstice Privé</span>
        </h2>
        <p className={styles.copy}>
          After hosting unforgettable international experiences and witnessing the power of
          travel to bring people together, founder {founder.name} envisioned something bigger
          than vacations.
        </p>
        <p className={styles.copy}>
          A community. A movement. A place where extraordinary people could gather, explore,
          celebrate milestones, and create meaningful connections across the globe. Today,
          Solstice Privé transforms bucket-list dreams into unforgettable realities.
        </p>
      </Reveal>
    </section>
  );
}
