import type { Metadata } from "next";
import Image from "next/image";
import LoginForm from "@/components/admin/LoginForm/LoginForm";
import { DEMO_CREDENTIALS } from "@/lib/admin/auth";
import styles from "./login.module.css";

export const metadata: Metadata = {
  title: "Admin Login | Solstice Privé",
};

export default function AdminLoginPage() {
  return (
    <main className={styles.page}>
      <div className={styles.visual}>
        <Image
          src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1600&q=80"
          alt="Dubai skyline at sunset"
          fill
          priority
          sizes="(max-width: 900px) 0px, 55vw"
          className={styles.visualImage}
        />
        <div className={styles.visualScrim} />
        <div className={styles.visualContent}>
          <span className={styles.visualBrand}>
            Solstice <em>Privé</em>
          </span>
          <p className={styles.visualQuote}>
            “Life is short. <em>The time to see the world is now.</em>”
          </p>
          <span className={styles.visualCaption}>Tiley Akerejola, Founder</span>
        </div>
      </div>

      <div className={styles.formSide}>
        <div className={styles.formCard}>
          <span className={styles.eyebrow}>Admin Access</span>
          <h1 className={styles.heading}>Welcome back</h1>
          <p className={styles.subtext}>Sign in to manage bookings, trips, and the waitlist.</p>
          <LoginForm demoHint={`${DEMO_CREDENTIALS.email} / ${DEMO_CREDENTIALS.password}`} />
        </div>
      </div>
    </main>
  );
}
