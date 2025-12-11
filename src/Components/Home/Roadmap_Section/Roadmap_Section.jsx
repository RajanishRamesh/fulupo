import React from "react";
import "./Roadmap_Section.css";

// Left image
import LeftImage from "../../../Assets/Home/Roadmap_Section/FinalCircle.png";

// Icons for steps
import Icon1 from "../../../Assets/Home/Roadmap_Section/1.png";
import Icon2 from "../../../Assets/Home/Roadmap_Section/2.png";
import Icon3 from "../../../Assets/Home/Roadmap_Section/3.png";


import Brush from "../../../Assets/Home/Roadmap_Section/Tag.png";



export default function Roadmap() {
  return (
    <div className="roadmap-wrapper">

    
      <div className="left-image-box">
        <img src={LeftImage} className="main-image" alt="" />
      </div>

      {/* RIGHT CONTENT */}
      <div className="right-content">
        <h2 className="roadmap-title">Innovation Roadmap</h2>
        <img src={Brush} className="brush-underlineone" alt="" />

        <div className="steps">

          {/* STEP 1 */}
          <div className="step-card">
            <div className="step-left">
              <img src={Icon1} alt="" className="step-icon" />
              <div>
                <h4>Current: AI Store Management</h4>
                <p>Voice AI, Image Recognition, Smart Analytics</p>
              </div>
            </div>

            <span className="tag green">Live</span>
          </div>

          {/* STEP 2 */}
          <div className="step-card">
            <div className="step-left">
              <img src={Icon2} alt="" className="step-icon" />
              <div>
                <h4>Next: Enhanced Automation</h4>
                <p>Advanced robotics integration, IoT sensor networks</p>
              </div>
            </div>

            <span className="tag dark-green">Q2 2025</span>
          </div>

          {/* STEP 3 */}
          <div className="step-card">
            <div className="step-left">
              <img src={Icon3} alt="" className="step-icon" />
              <div>
                <h4>Future: PRODUCER Tech</h4>
                <p>Fully unmanned stores, dimensional recognition, autonomous operations</p>
              </div>
            </div>

            <span className="tag olive">2026</span>
          </div>

        </div>
      </div>

    </div>
  );
}
