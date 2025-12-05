import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import Logo from "../../../Assets/Logo/Logo.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="pro-header">

      {/* LEFT LOGO */}
      <div className="pro-left">
        <img src={Logo} alt="logo" className="pro-logo" />
      </div>

      {/* HAMBURGER */}
      <div className="pro-hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span><span></span><span></span>
      </div>

      {/* NAV */}
      <nav className={`pro-nav ${menuOpen ? "active" : ""}`}>
 <NavLink
  to="/"
  className={({ isActive }) => (isActive ? "pro-link active" : "pro-link")}
>
  Home
</NavLink>
  <NavLink to="/products" className={({ isActive }) => isActive ? "pro-link active" : "pro-link"}>Products</NavLink>
  <NavLink to="/features" className={({ isActive }) => isActive ? "pro-link active" : "pro-link"}>Features</NavLink>
  <NavLink to="/demo" className={({ isActive }) => isActive ? "pro-link active" : "pro-link"}>Demo</NavLink>
  <NavLink to="/future" className={({ isActive }) => isActive ? "pro-link active" : "pro-link"}>Future</NavLink>
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
