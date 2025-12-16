import React from "react";
import "./SeamlessSection.css";

import BG from "../../../Assets/SeamlessSection/bg.jpg";
import SparkIcon from "../../../Assets/SeamlessSection/black.png";
import PillIcon from "../../../Assets/SeamlessSection/Yello_Star.png";

export default function SeamlessSection() {
  return (
    <section
      className="seamless-section"
      style={{ backgroundImage: `url(${BG})` }}
    >
      {/* OVERLAY */}
      <div className="seamless-overlay"></div>

      <div className="seamless-content">

        {/* BADGE */}
        <div className="seamless-badge">
          <img src={SparkIcon} alt="" />
          <span>Complete AI Ecosystem</span>
        </div>

        {/* TITLE */}
        <h2 className="seamless-title">Seamless Integration</h2>

        {/* UNDERLINE (TITLE KEELA) */}
        <div className="seamless-underline"></div>

        {/* DESCRIPTION */}
        <p className="seamless-desc">
          All four products work together as a unified ecosystem. Data flows
          seamlessly between store operations, consumer interactions, delivery
          logistics, and vendor management.
        </p>

        {/* MOBILE / TABLET PILLS */}
        <div className="seamless-pill-box">
          <Pill text="Real-time Sync" icon={PillIcon} />
          <Pill text="Single Login" icon={PillIcon} />
          <Pill text="Unified Dashboard" icon={PillIcon} />
          <Pill text="Cross-Platform Data" icon={PillIcon} />
          <Pill text="AI-Powered Insights" icon={PillIcon} />
        </div>

        {/* DESKTOP PILLS */}
        <div className="seamless-pill-box-desktop">
          <div className="pill-row">
            <span>Real-time Sync</span>
            <img src={PillIcon} alt="" />
            <span>Single Login</span>
            <img src={PillIcon} alt="" />
            <span>Unified Dashboard</span>
            <img src={PillIcon} alt="" />
            <span>Cross-Platform Data</span>
            <img src={PillIcon} alt="" />
            <span>AI-Powered Insights</span>
          </div>
        </div>

      </div>
    </section>
  );
}

function Pill({ text, icon }) {
  return (
    <div className="pill">
      <img src={icon} alt="" />
      <span>{text}</span>
    </div>
  );
}
