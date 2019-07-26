import React from "react";
import "./Navbar.scss";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Comprar from "../Comprar";
import Home from "../Home";
import Alquiler from "../Alquiler";
import Vender from "../Vender";

export default class Navbar extends React.Component {
  render() {
    return (
      <Router>
        <nav className="Navbar">
          <h4 className="Navbar__Logo">
            <Link to="/">Guate Casa</Link>
          </h4>
          <ul className="Navbar__Links">
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
        </nav>

        {/*<nav className="NavbarSmall">
          <h4 className="Navbar__Logo">
            <Link to="/">Guate Casa</Link>
          </h4>
          <ul>
            <li className="NavbarSmall__Link">
              <Link to="/">Inicio</Link>
            </li>
            <li className="NavbarSmall__Link">
              <Link to="/comprar">Comprar</Link>
            </li>
            <li className="NavbarSmall__Link">
              <Link to="/alquiler">Alquiler</Link>
            </li>
            <li className="NavbarSmall__Link">
              <Link to="/vender">Vender</Link>
            </li>
          </ul>
    </nav>*/}

        <Route exact path="/" component={Home} />
        <Route path="/comprar" component={Comprar} />
        <Route path="/alquiler" component={Alquiler} />
        <Route path="/vender" component={Vender} />
      </Router>
    );
  }
}
