import React from "react";
import "./HomePageCard.scss";
import { Link } from "react-router-dom";

export default function HomePageCard({ title, buttonExample, homeIcon, goto }) {
  return (
    <div className="card">
      <header className="card__header">{title}</header>
      <img className="card_icon" alt="homeIcon" src={homeIcon}></img>
      <div className="card_info">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur.
      </div>
      <Link
        to={`/${goto}`}
        style={{ textDecoration: "none", color: "white", textAlign: "center" }}
      >
        <button className="card_button">{buttonExample}</button>
      </Link>
    </div>
  );
}
