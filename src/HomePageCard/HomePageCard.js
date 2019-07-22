import React from "react";
import "./HomePageCard.scss";
import { Link } from "react-router-dom";

export default function HomePageCard({
  title,
  buttonExample,
  homeIcon,
  goto,
  info
}) {
  return (
    <div className="card">
      <header className="card__header">{title}</header>
      <img className="card_icon" alt="homeIcon" src={homeIcon}></img>
      <div className="card_info">{info}</div>
      <Link
        to={`/${goto}`}
        style={{ textDecoration: "none", color: "white", textAlign: "center" }}
      >
        <button className="card_button">{buttonExample}</button>
      </Link>
    </div>
  );
}
