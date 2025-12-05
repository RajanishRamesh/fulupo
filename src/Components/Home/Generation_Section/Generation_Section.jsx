import React from "react";
import "./Generation_Section.css";

import icon1 from "../../../Assets/Home/Generation_Section/1.png";
import icon2 from "../../../Assets/Home/Generation_Section/2.png";
import icon3 from "../../../Assets/Home/Generation_Section/3.png";
import icon4 from "../../../Assets/Home/Generation_Section/4.png";

import SparkleIcon from "../../../Assets/Home/Generation_Section/Sparkle.png";
import BrushLine from "../../../Assets/Home/Generation_Section/Brush_Line.png";

// ⭐ Grass import
import GrassImg from "../../../Assets/Home/Generation_Section/Border.png";

export default function Generation_Section() {
  return (
    <div className="generation-wrapper">

      {/* ⭐ TOP SECTION */}
      <div className="nextgen-wrapper">

        <div className="nextgen-tag">
          <img src={SparkleIcon} alt="sparkle" className="sparkle-icon" />
          Future Innovation
        </div>

        <h2 className="nextgen-title">The Next Generation</h2>

        <img src={BrushLine} alt="underline" className="underline-img" />

        <p className="nextgen-desc">
          Introducing PRODUCER Tech - the future of unmanned retail stores.
          Revolutionary technology that will transform how customers shop and
          businesses operate.
        </p>
      </div>

      {/* ⭐ GREEN SECTION */}
      <div className="green-section">

        {/* LEFT SIDE */}
        <div className="left-box">
          <div className="eco-tag">⚡ Complete AI Ecosystem</div>

          <h3 className="producer-title">PRODUCER Tech</h3>
          <p className="producer-sub">The Future of Unmanned Stores</p>

          <p className="producer-desc">
            All four products work together as a unified ecosystem. Data flows
            seamlessly between store operations, consumer interactions, delivery
            logistics, and vendor management.
          </p>

          <button className="yellow-btn">Learn About Producer</button>
        </div>

        {/* RIGHT SIDE CARDS */}
        <div className="card-grid">

          <div className="card">
            <img src={icon1} alt="" />
            <p>Unmanned Store<br />Operations</p>
          </div>

          <div className="card">
            <img src={icon2} alt="" />
            <p>Original Dimension<br />Recognition</p>
          </div>

          <div className="card">
            <img src={icon3} alt="" />
            <p>Entity Comparison<br />Technology</p>
          </div>

          <div className="card">
            <img src={icon4} alt="" />
            <p>Automated Product<br />Retrieval</p>
          </div>

        </div>

      </div>

      {/* ⭐ GRASS BORDER BOTTOM */}
      <img src={GrassImg} alt="grass" className="grass-border" />

    </div>
  );
}
