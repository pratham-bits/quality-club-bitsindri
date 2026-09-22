import { useEffect } from "react";
import { CalendarDays, ExternalLink, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

function isPopupActive(event) {
    if (!event?.popupstartDate || !event?.popupendDate) {
        return false;
    }

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const [startYear, startMonth, startDay] = event.popupstartDate
        .split("-")
        .map(Number);

    const [endYear, endMonth, endDay] = event.popupendDate
        .split("-")
        .map(Number);

    const startDate = new Date(startYear, startMonth - 1, startDay);
    const endDate = new Date(endYear, endMonth - 1, endDay);

    return today >= startDate && today <= endDate;
}

export default function OngoingEventPopup({ event, onClose }) {
    const navigate = useNavigate();

    useEffect(() => {
        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = "";
        };
    }, []);

    if (!isPopupActive(event)) {
        return null;
    }

    const handleViewEvent = () => {
        onClose();

        navigate("/events");

        setTimeout(() => {
            document
                .getElementById("ongoing-events")
                ?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
        }, 150);
    };

    return (
        <div className="ongoing-popup-overlay" onClick={onClose}>
            <div
                className="ongoing-popup"
                role="dialog"
                aria-modal="true"
                aria-labelledby="ongoing-popup-title"
                onClick={(event) => event.stopPropagation()}
            >
                <button
                    type="button"
                    className="ongoing-popup-close"
                    onClick={onClose}
                    aria-label="Close popup"
                >
                    <X size={20} />
                </button>

                <div className="ongoing-popup-image">
                    <img
                        src={event.images}
                        alt={`${event.title} poster`}
                    />
                </div>

                <div className="ongoing-popup-content">
                    <span className="ongoing-popup-label">
                        ONGOING EVENT
                    </span>

                    <h2 id="ongoing-popup-title">
                        {event.title}
                    </h2>

                    <p className="ongoing-popup-description">
                        Nationwide Quiz Competition
                        <br />
                        General Aptitude + Quality Management Concepts
                    </p>

                    {event.date && (
                        <div className="ongoing-popup-date">
                            <CalendarDays size={17} />
                            <span>
                                Event Date: <strong>{event.date}</strong>
                            </span>
                        </div>
                    )}

                    {event.registrationDeadline && (
                        <div className="ongoing-popup-deadline">
                            <span>Last Date to Register:</span>
                            <strong>{event.registrationDeadline}</strong>
                        </div>
                    )}

                    <div className="ongoing-popup-actions">
                        <button
                            type="button"
                            className="ongoing-popup-view"
                            onClick={handleViewEvent}
                        >
                            View Event
                            <ExternalLink size={16} />
                        </button>

                        {event.registrationLink && (
                            <a
                                href={event.registrationLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="ongoing-popup-register"
                            >
                                Register Now
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}