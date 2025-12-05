import React from "react";
import "./Footer.css";

import FooterLogo from "../../../Assets/Logo/Logo.png";
import StoreIcon from "../../../Assets/Footer/Store.png";
import ConsumerIcon from "../../../Assets/Footer/Man.png";
import DeliveryIcon from "../../../Assets/Footer/Delivery.png";
import VendorIcon from "../../../Assets/Footer/Vendors.png";

function Footer() {
  return (
    <section id="footer" className="footer">

      {/* MAIN ROW */}
      <div className="footer-content">

        {/* LEFT SIDE */}
        <div className="footer-left">
          <img src={FooterLogo} className="footer-logo" alt="Fulupo" />

          <p className="footer-desc">
            AI-powered store management SaaS platform revolutionizing retail
            operations with voice AI, image recognition, and intelligent
            automation for the future of retail.
          </p>

          <p className="footer-company">
            <strong>DoubleTap Innovations and Technologies Private Limited</strong>
          </p>
        </div>

        {/* MIDDLE — PRODUCTS */}
        <div className="footer-products">
          <h3>Products</h3>

          <ul>
            <li><img src={StoreIcon} alt="" /> Fulupo Store</li>
            <li><img src={ConsumerIcon} alt="" /> Fulupo Consumer</li>
            <li><img src={DeliveryIcon} alt="" /> Fulupo Delivery</li>
            <li><img src={VendorIcon} alt="" /> Fulupo Vendors</li>
          </ul>

          <a href="#" className="producer-link">PRODUCER Tech</a>
        </div>

        {/* RIGHT — CONTACT */}
        <div className="footer-contact">
          <h3>Contact</h3>
          <p>info@fulupo.ai</p>
          <p>+91 9600043880</p>
          <p>India</p>
          <p>doubletapinnovations.ai</p>
        </div>

      </div>

      {/* COPYRIGHT */}
      <div className="footer-bottom">
        © 2025 DoubleTap Innovations and Technologies Private Limited.  
        All rights reserved.
      </div>

    </section>
  );
}

export default Footer;
