import {
  ArrowRight,
  CheckCircle2,
  Factory,
  Gauge,
  Lightbulb,
  ShieldCheck,
} from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SectionHeading from "../components/SectionHeading";
import QualityCard from "../components/QualityCard";
import Reveal from "../components/Reveal";
import { qualityConcepts } from "../data/qualityConcepts";
import { siteConfig } from "../data/site";

const activities = [
  {
    icon: <Factory />,
    title: "Industry Exposure",
    text: "Connect classroom learning with real industry practices and industry-inspired tasks.",
  },
  {
    icon: <Gauge />,
    title: "Quality Tools",
    text: "Build practical understanding of standardization, root-cause analysis, Pareto and process mapping.",
  },
  {
    icon: <ShieldCheck />,
    title: "SOPs & Audits",
    text: "Learn process discipline, safety, compliance and system improvement.",
  },
  {
    icon: <Lightbulb />,
    title: "Training & Learning",
    text: "Explore structured learning, industry training, certifications, case studies and challenges.",
  },
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-orb orb-one" />
        <div className="hero-orb orb-two" />

        <div className="container hero-inner">
          <motion.div
            className="hero-copy"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75 }}
          >
            <span className="eyebrow">QUALITY CLUB · BIT SINDRI</span>

            <h1>
              Building a culture of <span>Quality.</span>
            </h1>

            <p>
              Empowering students with practical quality practices, industry
              exposure, and a mindset of continuous improvement.
            </p>

            <div className="hero-actions">
              <Link className="btn primary" to="/about">
                Discover Quality Club <ArrowRight size={18} />
              </Link>

              <a
                className="btn secondary"
                href={siteConfig.joinFormUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Join Us
              </a>
            </div>
          </motion.div>

          <motion.div
            className="hero-logo-card"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <div className="hero-logo-glow" />

            <img
              src="/images/quality-club-logo.png"
              alt="Quality Club BIT Sindri logo"
            />

            <span>QUALITY · INNOVATION · EXCELLENCE</span>
          </motion.div>
        </div>
      </section>

      <section className="section intro-section">
        <div className="container two-column">
          <Reveal>
            <span className="eyebrow">WHAT IS THE QUALITY CLUB?</span>

            <h2>From classroom concepts to real-world quality thinking.</h2>
          </Reveal>

          <Reveal>
            <p className="lead">
            Quality is more than a concept in a textbook, it is a way of thinking. The Quality Club at BIT Sindri, initiated by IFQM, gives students an opportunity to explore this mindset through practical activities, problem-solving, and real-world examples.
            </p>

            <Link className="text-link" to="/about">
              Learn more about us <ArrowRight size={17} />
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="section soft-section">
        <div className="container">
          <SectionHeading
            eyebrow="WHAT WE DO"
            title="Practical learning for industry readiness."
            text="The club focuses on quality, discipline, innovation and continuous improvement through practical, industry-aligned learning."
          />

          <div className="card-grid four">
            {activities.map((item) => (
              <QualityCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="QUALITY TOOLKIT"
            title="Think systematically. Improve continuously."
            text="Explore the concepts that shape the club's learning approach."
          />

          <div className="concept-grid">
            {qualityConcepts.slice(0, 8).map(([title, text], i) => (
              <Reveal key={title}>
                <article className="concept-card">
                  <span>0{i + 1}</span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      
       <section className="section partnership-section">
        <div className="container partnership">
          <Reveal>
            <span className="eyebrow">IN COLLABORATION WITH</span>

            <h2>Industry-aligned learning with IFQM.</h2>

            <p>
              Through IFQM, the Quality Club gets guidance from quality experts,
              exposure to global standards, industry-aligned methods and
              frameworks, and professional credibility.
            </p>

            <a
              className="btn primary"
              href={siteConfig.links.ifqm}
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit IFQM <ArrowUpRightIcon />
            </a>
          </Reveal>
        </div>
      </section>

      <section className="section join-section" id="join">
        <div className="container join-box">
          <div>
            <span className="eyebrow">READY TO LEARN & GROW?</span>

            <h2>Become part of the Quality Club.</h2>

            <p>
              Build a professional mindset that goes beyond engineering
              fundamentals.
            </p>
          </div>

          <a
            className="btn white"
            href={siteConfig.joinFormUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Join Us <ArrowRight size={18} />
          </a>
        </div>
      </section>
    </>
  );
}

function ArrowUpRightIcon() {
  return (
    <ArrowRight
      size={18}
      style={{ transform: "rotate(-45deg)" }}
    />
  );
}