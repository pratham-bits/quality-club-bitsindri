import { Mail, Linkedin, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import Reveal from "../components/Reveal";

export default function Contact() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">GET IN TOUCH</span>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>Let&apos;s connect.</motion.h1>
          <p>Have a question, collaboration idea or want to know more about the club?</p>
        </div>
      </section>

      <section className="section">
        <div className="container contact-grid">
          <Reveal>
            <div>
              <span className="eyebrow">CONTACT US</span>
              <h2>Reach out to the Quality Club, BIT Sindri.</h2>
              <p className="lead">For official queries and collaboration, use the contact details provided here.</p>
            </div>
          </Reveal>

          <Reveal>
            <div className="contact-cards">
              <a className="contact-card" href="mailto:qualityclub@bitsindri.ac.in">
                <Mail />
                <div><span>Email</span><strong>qualityclub@bitsindri.ac.in</strong></div>
                <ArrowUpRight />
              </a>
              <a className="contact-card" href="https://www.linkedin.com/company/quality-club-bit-sindri/" target="_blank" rel="noreferrer">
                <Linkedin />
                <div><span>LinkedIn</span><strong>Quality Club, BIT Sindri</strong></div>
                <ArrowUpRight />
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}