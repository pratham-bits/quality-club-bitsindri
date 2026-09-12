import {
  ArrowUpRight,
  Instagram,
  Linkedin,
  Mail,
  Phone,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">

        {/* =====================================================
            QUALITY CLUB & IFQM BRANDING
            ===================================================== */}
        <div className="footer-brand">
          <div className="footer-brand-group">
            <Link
              to="/"
              className="footer-quality-brand"
              aria-label="Quality Club home"
            >
              <img
                src="/images/quality-club-logo.png"
                alt="Quality Club, BIT Sindri"
              />
            </Link>

            <span
              className="footer-brand-divider"
              aria-hidden="true"
            />

            <a
              href="https://ifqm.org.in/"
              target="_blank"
              rel="noreferrer"
              className="footer-ifqm-brand"
              aria-label="Indian Foundation for Quality Management"
            >
              <img
                src="/images/ifqm-logo-footer.svg"
                alt="Indian Foundation for Quality Management"
              />
            </a>
          </div>

          <p className="footer-motto">
            QUALITY | INNOVATION | EXCELLENCE
          </p>

          <p className="footer-note">
            A student initiative at BIT Sindri, developed with the support
            and guidance of IFQM.
          </p>

          {/* =================================================
              SOCIAL MEDIA LINKS
              ================================================= */}
          <div className="footer-socials">

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/company/quality-club-bit-sindri/"
              target="_blank"
              rel="noreferrer"
              aria-label="Quality Club on LinkedIn"
            >
              <Linkedin size={18} />
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/qualityclub_bit_sindri?utm_source=qr&stkn=ZnZrZWUybzdpZ280"
              target="_blank"
              rel="noreferrer"
              aria-label="Quality Club on Instagram"
            >
              <Instagram size={18} />
            </a>

            {/* Email */}
            <a
              href="mailto:qualityclub@bitsindri.ac.in"
              aria-label="Email Quality Club"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>


        {/* =====================================================
            QUICK LINKS
            ===================================================== */}
        <div>
          <h3>Quick Links</h3>

          <div className="footer-links">
            <Link to="/about">About Us</Link>
            <Link to="/team">Team</Link>
            <Link to="/events">Events</Link>
            <Link to="/faqs">FAQs</Link>
            <Link to="/contact">Contact Us</Link>
          </div>
        </div>


        {/* =====================================================
            CONNECT & CLUB LEADERSHIP
            ===================================================== */}
        <div className="footer-connect-column">

          <h3>Connect</h3>

          {/* -------------------------------------------------
              GENERAL CLUB CONTACTS
              ------------------------------------------------- */}
          <div className="footer-links">

            {/* Email */}
            <a href="mailto:qualityclub@bitsindri.ac.in">
              <Mail size={16} />
              <span>qualityclub@bitsindri.ac.in</span>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/company/quality-club-bit-sindri/"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin size={16} />
              <span>LinkedIn</span>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/qualityclub_bit_sindri?utm_source=qr&stkn=ZnZrZWUybzdpZ280"
              target="_blank"
              rel="noreferrer"
            >
              <Instagram size={16} />
              <span>Instagram</span>
            </a>

            {/* IFQM Website */}
            <a
              href="https://ifqm.org.in/"
              target="_blank"
              rel="noreferrer"
            >
              <span>IFQM Website</span>
              <ArrowUpRight size={16} />
            </a>

          </div>


          {/* =================================================
              CLUB LEADERSHIP CONTACTS

              Update this section whenever the office-bearers
              of the Quality Club change.

              Phone numbers use `tel:` links so visitors can
              directly call the respective office-bearer from
              supported mobile devices.
              ================================================= */}
          <div className="footer-leadership">

            <p className="footer-subheading">
              Club Leadership
            </p>

            <div className="footer-leadership-list">

              {/* President */}
              <a
                href="tel:+917229858439"
                className="footer-leader"
                aria-label="Call President Gajendra N. Pathak"
              >
                <Phone size={15} />

                <span>
                  <strong>President</strong>
                  <small>Gajendra N. Pathak</small>
                </span>
              </a>


              {/* Treasurer */}
              <a
                href="tel:+919142099540"
                className="footer-leader"
                aria-label="Call Treasurer Vijay Kumar Modal"
              >
                <Phone size={15} />

                <span>
                  <strong>Treasurer</strong>
                  <small>Vijay Kumar Modak</small>
                </span>
              </a>


              {/* Secretary */}
              <a
                href="tel:+917779938948"
                className="footer-leader"
                aria-label="Call Secretary Aman Rai"
              >
                <Phone size={15} />

                <span>
                  <strong>Secretary</strong>
                  <small>Aman Rai</small>
                </span>
              </a>

            </div>
          </div>

        </div>
      </div>


      {/* =======================================================
          FOOTER BOTTOM
          ======================================================= */}
      <div className="container footer-bottom">
        <span>
          © {new Date().getFullYear()} Quality Club, BIT Sindri
        </span>

        <span>
          Built with a culture of continuous improvement.
        </span>
      </div>
    </footer>
  );
}