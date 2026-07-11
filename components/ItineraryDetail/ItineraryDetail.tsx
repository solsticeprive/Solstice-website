"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Reveal from "@/components/Reveal/Reveal";
import Modal from "@/components/Modal/Modal";
import BookingModal from "@/components/BookingModal/BookingModal";
import InquiryModal from "@/components/InquiryModal/InquiryModal";
import { lagosItinerary } from "@/lib/content";
import styles from "./ItineraryDetail.module.css";

const CHECKOUT_MESSAGES: Record<string, string> = {
  success: "Payment received — welcome aboard! A confirmation email is on its way.",
  cancelled: "Checkout was cancelled. Your card was not charged.",
  error: "Something went wrong starting checkout. Please try again or ask us a question.",
  unavailable: "Online payment isn't live yet. Please use \"Ask a Question\" and we'll help you book.",
};

export default function ItineraryDetail() {
  const {
    title,
    tag,
    summary,
    heroImage,
    heroAlt,
    gallery,
    phases,
    packages,
    slug,
    depositDeadline,
    flightsIncluded,
    cardFeePercent,
  } = lagosItinerary;
  const [activeModal, setActiveModal] = useState<"book" | "ask" | null>(null);
  const [askTopic, setAskTopic] = useState(title);
  const searchParams = useSearchParams();
  const checkoutStatus = searchParams.get("checkout");
  const checkoutMessage = checkoutStatus ? CHECKOUT_MESSAGES[checkoutStatus] : undefined;

  const openAsk = (topic: string) => {
    setAskTopic(topic);
    setActiveModal("ask");
  };

  return (
    <>
      {checkoutMessage && (
        <div className={checkoutStatus === "success" ? styles.bannerSuccess : styles.bannerNotice}>
          {checkoutMessage}
        </div>
      )}

      <section className={styles.hero}>
        <Image src={heroImage} alt={heroAlt} fill className={styles.heroImage} />
        <div className={styles.heroScrim} />
        <div className={styles.heroContent}>
          <span className={styles.tag}>{tag}</span>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.summary}>{summary}</p>
          <div className={styles.heroCtaGroup}>
            <button type="button" className={styles.cta} onClick={() => setActiveModal("book")}>
              Book Now →
            </button>
            <button type="button" className={styles.ctaSecondary} onClick={() => openAsk(title)}>
              Ask a Question
            </button>
          </div>
        </div>
      </section>

      <section className={styles.gallerySection}>
        <div className={styles.galleryInner}>
          <Reveal className={styles.galleryGrid}>
            {gallery.map((item, index) => (
              <div key={item.image} className={styles.galleryItem} data-span={index === 0 || index === 4 || index === 7 ? "wide" : ""}>
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 900px) 50vw, 25vw"
                  className={styles.galleryImage}
                />
                <div className={styles.galleryScrim} />
                <span className={styles.galleryCaption}>{item.caption}</span>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className={styles.body}>
        <div className={styles.inner}>
          {phases.map((phase) => (
            <Reveal key={phase.phase} className={styles.phase}>
              <div className={styles.phaseHeader}>
                <span className={styles.phaseEyebrow}>{phase.phase}</span>
                <h2 className={styles.phaseTitle}>{phase.location}</h2>
                <span className={styles.phaseDates}>{phase.dateRange}</span>
              </div>
              <div className={styles.days}>
                {phase.days.map((day) => (
                  <div key={day.day} className={styles.day}>
                    <div className={styles.dayHeader}>
                      <span className={styles.dayName}>{day.day}</span>
                      <span className={styles.dayDate}>{day.date}</span>
                    </div>
                    <ul className={styles.activities}>
                      {day.activities.map((activity) => (
                        <li key={activity.label} className={styles.activity}>
                          {activity.time && <span className={styles.activityTime}>{activity.time}</span>}
                          <span>{activity.label}</span>
                          {activity.optional && <span className={styles.optionalTag}>Optional</span>}
                        </li>
                      ))}
                    </ul>
                    {day.dressCode && (
                      <span className={styles.dressCode}>Dress code: {day.dressCode}</span>
                    )}
                  </div>
                ))}
              </div>
            </Reveal>
          ))}

          <Reveal className={styles.goodToKnow}>
            <h3 className={styles.goodToKnowTitle}>Good to Know</h3>
            <ul className={styles.goodToKnowList}>
              <li>
                <strong>${packages[0].depositAmount.toLocaleString()} deposit</strong> due by{" "}
                {depositDeadline} to reserve your spot.
              </li>
              {!flightsIncluded && <li>Flights are not included in the package price.</li>}
              <li>
                <strong>ACH / Zelle / Wire:</strong> no processing fee.
              </li>
              <li>
                <strong>Credit card:</strong> a {cardFeePercent}% convenience fee applies, where
                permitted by law and card network rules.
              </li>
            </ul>
          </Reveal>

          <Reveal className={styles.ctaWrap}>
            <p className={styles.ctaText}>Spots for this itinerary are limited.</p>
            <div className={styles.ctaGroup}>
              <button type="button" className={styles.cta} onClick={() => setActiveModal("book")}>
                Book Now →
              </button>
              <button type="button" className={styles.ctaSecondary} onClick={() => openAsk(title)}>
                Ask a Question
              </button>
            </div>
          </Reveal>
        </div>
      </section>

      <Modal isOpen={activeModal === "book"} onClose={() => setActiveModal(null)} title="Book This Itinerary">
        <BookingModal
          itineraryTitle={title}
          itinerarySlug={slug}
          packages={packages}
          depositDeadline={depositDeadline}
          flightsIncluded={flightsIncluded}
          cardFeePercent={cardFeePercent}
          onRequestWirePayment={openAsk}
        />
      </Modal>

      <Modal isOpen={activeModal === "ask"} onClose={() => setActiveModal(null)} title="Ask a Question">
        <InquiryModal topic={askTopic} />
      </Modal>
    </>
  );
}
