import React from "react";
import "./Vision_Section.css";

import QuoteLeft from "../../../Assets/Home/Vision_Section/Quote_L.png";
import QuoteRight from "../../../Assets/Home/Vision_Section/Quote_R.png";
// import YellowArc from "../../../Assets/Home/Vision_Section/Ellipse.png";
import Brush from "../../../Assets/Home/Vision_Section/Brush.png";
import Food from "../../../Assets/Home/Vision_Section/Food.png";



export default function Vision_Section() {
  return (
    <section className="vision-wrapper">
      <div className="vision-card">

        {/* LEFT QUOTES */}
        {/* <img src={QuoteLeft} alt="quote" className="quote-left" /> */}

        <div className="vision-content">
          <h2 className="vision-title">
            Our Vision
            
            <div className="vision-underline" style={{ backgroundImage: `url(${Brush})` }}></div>

          </h2>

          <p className="vision-text">
            Providing services to more than <br />
            <span className="highlight-red">1M stores</span>
          </p>

          <p className="vision-author">
            — DoubleTap Innovations and Technologies Private Limited
          </p>
        </div>

        {/* RIGHT QUOTES */}
        {/* <img src={QuoteRight} alt="quote" className="quote-right" /> */}

        {/* YELLOW ARC */}
        <div className="vision-circle">
  <img src={Food} alt="food" className="food-img" />
</div>


      </div>
    </section>
  );
}
