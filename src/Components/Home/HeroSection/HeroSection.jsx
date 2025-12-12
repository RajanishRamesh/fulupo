import React from "react";
import "./HeroSection.css";

/* ICONS */
import voice from "../../../Assets/Icons/1.png";
import gallery from "../../../Assets/Icons/2.png";
import man from "../../../Assets/Icons/3.png";
import automation from "../../../Assets/Icons/4.png";

import HeroBG from "../../../Assets/Home/HeroSection/Hero.jpg";
import HeroVeg from "../../../Assets/Home/HeroSection/Vegetables.png";
import PlayCircle from "../../../Assets/Icons/play_circle.ico";
import { MdAutoAwesome } from "react-icons/md";

function HeroSection() {
  return (
    <div
      className="hero-section"
      style={{
        backgroundImage: `url(${HeroBG})`,
      }}
    >
      <div className="hero-overlay"></div>

      <div className="hero-content-wrapper">
        <div className="hero-main-row">

          {/* LEFT SIDE */}
          <div className="hero-left">
            <span className="hero-tag">
              <MdAutoAwesome className="tag-icon" style={{ color: "#000000ff" }} />
              Revolutionary AI Store Management
            </span>

            <h1 className="hero-title">
              FULUPO <span style={{ fontWeight: 500 }}>|</span> <br />
              <span className="hero-title-yellow">AI STORE KEEPER</span>
            </h1>

            <p className="hero-desc">
              Complete AI-powered store management SaaS platform for modern
              retailers. Transform your business with Voice AI, Image recognition,
              and intelligent automation for the future of retail.
            </p>

            <div className="hero-buttons">
              <button className="btn-primary">Explore Products</button>
              <button className="btn-outline">
                <img src={PlayCircle} alt="play" className="play-icon" />
                Watch Demo
              </button>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="hero-right">
            <img src={HeroVeg} alt="Vegetables" className="hero-img" />
          </div>
        </div>

        {/* FEATURES */}
        <div className="hero-features">
          <div className="feature-card">
            <div className="icon-box">
              <img src={voice} alt="Voice AI" className="icons" />
            </div>
            <div className="feature-text">
              <h4>Voice AI</h4>
              <p>Natural language processing for seamless transactions</p>
            </div>
          </div>

          <div className="feature-card">
            <div className="icon-box">
              <img src={gallery} alt="Image Recognition" className="icons" />
            </div>
            <div className="feature-text">
              <h4>Image Recognition</h4>
              <p>Computer vision for instant product identification</p>
            </div>
          </div>

          <div className="feature-card">
            <div className="icon-box">
              <img src={man} alt="Smart Analytics" className="icons" />
            </div>
            <div className="feature-text">
              <h4>Smart Analytics</h4>
              <p>AI-driven insights and predictive analytics</p>
            </div>
          </div>

          <div className="feature-card">
            <div className="icon-box">
              <img src={automation} alt="Automation" className="icons" />
            </div>
            <div className="feature-text">
              <h4>Automation</h4>
              <p>Intelligent workflow and process automation</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;

