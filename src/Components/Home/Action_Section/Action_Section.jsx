import React from "react";
import "./Action_Section.css";
import store from "../../../Assets/Home/Action_Section/store.jpg";

export default function Action_Section() {
  return (
    <section className="see-section">

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

      {/* MAIN DEMO CARD */}
      <div className="demo-card">

        {/* LEFT VIDEO IMAGE */}
        <div className="demo-left">
          <img
            src={store}   
            alt="store"
          />
          <div className="overlay">
            <div className="play-btn">▶</div>
             <span><h3>Fulupo Store Demo</h3><p>Click to watch our <br />AI store management demo</p></span>
            
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
            <li>🗣️ Voice Commands</li>
            <li>📦 Real-time Inventory</li>
            <li>📊 Smart Analytics</li>
            <li>🤖 Auto Ordering</li>
          </ul>
        </div>

      </div>
    </section>
  );
}
