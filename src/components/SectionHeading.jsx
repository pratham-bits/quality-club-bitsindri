import { motion } from "framer-motion";

export default function SectionHeading({ eyebrow, title, text, centered = true }) {
  return (
    <motion.div
      className={`section-heading ${centered ? "centered" : ""}`}
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55 }}
    >
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </motion.div>
  );
}