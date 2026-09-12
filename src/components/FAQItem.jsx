import { useState } from "react";
import { Plus } from "lucide-react";

export default function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`faq-item ${open ? "open" : ""}`}>
      <button onClick={() => setOpen(!open)} aria-expanded={open}>
        <span>{question}</span>
        <span className="faq-plus"><Plus size={19}/></span>
      </button>
      <div className="faq-answer">
        <p>{answer}</p>
      </div>
    </div>
  );
}