import React from "react";
import "./HeroSection.css";

import HeroBG from "../../../Assets/Home/Hero.jpg";
import HeroVeg from "../../../Assets/Home/Vegetables.png";

/* IMPORT ICONS */
import StarsIcon from "../../../Assets/Icons/Stars.ico";
import PlayCircle from "../../../Assets/Icons/play_circle.ico";

import { MdKeyboardVoice } from "react-icons/md";
import { GrGallery } from "react-icons/gr";
import Smart from "../../../Assets/Icons/Smart-Analytics.ico";
import { TbSettingsAutomation } from "react-icons/tb";


function HeroSection() {
  return (
    <div
  className="hero-section"
  style={{ 
    backgroundImage: `url(${HeroBG})`,
    padding: "60px", 
  }}
>

      {/* LEFT SIDE */}
      <div className="hero-left">
        
        {/* Top Tag with icon */}
        <span className="hero-tag">
          <img  src={StarsIcon} alt="tag icon" className="tag-icon" />
          Revolutionary AI Store Management
        </span>

        <h1 className="hero-title">FULUPO |</h1>
        <h1 className="hero-title-yellow">AI STORE KEEPER</h1>

        <p className="hero-desc">
          Complete AI-powered store management SaaS platform for modern
          retailers. Transform your business with Voice AI, Image
          recognition, and intelligent automation for the future of retail.
        </p>

        {/* BUTTONS */}
        <div className="hero-buttons">

          <button className="btn-primary">
            Explore Products
          </button>

          <button className="btn-outline">
            <img src={PlayCircle} alt="play" className="play-icon" />
            Watch Demo
          </button>

        </div>

        {/* FEATURES */}
        <div className="hero-features" style={{paddingBottom: "34px"}}>

  <div className="feature-card">
    <div className="icon-box">
      <MdKeyboardVoice className="icons"/>
    </div>
    <div className="feature-text">
      <h4 className="Voice-text">Voice AI</h4>
      <p className="para">Natural language processing for seamless transactions</p>
    </div>
  </div>

  <div className="feature-card">
    <div className="icon-box">
      <GrGallery className="icons"/>
    </div>
    <div className="feature-text">
      <div></div>
      <h4>Image Recognition</h4>
      <p>Computer vision for instant product identification</p>
      
    </div>
  </div>

  <div className="feature-card">
    <div className="icon-box">
      <img src={Smart} alt="" />
    </div>
    <div className="feature-text">
      <h4>Smart Analytics</h4>
      <p>AI-driven insights and 
predictive analytics</p>
    </div>
  </div>


  <div className="feature-card">
    <div className="icon-box">
      <TbSettingsAutomation className="icons"/>
    </div>
    <div className="feature-text">
      <h4>Automation</h4>
      <p>Intelligent workflow and process automation</p>
    </div>
  </div>

</div>


      </div>

      {/* RIGHT SIDE IMAGE */}
      <div className="hero-right">
        <img src={HeroVeg} alt="Vegetables" className="hero-img" />
      </div>

      

    </div>
  );
}

export default HeroSection;
