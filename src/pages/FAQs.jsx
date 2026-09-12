import { motion } from "framer-motion";
import SectionHeading from "../components/SectionHeading";
import FAQItem from "../components/FAQItem";
import { faqs } from "../data/faqs";

export default function FAQs() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">FAQs</span>
          <motion.h1 initial={{opacity:0,y:25}} animate={{opacity:1,y:0}}>Questions, answered.</motion.h1>
          <p>Some common questions students may have about the Quality Club.</p>
        </div>
      </section>

      <section className="section">
        <div className="container faq-wrap">
          <SectionHeading eyebrow="COMMON QUESTIONS" title="Everything you need to know." />
          <div className="faq-list">
            {faqs.map(item => <FAQItem key={item.question} {...item} />)}
          </div>
        </div>
      </section>
    </>
  );
}