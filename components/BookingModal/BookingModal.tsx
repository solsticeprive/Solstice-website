"use client";

import type { ItineraryPackage } from "@/lib/content";
import styles from "./BookingModal.module.css";

interface BookingModalProps {
  packages: ItineraryPackage[];
  depositDeadline: string;
  flightsIncluded: boolean;
  cardFeePercent: number;
  paymentTerms: string[];
  paymentContactEmail: string;
  onRequestWirePayment: (context: string) => void;
}

export default function BookingModal({
  packages,
  depositDeadline,
  flightsIncluded,
  cardFeePercent,
  paymentTerms,
  paymentContactEmail,
  onRequestWirePayment,
}: BookingModalProps) {
  return (
    <div className={styles.list}>
      {packages.map((pkg) => {
        const deposit = pkg.depositAmount;

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

            <div className={styles.paymentOptions}>
              <div className={styles.paymentMethod}>
                <span className={styles.paymentMethodTitle}>Pay by ACH / Zelle / Wire — no fee</span>
                <p className={styles.paymentMethodText}>
                  Send your ${deposit.toLocaleString()} deposit via Zelle to{" "}
                  <strong>{paymentContactEmail}</strong>.
                </p>
                <button
                  type="button"
                  className={styles.wireButton}
                  onClick={() =>
                    onRequestWirePayment(
                      `${pkg.name} — $${deposit.toLocaleString()} deposit sent via ACH/Zelle/Wire`
                    )
                  }
                >
                  Notify Us You&apos;ve Sent Payment →
                </button>
              </div>

              <div className={styles.paymentMethod}>
                <span className={styles.paymentMethodTitle}>
                  Pay by Credit Card — {cardFeePercent}% convenience fee
                </span>
                <p className={styles.paymentMethodText}>
                  Email us at <strong>{paymentContactEmail}</strong> to arrange your credit card
                  payment.
                </p>
                <a href={`mailto:${paymentContactEmail}`} className={styles.reserve}>
                  Email Us to Pay by Card →
                </a>
              </div>
            </div>
          </div>
        );
      })}

      <div className={styles.termsBox}>
        <h4 className={styles.termsTitle}>Payment Plan Terms</h4>
        <ul className={styles.termsList}>
          {paymentTerms.map((term) => (
            <li key={term}>{term}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
