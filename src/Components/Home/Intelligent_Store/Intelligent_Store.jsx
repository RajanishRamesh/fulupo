import React from "react";
import "./Intelligent_Store.css";

import centerImage from "../../../Assets/Home/Intelligent_Store/Center.png";
import brush from "../../../Assets/Home/Intelligent_Store/Brush.png";
import veg from "../../../Assets/Home/Intelligent_Store/Veg.png";
import veg_R from "../../../Assets/Home/Intelligent_Store/Veg_L.png";
import voice from "../../../Assets/Home/Intelligent_Store/Voice.png"
import loss from "../../../Assets/Home/Intelligent_Store/Group 31.png"
import damage from "../../../Assets/Home/Intelligent_Store/brain 1.png"
import image from "../../../Assets/Home/Intelligent_Store/Group 26.png"
import waste from "../../../Assets/Home/Intelligent_Store/Vector (4).png"
import brain from '../../../Assets/Home/Intelligent_Store/brain 1.png'


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
{/* MOBILE FEATURE LIST */}
<div className="is-feature-list">
  <div className="is-feature">
    <img src={voice} alt="" />
    <h3>Voice AI Technology</h3>
    <p>Revolutionary voice recognition for purchases and sales using NLP.</p>
  </div>

  <div className="is-feature">
    <img src={image} alt="" />
    <h3>Image Recognition</h3>
    <p>AI-based inventory identification and quality tracking.</p>
  </div>

  <div className="is-feature">
    <img src={damage} alt="" />
    <h3>Damage Prevention</h3>
    <p>Predictive analytics to prevent FMCG product damage.</p>
  </div>

  <div className="is-feature">
    <img src={waste} alt="" />
    <h3>Smart Waste Management</h3>
    <p>AI reduction of perishable waste like fruits & vegetables.</p>
  </div>

  <div className="is-feature">
    <img src={loss}alt="" />
    <h3>Loss-Free Suggestions</h3>
    <p>AI purchase recommendations based on trends.</p>
  </div>

  <div className="is-feature">
    <img src={brain} alt="" />
    <h3>Subscription Intelligence</h3>
    <p>AI suggestions for weekly/monthly consumer subscriptions.</p>
  </div>
</div>

    </section>
  );
}
