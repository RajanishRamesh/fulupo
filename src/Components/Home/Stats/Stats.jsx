import React from "react";
import "./Stats.css";

import TargetIcon from "../../../Assets/Stats/Images/1.png";
import FeaturesIcon from "../../../Assets/Stats/Images/2.png";
import BoxIcon from "../../../Assets/Stats/Images/3.png";

function StatsSection() {
  return (
    <div className="stats-wrapper">
      <div className="stats-container">

        {/* Stat 1 */}
        <div className="stat-item">
          <div className="stat-icon-box">
            <img src={TargetIcon} alt="" />
          </div>
          <div className="stat-content">
            <h2>1M+</h2>
            <p>Target Stores</p>
          </div>
        </div>

        {/* Stat 2 */}
        <div className="stat-item">
          <div className="stat-icon-box">
            <img src={FeaturesIcon} alt="" />
          </div>
          <div className="stat-content">
            <h2>15+</h2>
            <p>AI Features</p>
          </div>
        </div>

        {/* Stat 3 */}
        <div className="stat-item">
          <div className="stat-icon-box">
            <img src={BoxIcon} alt="" />
          </div>
          <div className="stat-content">
            <h2>4</h2>
            <p>Product Lines</p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default StatsSection;
