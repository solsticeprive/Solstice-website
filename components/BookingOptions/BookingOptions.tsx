import type { ItineraryPackage } from "@/lib/content";
import styles from "./BookingOptions.module.css";

interface BookingOptionsProps {
  packages: ItineraryPackage[];
  depositDeadline: string;
  flightsIncluded: boolean;
  paymentContactEmail: string;
}

export default function BookingOptions({
  packages,
  depositDeadline,
  flightsIncluded,
  paymentContactEmail,
}: BookingOptionsProps) {
  return (
    <div className={styles.list}>
      {packages.map((pkg) => {
        const deposit = pkg.depositAmount;
        const notifyHref = `mailto:${paymentContactEmail}?subject=${encodeURIComponent(
          `Zelle payment sent, ${pkg.name}`
        )}&body=${encodeURIComponent(
          `Hi Solstice Privé,\n\nI've sent my $${deposit.toLocaleString()} deposit for ${pkg.name} via Zelle.\n\nFull name:\nTrip name: ${pkg.name}\n`
        )}`;

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

            <div className={styles.policyNotes}>
              <p>
                <strong>${deposit.toLocaleString()} deposit</strong> due by {depositDeadline} to
                reserve your spot. Remaining balance due before departure.
              </p>
              {!flightsIncluded && <p>Flights are not included.</p>}
            </div>

            <div className={styles.paymentMethod}>
              <span className={styles.paymentMethodTitle}>Pay by ACH / Zelle / Wire, no fee</span>
              <p className={styles.paymentMethodText}>
                Send your ${deposit.toLocaleString()} deposit via Zelle to{" "}
                <strong>{paymentContactEmail}</strong>.
              </p>
              <a href={notifyHref} className={styles.wireButton}>
                Notify Us You&apos;ve Sent Payment →
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
}
