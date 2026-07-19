"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Nav.module.css";

const links = [
  { href: "/#experiences", label: "Experiences" },
  { href: "/#difference", label: "Our Difference" },
  { href: "/#story", label: "Story" },
  { href: "/gallery", label: "Gallery" },
  { href: "/#visa", label: "Visa Support" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  return (
    <nav
      className={`${styles.nav} ${scrolled ? styles.scrolled : ""} ${
        menuOpen ? styles.navMenuOpen : ""
      }`}
    >
      <div className={styles.inner}>
        <Link href="/" className={styles.logo}>
          <Image src="/assets/logo-1.png" alt="Solstice Privé" width={150} height={40} priority />
        </Link>
        <div className={styles.links}>
          {links.map((link) => (
            <Link key={link.href} href={link.href} className={styles.link}>
              {link.label}
            </Link>
          ))}
          <Link href="/#waitlist" className={styles.cta}>
            Join Waitlist
          </Link>
          <button
            type="button"
            className={`${styles.menuToggle} ${menuOpen ? styles.menuToggleOpen : ""}`}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className={styles.bar} />
            <span className={styles.bar} />
            <span className={styles.bar} />
          </button>
        </div>
      </div>

      <div
        className={`${styles.backdrop} ${menuOpen ? styles.backdropVisible : ""}`}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />

      <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ""}`}>
        <span className={styles.mobileMenuEyebrow}>Menu</span>
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={styles.mobileLink}
            onClick={() => setMenuOpen(false)}
          >
            <span>{link.label}</span>
            <span className={styles.mobileLinkArrow}>→</span>
          </Link>
        ))}
        <Link href="/#waitlist" className={styles.mobileCta} onClick={() => setMenuOpen(false)}>
          Join Waitlist
        </Link>
      </div>
    </nav>
  );
}
