import React from "react";
import "./Intelligent_Store.css";

import centerImage from "../../../Assets/Home/Intelligent_Store/Center.png";
import brush from "../../../Assets/Home/Intelligent_Store/Brush.png";
import veg from "../../../Assets/Home/Intelligent_Store/Veg.png";
import veg_R from "../../../Assets/Home/Intelligent_Store/Veg_L.png";

export default function Intelligent_Store() {
  return (
    <section id="features" className="is-wrapper">

      {/* Decorative Right Image */}
      <img src={veg_R} alt="" className="veg-left" />
      <img src={veg} alt="" className="veg-right" />

      <div className="is-content">
        <h2 className="is-title">Intelligent Store Operations</h2>
        <img src={brush} alt="" className="is-brush" />

        <p className="is-subtext">
          Cutting-edge AI technologies designed specifically for retail operations.
          From voice commands to predictive analytics, every feature is built to
          save time and increase profits.
        </p>

        <div className="is-center-container">
          <img src={centerImage} alt="" className="is-center-img" />
        </div>
      </div>

    </section>
  );
}
