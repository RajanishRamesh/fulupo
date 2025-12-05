import React from "react";
import "./Contact_Section.css";

// Import icons
import DemoIcon from "../../../Assets/Home/Contacts_Section/Prof.png";
import TickIcon from "../../../Assets/Home/Contacts_Section/GreenDot.png";
import CallIcon from "../../../Assets/Home/Contacts_Section/Phone.png";
import MailIcon from "../../../Assets/Home/Contacts_Section/Mail.png"


export default function DemoContact() {
  return (
    <section id="demo" className="contact-wrapper">

      {/* LEFT CARD */}
      <div className="left-card">

        <img src={DemoIcon} alt="" className="demo-icon-img" />

        <h2 className="demo-title">
          Scheduled <br /> <span>Personal Demo</span>
        </h2>

        <p className="demo-desc">
          Get a customized demonstration tailored to your specific business
          needs. Our experts will show you exactly how Fulupo can transform your
          operations.
        </p>

        <ul className="demo-list">
          <li><img src={TickIcon} className="tick-icon" alt="" /> 45-minute personalized session</li>
          <li><img src={TickIcon} className="tick-icon" alt="" /> Live feature demonstration</li>
          <li><img src={TickIcon} className="tick-icon" alt="" /> Q&A with AI experts</li>
          <li><img src={TickIcon} className="tick-icon" alt="" /> Custom pricing discussion</li>
        </ul>

        <button className="schedule-btn">Schedule Demo</button>
      </div>

      {/* RIGHT CARD */}
      <div className="right-card">

        <h2 className="right-title">
          Talk to <span>Our Experts</span>
        </h2>

        <p className="right-desc">
          Have specific questions about implementation, pricing, or integration?
          Connect directly with our AI specialists for immediate assistance.
        </p>

        {/* CALL */}
        <div className="info-row">
          <div className="circle-icon">
            <img src={CallIcon} className="circle-inner-icon" alt="call" />
          </div>
          <div className="call-us">
            <h4>Call Us</h4>
            <p>+91 9600043880</p>
          </div>
        </div>

        {/* EMAIL */}
        <div className="info-row">
          <div className="circle-icon">
            <img src={MailIcon} className="circle-inner-icon" alt="mail" />
          </div>
          <div className="email-us">
            <h4>Email Us</h4>
            <p>info@fulupo.ai</p>
          </div>
        </div>

        <button className="expert-btn">
          Contact Expert
        </button>
      </div>
    </section>
  );
}
