import React from "react";
import "./Roadmap_Section.css";

import LeftImage from "../../../Assets/Home/Roadmap_Section/final.png";
import Icon1 from "../../../Assets/Home/Roadmap_Section/1.png";
import Icon2 from "../../../Assets/Home/Roadmap_Section/2.png";
import Icon3 from "../../../Assets/Home/Roadmap_Section/3.png";
import Brush from "../../../Assets/Home/Roadmap_Section/Tag.png";

export default function Roadmap() {
  return (
    <section className="roadmap-wrapper">

      <div className="left-image-box">
        <img src={LeftImage} alt="" />
      </div>

      <div className="right-content">

        {/* TITLE + UNDERLINE */}
        <h2 className="roadmap-title">Innovation Roadmap</h2>
        <img src={Brush} className="roadmap-brush" alt="" />

        <div className="steps">

          <div className="step-card">
            <div className="step-left">
              <img src={Icon1} alt="" className="step-icon" />
              <div>
                <h4 className="step-title">Current: AI Store Management</h4>
                <p className="step-desc">
                  Voice AI, Image Recognition, Smart Analytics
                </p>
              </div>
            </div>
            <span className="tag green">Live</span>
          </div>

          <div className="step-card">
            <div className="step-left">
              <img src={Icon2} alt="" className="step-icon" />
              <div>
                <h4 className="step-title">Next: Enhanced Automation</h4>
                <p className="step-desc">
                  Advanced robotics integration, <br />
                  IoT sensor 
                  networks
                </p>
              </div>
            </div>
            <span className="tag dark-green">Q2 2025</span>
          </div>

          <div className="step-card">
            <div className="step-left">
              <img src={Icon3} alt="" className="step-icon" />
              <div>
                <h4 className="step-title">Future: PRODUCER Tech</h4>
                <p className="step-desc">
                  Fully unmanned stores, autonomous <br />
                  operations
                </p>
              </div>
            </div>
            <span className="tag olive">2026</span>
          </div>

        </div>
      </div>
    </section>
  );
}
