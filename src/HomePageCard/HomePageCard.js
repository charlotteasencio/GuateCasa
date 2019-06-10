import React from "react";
import "./HomePageCard.scss";

export default function HomePageCard({ title, buttonExample, color }) {
    return (
      <div className="HomePageCard">
        <h2 className="HomePageCard__Title" style={{backgroundColor: color}}>{title}</h2>
        <img
          className="HomePageCard__Image"
          src="https://via.placeholder.com/300X200"
          alt="placeholder"
        ></img>
        <button className="HomePageCard__Button">{buttonExample}</button>
      </div>
    );
}
