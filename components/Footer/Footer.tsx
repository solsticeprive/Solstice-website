import Image from "next/image";
import Link from "next/link";
import { socialLinks } from "@/lib/content";
import { InstagramIcon, TikTokIcon, FacebookIcon } from "./SocialIcons";
import styles from "./Footer.module.css";

const socialIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  Instagram: InstagramIcon,
  TikTok: TikTokIcon,
  Facebook: FacebookIcon,
};

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <Link href="/" className={styles.logo}>
          <Image src="/assets/logo-1.png" alt="Solstice Privé" width={150} height={40} />
        </Link>
        <span className={styles.tagline}>
          Luxury Experiences. Meaningful Connections. Extraordinary Memories.
        </span>
        <div className={styles.socials}>
          {socialLinks.map((social) => {
            const Icon = socialIcons[social.label];
            return (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className={styles.socialLink}
              >
                <Icon className={styles.socialIcon} />
              </a>
            );
          })}
        </div>
        <Link href="/cancellation-policy" className={styles.legalLink}>
          Cancellation &amp; Refund Policy
        </Link>
        <span className={styles.copyright}>© 2026 Solstice Privé</span>
      </div>
    </footer>
  );
}
