import React from "react";
import "./WhyFulupo.css";

import revenue from "../../../Components/Common/1.png";
import waste from "../../../Components/Common/2.png";
import time from "../../../Components/Common/3.png";

export default function WhyFulupo() {
  return (
    <section className="why-wrapper">

      {/* TITLE */}
      <h2 className="why-title">Why Choose Fulupo AI?</h2>

      {/* UNDERLINE BELOW TITLE */}
      <div className="why-underline"></div>

      {/* GRID */}
      <div className="why-grid">

        <WhyCard
          icon={revenue}
          title="Increase Revenue"
          text="AI-driven insights boost sales by up to 35% through optimized inventory and customer targeting."
        />

        <WhyCard
          icon={waste}
          title="Reduce Waste"
          text="Smart waste management cuts perishables losses by 60% with predictive expiry tracking."
        />

        <WhyCard
          icon={time}
          title="Save Time"
          text="Automation handles routine tasks, freeing up 4+ hours daily for strategic business growth."
        />

      </div>
    </section>
  );
}

function WhyCard({ icon, title, text }) {
  return (
    <div className="why-card">
      <div className="icon-circle">
        <img src={icon} alt={title} />
      </div>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}
