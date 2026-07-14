import Image from "next/image";
import Reveal from "@/components/Reveal/Reveal";
import BookingOptions from "@/components/BookingOptions/BookingOptions";
import { lagosItinerary } from "@/lib/content";
import styles from "./ItineraryDetail.module.css";

export default function ItineraryDetail() {
  const {
    title,
    tag,
    summary,
    heroImage,
    heroAlt,
    gallery,
    overview,
    packages,
    phases,
    depositDeadline,
    flightsIncluded,
    paymentTerms,
    paymentContactEmail,
  } = lagosItinerary;

  const askHref = `mailto:${paymentContactEmail}?subject=${encodeURIComponent(`Question about ${title}`)}`;

  return (
    <>
      <section className={styles.hero}>
        <Image src={heroImage} alt={heroAlt} fill className={styles.heroImage} />
        <div className={styles.heroScrim} />
        <div className={styles.heroContent}>
          <span className={styles.tag}>{tag}</span>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.summary}>{summary}</p>
          <div className={styles.heroCtaGroup}>
            <a href={askHref} className={styles.cta}>
              Ask a Question
            </a>
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
          <Reveal className={styles.overview}>
            <div className={styles.overviewDestinations}>
              {overview.destinations.map((destination) => (
                <span key={destination} className={styles.overviewDestination}>
                  {destination}
                </span>
              ))}
            </div>
            <h2 className={styles.overviewDuration}>{overview.duration}</h2>
            <p className={styles.overviewBreakdown}>({overview.durationBreakdown})</p>
            <p className={styles.overviewDeposit}>{overview.depositPrompt}</p>
          </Reveal>

          <Reveal className={styles.bookingSection}>
            <BookingOptions
              packages={packages}
              depositDeadline={depositDeadline}
              flightsIncluded={flightsIncluded}
              paymentContactEmail={paymentContactEmail}
            />
          </Reveal>

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

          <Reveal className={styles.termsBox}>
            <h3 className={styles.termsTitle}>Payment Plan Terms</h3>
            <ul className={styles.termsList}>
              {paymentTerms.map((term) => (
                <li key={term}>{term}</li>
              ))}
            </ul>
          </Reveal>

          <Reveal className={styles.ctaWrap}>
            <p className={styles.ctaText}>Spots for this itinerary are limited.</p>
            <div className={styles.ctaGroup}>
              <a href={askHref} className={styles.cta}>
                Ask a Question
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
