"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  DashboardIcon,
  BookingsIcon,
  TripsIcon,
  WaitlistIcon,
  ExternalLinkIcon,
  LogoutIcon,
} from "@/components/admin/icons/AdminIcons";
import { logoutAction } from "@/lib/admin/actions";
import styles from "./Sidebar.module.css";

const navItems = [
  { href: "/admin", label: "Dashboard", icon: DashboardIcon },
  { href: "/admin/bookings", label: "Bookings", icon: BookingsIcon },
  { href: "/admin/trips", label: "Trips", icon: TripsIcon },
  { href: "/admin/waitlist", label: "Waitlist", icon: WaitlistIcon },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className={styles.sidebar}>
      <div className={styles.brand}>
        <span className={styles.brandName}>
          <Image src="/assets/logo-1.png" alt="Solstice Privé" width={140} height={38} />
        </span>
        <span className={styles.brandTag}>Admin</span>
      </div>

      <nav className={styles.nav}>
        {navItems.map(({ href, label, icon: Icon }) => {
          const active = href === "/admin" ? pathname === href : pathname.startsWith(href);
          return (
            <Link
              key={href}
              href={href}
              className={`${styles.navLink} ${active ? styles.active : ""}`}
            >
              <Icon className={styles.navIcon} />
              <span>{label}</span>
            </Link>
          );
        })}
      </nav>

      <div className={styles.footer}>
        <Link href="/" className={styles.footerLink}>
          <ExternalLinkIcon className={styles.navIcon} />
          <span>View Live Site</span>
        </Link>
        <form action={logoutAction}>
          <button type="submit" className={styles.footerLink}>
            <LogoutIcon className={styles.navIcon} />
            <span>Log Out</span>
          </button>
        </form>
      </div>
    </aside>
  );
}
