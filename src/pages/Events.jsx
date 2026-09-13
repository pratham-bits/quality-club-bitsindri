import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  ExternalLink,
  Linkedin,
} from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";
import { upcomingEvents, pastEvents } from "../data/events";

/*
 * ============================================================
 * EVENT IMAGE GALLERY
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
 */

function NoUpcomingEvents() {
  return (
    <div className="no-upcoming-events">
      <div className="no-upcoming-icon">
        <CalendarDays size={30} />
      </div>

      <div>
        <span className="eyebrow">
          NOTHING SCHEDULED YET
        </span>

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
 * PAST EVENT CARD
 * ============================================================
 */

function PastEventCard({ event }) {
  return (
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

        {/* ==================================================
            EVENT ACTION ROW
            Date + LinkedIn
            ================================================== */}
        <div className="event-action-row">
          {event.date && (
            <div className="event-date">
              <CalendarDays size={18} />
              <span>{event.date}</span>
            </div>
          )}

          {event.linkedin && (
            <a
              href={event.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="event-linkedin"
              aria-label={`View ${event.title} on LinkedIn`}
              title="View LinkedIn post"
            >
              <Linkedin size={19} />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

/*
 * ============================================================
 * EVENTS PAGE
 * ============================================================
 */

export default function Events() {
  const [selectedYear, setSelectedYear] = useState("all");
  const [visibleCount, setVisibleCount] = useState(6);

  /*
   * Extract years automatically from event dates.
   * Example:
   * "1 February 2025" → "2025"
   */
  const availableYears = useMemo(() => {
    const years = pastEvents
      .map((event) => {
        const match = event.date?.match(/\b(20\d{2})\b/);
        return match ? match[1] : null;
      })
      .filter(Boolean);

    return [...new Set(years)].sort((a, b) => b - a);
  }, []);

  /*
   * Filter past events by selected year.
   */
  const filteredEvents = useMemo(() => {
    let events = pastEvents;

    // Filter by selected year
    if (selectedYear !== "all") {
      events = events.filter((event) => {
        const match = event.date?.match(/\b(20\d{2})\b/);
        return match?.[1] === selectedYear;
      });
    }

    // Sort latest → oldest
    return [...events].sort((a, b) => {
      const dateA = a.date ? new Date(a.date).getTime() : 0;
      const dateB = b.date ? new Date(b.date).getTime() : 0;

      return dateB - dateA;
    });
  }, [selectedYear]);

  useEffect(() => {
    setVisibleCount(6);
  }, [selectedYear]);
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
          UPCOMING EVENTS
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
          PAST EVENTS
          ====================================================== */}
      <section className="section events-section">
        <div className="container">
          <SectionHeading
            eyebrow="PAST EVENTS"
            title="Learning through experience."
          />

          {/* ==================================================
              YEAR FILTER
              ================================================== */}
          {availableYears.length > 0 && (
            <div className="event-year-filter">
              <button
                type="button"
                className={
                  selectedYear === "all"
                    ? "active"
                    : ""
                }
                onClick={() => setSelectedYear("all")}
              >
                All
              </button>

              {availableYears.map((year) => (
                <button
                  key={year}
                  type="button"
                  className={
                    selectedYear === year
                      ? "active"
                      : ""
                  }
                  onClick={() => setSelectedYear(year)}
                >
                  {year}
                </button>
              ))}
            </div>
          )}

          {/* ==================================================
              FILTERED EVENT LIST
              ================================================== */}
          <div className="event-list">
            {filteredEvents.slice(0, visibleCount).map((event) => (
              <Reveal key={event.title}>
                <PastEventCard event={event} />
              </Reveal>
            ))}
          </div>

          {visibleCount < filteredEvents.length && (
            <div className="events-view-more">
              <button
                type="button"
                onClick={() => setVisibleCount((prev) => prev + 6)}
              >
                View More
              </button>
            </div>
          )}

          {filteredEvents.length === 0 && (
            <div className="no-filtered-events">
              <CalendarDays size={28} />

              <p>
                No events found for {selectedYear}.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}