"use client";

import { useState } from "react";
import { useFormStatus } from "react-dom";
import { useSearchParams } from "next/navigation";
import Reveal from "@/components/Reveal/Reveal";
import Modal from "@/components/Modal/Modal";
import InquiryModal from "@/components/InquiryModal/InquiryModal";
import { createCheckoutSessionAction } from "@/lib/actions/checkout";
import { visaConcierge, type ItineraryPackage } from "@/lib/content";
import styles from "./VisaConcierge.module.css";

const CHECKOUT_MESSAGES: Record<string, string> = {
  success: "Payment received — we'll be in touch shortly to begin your visa support.",
  cancelled: "Checkout was cancelled. Your card was not charged.",
  error: "Something went wrong starting checkout. Please try again or ask us a question.",
  unavailable: "Online payment isn't live yet. Please use \"Ask a question instead\" and we'll help you book.",
};

function PayButton() {
  const { pending } = useFormStatus();
  return (
    <button type="submit" className={styles.cta} disabled={pending}>
      {pending ? "Redirecting to secure checkout…" : `Pay $${visaConcierge.fee} — Reserve Visa Support →`}
    </button>
  );
}

export default function VisaConcierge() {
  const [modalOpen, setModalOpen] = useState(false);
  const searchParams = useSearchParams();
  const checkoutStatus = searchParams.get("checkout");
  const checkoutMessage = checkoutStatus ? CHECKOUT_MESSAGES[checkoutStatus] : undefined;
  const { eyebrow, intro, includes, disclaimer, notIncluded, notIncludedNote, fee, feeUnit } =
    visaConcierge;

  const visaPackage: ItineraryPackage = {
    name: "Visa Concierge Service",
    price: fee,
    currency: "USD",
    unit: feeUnit,
    description: intro,
    includes,
  };
  const checkoutAction = createCheckoutSessionAction.bind(
    null,
    "Visa Concierge Service",
    "/#visa",
    visaPackage
  );

  return (
    <section id="visa" className={styles.section}>
      <div className={styles.inner}>
        <Reveal className={styles.headerWrap}>
          <span className={styles.eyebrow}>{eyebrow}</span>
          <h2 className={styles.heading}>
            Visa <span className={styles.headingItalic}>Concierge</span> Service
          </h2>
          <p className={styles.intro}>{intro}</p>
        </Reveal>

        <div className={styles.grid}>
          <Reveal className={styles.card}>
            <h3 className={styles.cardTitle}>What&apos;s Included</h3>
            <ul className={styles.includesList}>
              {includes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Reveal>

          <Reveal className={styles.card} delay={1}>
            <h3 className={styles.cardTitle}>Not Included</h3>
            <ul className={styles.notIncludedList}>
              {notIncluded.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className={styles.note}>{notIncludedNote}</p>
          </Reveal>
        </div>

        <Reveal className={styles.disclaimerBox} delay={2}>
          <p className={styles.disclaimer}>{disclaimer}</p>
        </Reveal>

        {checkoutMessage && (
          <p className={checkoutStatus === "success" ? styles.bannerSuccess : styles.bannerNotice}>
            {checkoutMessage}
          </p>
        )}

        <Reveal className={styles.feeBar} delay={3}>
          <div className={styles.feeInfo}>
            <span className={styles.feeLabel}>Visa Concierge Service Fee</span>
            <span className={styles.feeAmount}>
              ${fee} <span className={styles.feeUnit}>{feeUnit}</span>
            </span>
          </div>
          <div className={styles.feeActions}>
            <form action={checkoutAction}>
              <PayButton />
            </form>
            <button type="button" className={styles.askLink} onClick={() => setModalOpen(true)}>
              Ask a question instead
            </button>
          </div>
        </Reveal>
      </div>

      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} title="Ask About Visa Support">
        <InquiryModal topic="Visa Concierge Service" />
      </Modal>
    </section>
  );
}
