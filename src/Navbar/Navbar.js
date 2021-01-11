import React, { useState } from "react";
import "./Navbar.scss";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Comprar from "../Comprar";
import Home from "../Home";
import Alquiler from "../Alquiler";
import Vender from "../Vender";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import classNames from "classnames";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuOpen = () => {
    setMenuOpen(!menuOpen);
  };

  const menuOpenClass = menuOpen ? "--open" : "--closed";

  return (
    <Router>
      <nav className="Navbar">
        <h4 className="Navbar__Logo">
          <Link to="/">Guate Casa</Link>
        </h4>
        <ul className="Navbar__LinksMain">
          <li className="Navbar__Link">
            <Link to="/">Inicio</Link>
          </li>
          <li className="Navbar__Link">
            <Link to="/comprar">Comprar</Link>
          </li>
          <li className="Navbar__Link">
            <Link to="/alquiler">Alquiler</Link>
          </li>
          <li className="Navbar__Link">
            <Link to="/vender">Vender</Link>
          </li>
        </ul>

        {menuOpen ? (
          <CloseIcon className="Navbar__Icon" onClick={handleMenuOpen} />
        ) : (
          <MenuIcon className="Navbar__Icon" onClick={handleMenuOpen} />
        )}
      </nav>

      <div className={classNames("Navbar__LinksMobile", menuOpenClass)}>
        <ul>
          <li className="Navbar__Link">
            <Link to="/">Inicio</Link>
          </li>
          <li className="Navbar__Link">
            <Link to="/comprar">Comprar</Link>
          </li>
          <li className="Navbar__Link">
            <Link to="/alquiler">Alquiler</Link>
          </li>
          <li className="Navbar__Link">
            <Link to="/vender">Vender</Link>
          </li>
        </ul>
      </div>

      <Route exact path="/" component={Home} />
      <Route path="/comprar" component={Comprar} />
      <Route path="/alquiler" component={Alquiler} />
      <Route path="/vender" component={Vender} />
    </Router>
  );
};
