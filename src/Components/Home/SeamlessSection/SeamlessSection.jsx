import React from "react";
import "../SeamlessSection/SeamlessSection.css";

import BG from "../../../Assets/SeamlessSection/Bg.jpg";
import SparkIcon from "../../../Assets/SeamlessSection/black.png";
import PillIcon from "../../../Assets/SeamlessSection/Yello_Star.png";




function SeamlessSection() {
  return (
    <div
      className="seamless-section"
      style={{ backgroundImage: `url(${BG})` }}
    >
      {/* OVERLAY */}
      <div className="overlay"></div>

      <div className="seamless-content">

        {/* TOP BADGE */}
        <div className="seamless-badge">
          <img src={SparkIcon} alt="spark-icon" />
          <span>Complete AI Ecosystem</span>
        </div>

        {/* TITLE */}
        <h2 className="seamless-title">Seamless Integration</h2>
        <div className="yellow-underline"></div>

        {/* SUBTEXT */}
        <p className="seamless-desc">
          All four products work together as a unified ecosystem. Data flows
          seamlessly between store operations, consumer interactions, delivery
          logistics, and vendor management.
        </p>

        {/* FEATURE PILLS */}
        <div className="seamless-pill-box">
          <div className="pill">
            <span className="pill-slug">Real-time Sync</span>
            <img src={PillIcon} alt="" />
            <span className="pill-slug">Single Login</span>
            <img src={PillIcon} alt="" />
            <span  className="pill-slug">Unified Dashboard</span>
            <img src={PillIcon} alt="" />
            <span className="pill-slug">Cross-Platform Data</span>
            <img src={PillIcon} alt="" />
            <span  className="pill-slug">AI-Powered Insights</span>
          </div>
        </div>


      </div>
    </div>
  );
}

export default SeamlessSection;
