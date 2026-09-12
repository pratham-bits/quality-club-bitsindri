import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";
import FacultyLeaderCard from "../components/FacultyLeaderCard";
import TeamMemberCard from "../components/TeamMemberCard";

import { facultyLeaders } from "../data/faculty";
import { teamMembers, teamYear } from "../data/team";
import { coreMembers } from "../data/coreMembers";
import { motion } from "framer-motion";

export default function Team() {
  return (
    <>
      {/* =====================================================
          PAGE HERO
          ===================================================== */}
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">OUR TEAM</span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Meet the team.
          </motion.h1>

          <p>
            Faculty guidance and student leadership working
            together to build a culture of quality, innovation
            and continuous improvement.
          </p>
        </div>
      </section>

      {/* =====================================================
          FACULTY LEADERSHIP
          ===================================================== */}
      <section className="section faculty-section">
        <div className="container">
          <SectionHeading
            eyebrow="FACULTY LEADERSHIP"
            title="Guided by experience. Driven by students."
            text="The Quality Club operates under the guidance of faculty leaders who support its vision, activities and continued development."
          />

          <div className="faculty-grid">
            {facultyLeaders.map((leader) => (
              <Reveal key={leader.designation}>
                <FacultyLeaderCard leader={leader} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          STUDENT EXECUTIVE COMMITTEE
          
          All student office bearers are presented together
          as one unified committee. There is intentionally no
          visual separation based on designation or function.
          ===================================================== */}
      <section className="section student-team-section">
        <div className="container">
          <div className="team-section-heading">
            <div>
              <span className="eyebrow">STUDENT LEADERSHIP</span>

              <h2>Post Bearers</h2>
            </div>

            <div className="team-year-badge">
              {teamYear}
            </div>
          </div>

          <p className="team-section-intro">
            The final year students as the leadership team responsible for driving
            the Quality Club&apos;s activities, initiatives and
            engagement throughout the academic year.
          </p>

          {/* =================================================
              ALL STUDENT OFFICE BEARERS
              
              Every member uses the same card design regardless
              of their position or functional responsibility.
              ================================================= */}
          <div className="student-team-grid">
            {teamMembers.map((member) => (
              <Reveal
                key={`${member.designation}-${member.name}`}
              >
                <TeamMemberCard member={member} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>\

      {/* =====================================================
          CORE MEMBERS
          ===================================================== */}
      <section className="section core-members-section">
        <div className="container">
          <div className="team-section-heading">
            <div>
              <span className="eyebrow">CORE TEAM</span>

              <h2>Core Members</h2>
            </div>

            <div className="team-year-badge">
              2026-27
            </div>
          </div>

          <p className="team-section-intro">
            Pre-final year students forming the core team of the
            Quality Club and contributing to its initiatives,
            activities and continuous development.
          </p>

          <div className="student-team-grid">
            {coreMembers.map((member) => (
              <Reveal
                key={`${member.name}-${member.designation}`}
              >
                <TeamMemberCard member={member} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}