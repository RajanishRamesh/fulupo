import React from "react";
import "../WhyFulupo/WhyFulupo.css";

import revenue from "../../../Assets/Home/WhyFulupo/Hand.png";
import waste from "../../../Assets/Home/WhyFulupo/Profit.png";
import time from "../../../Assets/Home/WhyFulupo/Waste.png";

export default function WhyFlupo() {
  return (
    <section className="why-section">

      {/* TITLE */}
      <h2 className="why-title">Why Choose Fulupo AI?</h2>
      <div className="brush"></div>

      {/* 3 FEATURES */}
      <div className="why-grid">

        {/* CARD 1 */}
        <div className="why-card">
          <div className="icon-circle">
            <img src={revenue} alt="Increase Revenue" />
          </div>
          <h3>Increase Revenue</h3>
          <p>
            AI-driven insights boost sales by up to 35% through optimized 
            inventory and customer targeting.
          </p>
        </div>

        {/* CARD 2 */}
        <div className="why-card">
          <div className="icon-circle">
            <img src={waste} alt="Reduce Waste" />
          </div>
          <h3>Reduce Waste</h3>
          <p>
            Smart waste management cuts perishables losses by 60% with 
            predictive expiry tracking.
          </p>
        </div>

        {/* CARD 3 */}
        <div className="why-card">
          <div className="icon-circle">
            <img src={time} alt="Save Time" />
          </div>
          <h3>Save Time</h3>
          <p>
            Automation handles routine tasks, freeing up 4+ hours daily for 
            strategic business growth.
          </p>
        </div>

      </div>
    </section>
  );
}

