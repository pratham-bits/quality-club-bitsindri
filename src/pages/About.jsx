import {
  CheckCircle2,
  Factory,
  ShieldCheck,
  Target,
  Users,
  Workflow,
} from "lucide-react";
import { motion } from "framer-motion";
import SectionHeading from "../components/SectionHeading";
import Reveal from "../components/Reveal";
import FacultyLeaderCard from "../components/FacultyLeaderCard";
import { facultyLeaders } from "../data/faculty";

const mission = [
  "Teach quality concepts in a practical way.",
  "Connect learning with industry practices.",
  "Promote safety and continuous improvement.",
  "Build leadership and responsibility.",
];

const activities = [
  [
    "Industry Linkage & Real Exposure",
    "Work with industry-inspired tasks and goals to understand what companies actually expect.",
  ],
  [
    "Quality Concepts & Tools",
    "Learn standardization, First Time Right, continuous improvement, Cost of Poor Quality and practical quality tools.",
  ],
  [
    "SOPs, Safety & Process Audits",
    "Understand standard operating procedures, consistency, risk prevention, compliance and system improvement.",
  ],
  [
    "Industry Training & Certifications",
    "Explore training and certifications in areas such as 5S, Lean and Six Sigma.",
  ],
  [
    "Case Studies & Industrial Visits",
    "Analyze real-life cases and participate in industrial visits, competitions and challenges.",
  ],
];

export default function About() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">ABOUT THE CLUB</span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Quality is a way of thinking.
          </motion.h1>
          <p>
            Understanding standards, solving problems systematically, and
            improving every day.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container two-column">
          <SectionHeading
            centered={false}
            eyebrow="OUR STORY"
            title="A student initiative with an industry-oriented purpose."
          />
          <Reveal>
            <p className="lead">
              The Quality Club at BIT Sindri was started with the support of the
              Indian Foundation for Quality Management (IFQM). Its purpose is to
              bridge the gap between college learning and industry expectations
              by introducing students to practical quality concepts and
              professional practices.
            </p>
            <p>
              The club's material emphasizes the importance of standards,
              documentation, process discipline, quality checks, safety and
              continuous improvement in preparing students for professional
              environments.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section about-bitsindri-section">
        <div className="container">
          <div className="about-bitsindri-grid">
            <Reveal>
              <div className="about-bitsindri-content">
                <span className="eyebrow">ABOUT THE INSTITUTE</span>

                <h2>About BIT Sindri</h2>

                <div className="section-accent" />

                <p>
                  Birla Institute of Technology, Sindri (BIT Sindri), is one of the
                  premier engineering institutions in Jharkhand, known for its strong
                  academic foundation, technical education, and industry-oriented
                  learning environment.
                </p>

                <p>
                  The institute has played an important role in developing skilled
                  engineers and professionals by combining theoretical knowledge with
                  practical exposure, innovation, research, and professional values.
                </p>

                <p>
                  With a vibrant academic environment and a strong emphasis on
                  excellence, BIT Sindri provides students with opportunities to
                  learn, collaborate, explore new ideas, and prepare themselves for
                  the challenges of the professional world.
                </p>

                <a
                  className="text-link"
                  href="https://www.bitsindri.ac.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit BIT Sindri <span>↗</span>
                </a>
              </div>
            </Reveal>

            <Reveal>
              <div className="about-bitsindri-logo">
                <img
                  src="/images/bit-sindri-logo.png"
                  alt="Birla Institute of Technology, Sindri"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>
      <section className="section soft-section">
        <div className="container">
          <SectionHeading
            eyebrow="VISION & MISSION"
            title="What we aim to build."
          />
          <div className="vision-grid">
            <Reveal>
              <article className="vision-card featured">
                <div className="vision-card-heading">
                  <Target />
                  <span className="eyebrow">VISION</span>
                </div>

                <h3>
                  A strong culture of quality, discipline, innovation and
                  excellence.
                </h3>

                <p>Preparing students to meet global standards.</p>
              </article>
            </Reveal>
            <Reveal>
              <article className="vision-card">
                <div className="vision-card-heading">
                  <Workflow />
                  <span className="eyebrow">MISSION</span>
                </div>

                <ul>
                  {mission.map((item) => (
                    <li key={item}>
                      <CheckCircle2 size={18} />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="WHAT WE DO"
            title="Learning that moves beyond theory."
          />
          <div className="activity-list">
            {activities.map(([title, text], i) => (
              <Reveal key={title}>
                <article className="activity-row">
                  <div className="activity-number">0{i + 1}</div>
                  <div>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section ifqm-section">
        <div className="container two-column">
          <Reveal>
            <span className="eyebrow">ROLE OF IFQM</span>
            <h2>Professional guidance. Industry relevance.</h2>
          </Reveal>
          <Reveal>
            <p className="lead">
              IFQM provides the club with guidance from quality experts,
              exposure to global standards, industry-aligned methods and
              frameworks, and professional credibility.
            </p>
            <a
              className="text-link"
              href="https://ifqm.org.in/"
              target="_blank"
              rel="noreferrer"
            >
              Explore IFQM <span>↗</span>
            </a>
          </Reveal>
        </div>
      </section>

      {/* =====================================================
          FACULTY GUIDANCE
          ===================================================== */}
      <section className="section faculty-section">
        <div className="container">
          <SectionHeading
            eyebrow="FACULTY GUIDANCE"
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
    </>
  );
}
