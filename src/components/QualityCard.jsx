import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";

export default function QualityCard({ icon, title, text }) {
  return (
    <Reveal>
      <article className="quality-card">
        <div className="card-icon">{icon}</div>
        <h3>{title}</h3>
        <p>{text}</p>
        <span className="card-arrow"><ArrowUpRight size={18}/></span>
      </article>
    </Reveal>
  );
}