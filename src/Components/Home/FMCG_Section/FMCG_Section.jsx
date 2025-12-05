import React from "react";
import "./FMCG_Section.css";

import img1 from "../../../Assets/Home/FMCG_Section/1.png";
import img2 from "../../../Assets/Home/FMCG_Section/2.png";
import img3 from "../../../Assets/Home/FMCG_Section/3.png";
import img4 from "../../../Assets/Home/FMCG_Section/4.png";

export default function FMCG_Section() {
  const cards = [
    { id: "01", title: "", img: img1 },
    { id: "02", title: "", img: img2 },
    { id: "03", title: "", img: img3 },
    { id: "04", title: "", img: img4 }
  ];

  // 👉 Extract only numbers: ["01", "02", "03", "04"]
//   const numbers = cards.map((card) => card.id);

  return (
    <div className="fmcg-wrapper">
        <center>
      <h2  className="main-title" >Fresh Produce & FMCG Management</h2></center>
      <div className="underline"></div>

      <div className="cards-row">

        {cards.map((card, index) => (
          <div className="card-box" key={card.id}>
            
            {/* 👉 Using extracted number here */}
            {/* <div className="num-badge">{numbers[index]}</div> */}

            <img 
              src={card.img} 
              alt={card.title} 
              className="simple-img"
            />

            <p className="card-title">{card.title}</p>
          </div>
        ))}

      </div>
    </div>
  );
}
