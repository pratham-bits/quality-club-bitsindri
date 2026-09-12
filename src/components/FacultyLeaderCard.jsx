import { Linkedin, Mail } from "lucide-react";

export default function FacultyLeaderCard({ leader }) {
  const hasLinkedin = Boolean(leader.linkedin);
  const hasEmail = Boolean(leader.email);

  return (
    <article className="faculty-card">
      <div className="faculty-photo-wrap">
        {leader.image ? (
          <img
            src={leader.image}
            alt={`${leader.name} - ${leader.designation}`}
            className="faculty-photo"
          />
        ) : (
          <div className="faculty-photo-placeholder">
            <span>PHOTO</span>
            <small>Coming Soon</small>
          </div>
        )}
      </div>

      <div className="faculty-info">
        <span className="faculty-designation">
          {leader.designation}
        </span>

        <h3>
          {leader.name || "Faculty Member"}
        </h3>

        {(leader.department || leader.institute) && (
          <p className="faculty-affiliation">
            {leader.department}
            {leader.department && leader.institute ? " · " : ""}
            {leader.institute}
          </p>
        )}

        {(hasLinkedin || hasEmail) && (
          <div className="faculty-socials">
            {hasLinkedin && (
              <a
                href={leader.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${leader.name} on LinkedIn`}
              >
                <Linkedin size={17} />
              </a>
            )}

            {hasEmail && (
              <a
                href={`mailto:${leader.email}`}
                aria-label={`Email ${leader.name}`}
              >
                <Mail size={17} />
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}