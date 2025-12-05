import React from "react";
import "./Revolution_Section.css";

import BgImage from "../../../Assets/Home/Revolution_Section/bg.jpg";
import Brush from "../../../Assets/Home/Revolution_Section/Brush.png";
import Icon from "../../../Assets/Home/Revolution_Section/icon/Sparkle.ico";

export default function RevolutionSection() {
  return (
    <section
      className="revolution-wrapper"
      style={{ backgroundImage: `url(${BgImage})` }}
    >
      <div className="overlay"></div>

      <div className="revolution-content">

        {/* TOP PILL */}
        <div className="revolution-pill">
          <img src={Icon} alt="icon" />
          Complete AI Ecosystem
        </div>

        {/* TITLE */}
        <h2 className="revolution-title">Ready for AI Revolution?</h2>

        {/* YELLOW UNDERLINE BRUSH */}
        <img src={Brush} alt="underline" className="revolution-underline" />

        {/* SUBTEXT */}
        <p className="revolution-desc">
          Join thousands of retailers already using Fulupo to revolutionize
          their operations. Experience the power of Voice AI, Image Recognition,
          and Smart Analytics today.
        </p>

        {/* BUTTONS */}
        <div className="revolution-buttons">
          <button className="btn-green">Consumer Login</button>
          <button className="btn-outline">Request Store Demo</button>
        </div>
      </div>
    </section>
  );
}
