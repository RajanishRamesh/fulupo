import React from "react";
import "./FMCG_Section.css";

import img1 from "../../../Assets/Home/FMCG_Section/1.png";
import img2 from "../../../Assets/Home/FMCG_Section/2.png";
import img3 from "../../../Assets/Home/FMCG_Section/3.png";
import img4 from "../../../Assets/Home/FMCG_Section/4.png";

export default function FMCG_Section() {
  const cards = [
    { title: "AI Quality Detection", img: img1 },
    { title: "Smart Inventory", img: img2 },
    { title: "Waste Reduction", img: img3 },
    { title: "Digital Integration", img: img4 }
  ];

  return (
    <div className="fmcg-wrapper">
      <h2 className="main-title">Fresh Produce & FMCG Management</h2>
      <div className="underline-green"></div>

      <div className="cards-container">
  {cards.map((card, i) => (
    <div
      className={`single-card 
        ${i === 0 ? "move-1" : ""} 
        ${i === 1 ? "move-2" : ""} 
        ${i === 2 ? "move-3" : ""} 
        ${i === 3 ? "move-4" : ""}
      `}
      key={i}
    >
      <img src={card.img} alt={card.title} className="simple-card-img" />
      <p className="card-text">{card.title}</p>
    </div>
  ))}
</div>

        
      
    </div>
  );
}
