import React from "react";
import "./Generation_Section.css";

import icon1 from "../../../Assets/Home/Generation_Section/1.png";
import icon2 from "../../../Assets/Home/Generation_Section/2.png";
import icon3 from "../../../Assets/Home/Generation_Section/3.png";
import icon4 from "../../../Assets/Home/Generation_Section/4.png";

import SparkleIcon from "../../../Assets/Home/Generation_Section/Sparkle.png";

export default function Generation_Section() {
  return (
    <section id="future" className="generation-wrapper">

      {/* ================= TOP SECTION ================= */}
      <div className="nextgen-wrapper">

        {/* TAG */}
        <div className="nextgen-tag">
          <img src={SparkleIcon} alt="sparkle" />
          Future Innovation
        </div>

        {/* TITLE */}
        <h2 className="nextgen-title">The Next Generation</h2>

        {/* UNDERLINE – TITLE KEELA */}
        <div className="nextgen-underline"></div>

        {/* DESCRIPTION */}
        <p className="nextgen-desc">
          Introducing PRODUCER Tech – the future of unmanned retail stores.
          Revolutionary technology that will transform how customers shop and
          businesses operate.
        </p>
      </div>

      {/* ================= GREEN SECTION ================= */}
      <div className="green-section">

        {/* LEFT */}
        <div className="left-box">
          <div className="eco-tag">
            <img src={SparkleIcon} alt="sparkle" />
            Complete AI Ecosystem
          </div>

          <h1 className="producer-title">PRODUCER Tech</h1>
          <p className="producer-sub">The Future of Unmanned Stores</p>

          <p className="producer-desc">
            All four products work together as a unified ecosystem. Data flows
            seamlessly between store operations, consumer interactions, delivery
            logistics, and vendor management.
          </p>

          <button className="yellow-btn">Learn About Producer</button>
        </div>

        {/* RIGHT CARDS */}
        <div className="card-grid">
          <Card img={icon1} text="Unmanned Store Operations" />
          <Card img={icon2} text="Original Dimension Recognition" />
          <Card img={icon3} text="Entity Comparison Technology" />
          <Card img={icon4} text="Automated Product Retrieval" />
        </div>

      </div>
    </section>
  );
}

function Card({ img, text }) {
  return (
    <div className="card">
      <img src={img} alt="" />
      <p>{text}</p>
    </div>
  );
}
