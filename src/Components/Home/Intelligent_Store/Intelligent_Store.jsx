import React from "react";
import "./Intelligent_Store.css";
import veg from "../../../Assets/Home/Intelligent_Store/Veg.png";
import veg_R from "../../../Assets/Home/Intelligent_Store/Veg_L.png";

import voice from "../../../Assets/Home/Intelligent_Store/Voice.png";
import loss from "../../../Assets/Home/Intelligent_Store/Group 31.png";
import damage from "../../../Assets/Home/Intelligent_Store/brain 1.png";
import image from "../../../Assets/Home/Intelligent_Store/Group 26.png";
import waste from "../../../Assets/Home/Intelligent_Store/Vector (4).png";
import brain from "../../../Assets/Home/Intelligent_Store/brain 1.png";
import food from "../../../Assets/Home/Intelligent_Store/food.png";

export default function Intelligent_Store() {
  return (
    <section className="is-wrapper">


      {/* Decorative veg */}
      <img src={veg_R} className="veg-left" alt="" />
      <img src={veg} className="veg-right" alt="" />

      {/* TEXT CONTENT */}
      <div className="is-content">
        <h2 className="is-title">Intelligent Store Operations</h2>
        <div className="is-underline"></div>

        <p className="is-subtext">
          Cutting-edge AI technologies designed specifically for retail operations.
          From voice commands to predictive analytics, every feature is built to
          save time and increase profits.
        </p>
      </div>

      {/* ✅ CENTER VISUAL (FULL-WIDTH CENTERED) */}
      <div className="is-center-visual">
        <img src={food} className="food" alt="food" />
      </div>


      {/* MOBILE FEATURES */}
      <div className="is-feature-list">
        <Feature icon={voice} title="Voice AI Technology"
          text="Voice recognition for purchase and sales using NLP." />

        <Feature icon={image} title="Image Recognition"
          text="Computer vision for inventory & quality tracking." />

        <Feature icon={damage} title="Damage Prevention"
          text="Predictive analytics to avoid FMCG losses." />

        <Feature icon={waste} title="Smart Waste Management"
          text="AI powered waste reduction for perishables." />

        <Feature icon={loss} title="Loss-Free Suggestions"
          text="Trend based AI purchase recommendations." />

        <Feature icon={brain} title="Subscription Intelligence"
          text="Automated weekly & monthly subscriptions." />
      </div>

    </section>
  );
}

function Feature({ icon, title, text }) {
  return (
    <div className="is-feature">
      <img src={icon} alt="" />
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}
