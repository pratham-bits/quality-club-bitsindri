import { Linkedin, Mail } from "lucide-react";

export default function TeamMemberCard({ member }) {
  const hasLinkedin = Boolean(member.linkedin);
  const hasEmail = Boolean(member.email);

  return (
    <article className="student-team-card">
      {/* =====================================================
          FLOATING PROFILE PHOTO
          ===================================================== */}
      <div className="student-photo-frame">
        <div className="student-photo-wrap">
          {member.image ? (
            <img
              src={member.image}
              alt={`${member.name} - ${member.designation}`}
              className="student-team-photo"
            />
          ) : (
            <div className="student-photo-placeholder">
              <span>PHOTO</span>
              <small>Coming Soon</small>
            </div>
          )}
        </div>
      </div>

      {/* =====================================================
          MEMBER INFORMATION
          ===================================================== */}
      <div className="student-team-info">
        <h3>{member.name || "Team Member"}</h3>

        <p className="student-designation">
          {member.designation}
        </p>

        {/* ===================================================
            SOCIAL LINKS
            =================================================== */}
        {(hasLinkedin || hasEmail) && (
          <div className="student-socials">
            {hasLinkedin && (
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${member.name} on LinkedIn`}
              >
                <Linkedin size={16} />
              </a>
            )}

            {hasEmail && (
              <a
                href={`mailto:${member.email}`}
                aria-label={`Email ${member.name}`}
              >
                <Mail size={16} />
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}