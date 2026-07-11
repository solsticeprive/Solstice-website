"use client";

import { useFormStatus } from "react-dom";
import { createCheckoutSessionAction } from "@/lib/actions/checkout";
import type { ItineraryPackage } from "@/lib/content";
import styles from "./BookingModal.module.css";

interface BookingModalProps {
  itineraryTitle: string;
  itinerarySlug: string;
  packages: ItineraryPackage[];
  depositDeadline: string;
  flightsIncluded: boolean;
  cardFeePercent: number;
  onRequestWirePayment: (context: string) => void;
}

function PayByCardButton({ amount }: { amount: number }) {
  const { pending } = useFormStatus();
  return (
    <button type="submit" className={styles.reserve} disabled={pending}>
      {pending ? "Redirecting to secure checkout…" : `Pay $${amount.toLocaleString()} by Card →`}
    </button>
  );
}

export default function BookingModal({
  itineraryTitle,
  itinerarySlug,
  packages,
  depositDeadline,
  flightsIncluded,
  cardFeePercent,
  onRequestWirePayment,
}: BookingModalProps) {
  const returnPath = `/itinerary/${itinerarySlug}`;

  return (
    <div className={styles.list}>
      {packages.map((pkg) => {
        const deposit = pkg.depositAmount;
        const cardFee = Math.round(deposit * (cardFeePercent / 100) * 100) / 100;
        const cardTotal = deposit + cardFee;

        const cardCheckoutAction = createCheckoutSessionAction.bind(null, returnPath, [
          {
            name: `${itineraryTitle} — ${pkg.name} Deposit`,
            description: pkg.description,
            amount: deposit,
            currency: pkg.currency,
          },
          {
            name: `Credit Card Convenience Fee (${cardFeePercent}%)`,
            amount: cardFee,
            currency: pkg.currency,
          },
        ]);

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
              <form action={cardCheckoutAction}>
                <PayByCardButton amount={cardTotal} />
              </form>
              <button
                type="button"
                className={styles.wireButton}
                onClick={() =>
                  onRequestWirePayment(
                    `${pkg.name} — $${deposit.toLocaleString()} deposit via ACH/Zelle/Wire`
                  )
                }
              >
                Pay by ACH / Zelle / Wire — no fee →
              </button>
              <p className={styles.feeNote}>
                Credit card payments include a {cardFeePercent}% convenience fee. ACH, Zelle, and
                wire transfers have no processing fee.
              </p>
            </div>
          </div>
        );
      })}
      <p className={styles.secureNote}>Secure card payments powered by Stripe.</p>
    </div>
  );
}
