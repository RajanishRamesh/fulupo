import React from "react";
import "./Action_Section.css";
import store from "../../../Assets/Home/Action_Section/store.jpg";

// ICON IMPORTS
import VoiceIcon from "../../../Assets/Home/Action_Section/1.png";
import InventoryIcon from "../../../Assets/Home/Action_Section/2.png";
import AnalyticsIcon from "../../../Assets/Home/Action_Section/3.png";
import AutoOrderIcon from "../../../Assets/Home/Action_Section/4.png";

export default function Action_Section() {
  return (
    <section id="demo" className="see-section">
   
      {/* TOP SMALL BUTTON */}
      <div className="demo-btn">Live Demo</div>

      {/* TITLE */}
      <h2 className="see-title">See Fulupo in Action</h2>

      {/* BRUSH LINE */}
      <div className="brush-line"></div>

      {/* SUBTEXT */}
      <p className="see-subtext">
        Experience the power of AI-driven store management. Watch our comprehensive
        demo or schedule a personalized session with our team.
      </p>
      

      {/* DEMO CARD */}
      <div className="demo-card">

        {/* LEFT IMAGE */}
        <div className="demo-left">
          <img src={store} alt="store" />

          <div className="overlay-demo">
            <div className="play-btn">▶</div>

            <span>
              <h3 className="Tittle-left">Fulupo Store Demo</h3>
              <p className="Para-tittle">
                Click to watch our <br /> AI store management demo
              </p>
            </span>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="demo-right">
          <h3 className="demo-heading">Flupo Store Demo</h3>

          <p className="demo-desc">
            Complete walkthrough of store management features including voice AI,
            inventory tracking, and automated purchase orders.
          </p>

          <ul className="features">
  <li>
    <img src={VoiceIcon} className="feature-icon" alt="" />
    Voice Commands
  </li>

  <li>
    <img src={InventoryIcon} className="feature-icon" alt="" />
    Real-time Inventory
  </li>

  <li>
    <img src={AnalyticsIcon} className="feature-icon" alt="" />
    Smart Analytics
  </li>

  <li>
    <img src={AutoOrderIcon} className="feature-icon" alt="" />
    Auto Ordering
  </li>
</ul>

        </div>

      </div>
    </section>
  );
}
