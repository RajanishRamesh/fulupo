import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import Logo from "../../../Assets/Logo/Logo.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const handleScroll = () => {
      let scrollY = window.pageYOffset;
      let current = "home"; // default

      sections.forEach((sec) => {
        const top = sec.offsetTop - 200; 
        const height = sec.offsetHeight;
        const id = sec.id;

        if (scrollY >= top && scrollY < top + height) {
          current = id;
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);

    // run once on refresh
    setTimeout(() => handleScroll(), 150);
 
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="pro-header">

      {/* LEFT LOGO (Scroll to Top on Click) */}
      <div
        className="pro-left"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        style={{ cursor: "pointer" }}
      >
        <img src={Logo} alt="logo" className="pro-logo" />
      </div>

      {/* HAMBURGER */}
      <div className="pro-hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span><span></span><span></span>
      </div>

      {/* NAV LINKS */}
      <nav className={`pro-nav ${menuOpen ? "active" : ""}`}>
        <a href="#home" className={`pro-link ${activeSection === "home" ? "active" : ""}`}>Home</a>
        <a href="#products" className={`pro-link ${activeSection === "products" ? "active" : ""}`}>Products</a>
        <a href="#features" className={`pro-link ${activeSection === "features" ? "active" : ""}`}>Features</a>
        <a href="#demo" className={`pro-link ${activeSection === "demo" ? "active" : ""}`}>Demo</a>
        <a href="#future" className={`pro-link ${activeSection === "future" ? "active" : ""}`}>Future</a>
      </nav>

      {/* RIGHT BUTTONS */}
      <div className="pro-right">
        <button className="pro-btn-store">Store Keeper</button>
        <button className="pro-btn-consumer">Consumer Login</button>
      </div>

    </header>
  );
};

export default Header;
