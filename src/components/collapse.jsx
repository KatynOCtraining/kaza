import { useState } from "react";
import vectorDown from "../assets/vector-bas.svg";
import "../styles/collapse.css";

export default function Collapse({ title, description }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="collapse" id={`collapse-${title}`}>
      <div className="collapse-div" onClick={() => setOpen(!open)}>
        <div className="collapse-title">{title}</div>
        <span className={`collapse-vectorDown ${open ? "true" : ""}`}>
          <img src={vectorDown} alt="Icône flèche" />
        </span>
      </div>
      <div className={`collapse-description ${open ? "open" : ""}`}>
        {description}
      </div>
    </div>
  );
}
