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
  const deposit = packages[0]?.depositAmount;

  return (
    <>
      {deposit && (
        <div className={styles.reserveSpot}>
          <span className={styles.reserveSpotBadge}>Reserve Your Spot</span>
          <p className={styles.reserveSpotText}>
            Secure your place on this exclusive experience with a non-refundable initial deposit of $
            {deposit.toLocaleString()}. Payments can be made via Zelle at{" "}
            <strong>{paymentContactEmail}</strong>.
          </p>
          <p className={styles.reserveSpotText}>
            Your deposit will be applied toward the total cost of the trip, reducing your remaining
            balance accordingly.
          </p>
          <div className={styles.reserveSpotDetails}>
            <div className={styles.reserveSpotDetail}>
              <span className={styles.reserveSpotDetailLabel}>Zelle Payment</span>
              <span className={styles.reserveSpotDetailValue}>{paymentContactEmail}</span>
            </div>
            <div className={styles.reserveSpotDetail}>
              <span className={styles.reserveSpotDetailLabel}>Initial Deposit</span>
              <span className={styles.reserveSpotDetailValue}>
                ${deposit.toLocaleString()} (Non-Refundable)
              </span>
            </div>
          </div>
          <p className={styles.reserveSpotClosing}>Reserve early to guarantee your spot.</p>
        </div>
      )}

      <div className={styles.list}>
        {packages.map((pkg) => {
          const pkgDeposit = pkg.depositAmount;
          const notifyHref = `mailto:${paymentContactEmail}?subject=${encodeURIComponent(
            `Zelle payment sent, ${pkg.name}`
          )}&body=${encodeURIComponent(
            `Hi Solstice Privé,\n\nI've sent my $${pkgDeposit.toLocaleString()} deposit for ${pkg.name} via Zelle.\n\nFull name:\nTrip name: ${pkg.name}\n`
          )}`;

          return (
            <div key={pkg.name} className={styles.package}>
              <div className={styles.packageHeader}>
                <span className={styles.packageName}>{pkg.name}</span>
                <span className={styles.price}>
                  ${pkg.price.toLocaleString()} <span className={styles.unit}>{pkg.unit}</span>
                </span>
              </div>

              <div className={styles.policyNotes}>
                <p>
                  <strong>${pkgDeposit.toLocaleString()} deposit</strong> due by {depositDeadline} to
                  reserve your spot. Remaining balance due before departure.
                </p>
                {!flightsIncluded && <p>Flights are not included.</p>}
              </div>
              <p className={styles.description}>{pkg.description}</p>
              <ul className={styles.includes}>
                {pkg.includes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <div className={styles.paymentMethod}>
                <span className={styles.paymentMethodTitle}>Pay by ACH / Zelle / Wire, no fee</span>
                <p className={styles.paymentMethodText}>
                  Send your ${pkgDeposit.toLocaleString()} deposit via Zelle to{" "}
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
    </>
  );
}
