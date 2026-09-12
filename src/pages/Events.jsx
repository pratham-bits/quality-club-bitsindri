import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  ExternalLink,
} from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";
import { upcomingEvents, pastEvents } from "../data/events";


/*
 * ============================================================
 * EVENT IMAGE GALLERY
 * ============================================================
 *
 * Used only for past events that contain multiple images.
 *
 * - One image  → displayed as a static image.
 * - Multiple images → slideshow with arrows and dots.
 * ============================================================
 */

function EventImageGallery({ images, title }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const hasMultipleImages = images.length > 1;

  useEffect(() => {
    if (!hasMultipleImages) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length, hasMultipleImages]);

  const previousImage = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + images.length) % images.length
    );
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  if (!images.length) {
    return null;
  }

  return (
    <div
      className={`event-gallery ${!hasMultipleImages ? "single-image" : ""
        }`}
    >
      <motion.img
        key={images[currentIndex]}
        src={images[currentIndex]}
        alt={`${title} event`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.35 }}
      />

      {hasMultipleImages && (
        <>
          <button
            type="button"
            className="event-gallery-button event-gallery-prev"
            onClick={previousImage}
            aria-label="Previous event image"
          >
            <ArrowLeft size={19} />
          </button>

          <button
            type="button"
            className="event-gallery-button event-gallery-next"
            onClick={nextImage}
            aria-label="Next event image"
          >
            <ArrowRight size={19} />
          </button>

          <div className="event-gallery-dots">
            {images.map((_, index) => (
              <button
                key={index}
                type="button"
                className={`event-gallery-dot ${index === currentIndex ? "active" : ""
                  }`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}


/*
 * ============================================================
 * UPCOMING EVENT CARD
 * ============================================================
 *
 * Displays:
 * - Event poster
 * - Event title
 * - Date
 * - Description
 * - Highlights
 * - Registration button
 *
 * The component is data-driven so future events can be added
 * from `src/data/events.js` without changing this component.
 * ============================================================
 */

function UpcomingEventCard({ event }) {
  return (
    <article className="upcoming-event-card">
      <div className="upcoming-event-poster">
        <img
          src={event.poster}
          alt={`${event.title} poster`}
        />
      </div>

      <div className="upcoming-event-content">
        <span className="upcoming-event-label">
          UPCOMING EVENT
        </span>

        <h3>{event.title}</h3>

        {event.date && (
          <div className="upcoming-event-date">
            <CalendarDays size={18} />
            <span>{event.date}</span>
          </div>
        )}

        <p className="upcoming-event-description">
          {event.description}
        </p>

        {event.highlights?.length > 0 && (
          <ul className="upcoming-event-highlights">
            {event.highlights.map((highlight) => (
              <li key={highlight}>
                <CheckCircle2 size={18} />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        )}

        {event.registrationLink && (
          <a
            href={event.registrationLink}
            target="_blank"
            rel="noopener noreferrer"
            className="upcoming-event-register"
          >
            Register Now
            <ExternalLink size={17} />
          </a>
        )}
      </div>
    </article>
  );
}


/*
 * ============================================================
 * NO UPCOMING EVENTS STATE
 * ============================================================
 *
 * Displayed automatically when `upcomingEvents` is empty.
 *
 * This is preferable to leaving the section blank because it
 * communicates that the club is active while there is simply
 * no event currently scheduled.
 * ============================================================
 */

function NoUpcomingEvents() {
  return (
    <div className="no-upcoming-events">
      <div className="no-upcoming-icon">
        <CalendarDays size={30} />
      </div>

      <div>
        <span className="eyebrow">NOTHING SCHEDULED YET</span>

        <h3>No upcoming events at the moment.</h3>

        <p>
          We are currently planning our next quality-focused
          activities and learning initiatives. Stay connected
          with the Quality Club for upcoming announcements.
        </p>
      </div>
    </div>
  );
}


/*
 * ============================================================
 * EVENTS PAGE
 * ============================================================
 */

export default function Events() {
  return (
    <>
      {/* ======================================================
          PAGE HERO
          ====================================================== */}
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">EVENTS & ACTIVITIES</span>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Learn. Participate. Improve.
          </motion.h1>

          <p>
            Explore upcoming initiatives and the sessions,
            outreach programmes, and quality-focused activities
            conducted by the Quality Club.
          </p>
        </div>
      </section>


      {/* ======================================================
          UPCOMING EVENTS SECTION

          IMPORTANT:
          The section automatically switches between:
          1. Upcoming event cards, when events are available.
          2. Professional empty state, when there are none.
          ====================================================== */}
      <section className="section upcoming-events-section">
        <div className="container">
          <SectionHeading
            eyebrow="WHAT'S NEXT"
            title="Upcoming events."
          />

          {upcomingEvents.length > 0 ? (
            <div className="upcoming-events-list">
              {upcomingEvents.map((event) => (
                <Reveal key={event.title}>
                  <UpcomingEventCard event={event} />
                </Reveal>
              ))}
            </div>
          ) : (
            <Reveal>
              <NoUpcomingEvents />
            </Reveal>
          )}
        </div>
      </section>


      {/* ======================================================
          PAST EVENTS SECTION
          ====================================================== */}
      <section className="section events-section">
        <div className="container">
          <SectionHeading
            eyebrow="PAST EVENTS"
            title="Learning through experience."
          />

          <div className="event-list">
            {pastEvents.map((event) => (
              <Reveal key={event.title}>
                <article className="event-card">
                  <EventImageGallery
                    images={event.images}
                    title={event.title}
                  />

                  <div className="event-content">
                    <h3>{event.title}</h3>

                    <div className="event-accent" />

                    <h4>{event.contentHeading}</h4>

                    <p className="event-description">
                      {event.description}
                    </p>

                    <ul className="event-highlights">
                      {event.highlights.map((highlight) => (
                        <li key={highlight}>
                          <CheckCircle2 size={18} />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}