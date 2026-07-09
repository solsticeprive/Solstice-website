"use client";

import { useFormStatus } from "react-dom";
import { createCheckoutSessionAction } from "@/lib/actions/checkout";
import type { ItineraryPackage } from "@/lib/content";
import styles from "./BookingModal.module.css";

interface BookingModalProps {
  itineraryTitle: string;
  itinerarySlug: string;
  packages: ItineraryPackage[];
}

function ReserveButton() {
  const { pending } = useFormStatus();
  return (
    <button type="submit" className={styles.reserve} disabled={pending}>
      {pending ? "Redirecting to secure checkout…" : "Reserve & Pay Online →"}
    </button>
  );
}

export default function BookingModal({ itineraryTitle, itinerarySlug, packages }: BookingModalProps) {
  return (
    <div className={styles.list}>
      {packages.map((pkg) => {
        const checkoutAction = createCheckoutSessionAction.bind(
          null,
          `${itineraryTitle} — ${pkg.name}`,
          `/itinerary/${itinerarySlug}`,
          pkg
        );
        return (
          <div key={pkg.name} className={styles.package}>
            <div className={styles.packageHeader}>
              <span className={styles.packageName}>{pkg.name}</span>
              <span className={styles.price}>
                ${pkg.price.toLocaleString()} <span className={styles.unit}>{pkg.unit}</span>
              </span>
            </div>
            <p className={styles.description}>{pkg.description}</p>
            <ul className={styles.includes}>
              {pkg.includes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <form action={checkoutAction}>
              <ReserveButton />
            </form>
          </div>
        );
      })}
      <p className={styles.secureNote}>Secure payment powered by Stripe.</p>
    </div>
  );
}
