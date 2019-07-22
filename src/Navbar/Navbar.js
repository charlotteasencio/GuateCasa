import React from "react";
import "./Navbar.scss";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Comprar from "../Comprar";
import Home from "../Home";
import Alquiler from "../Alquiler";
import Vender from "../Vender";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: true,
      isOpen: false
    };
  }

  handleOpen = () => {
    this.setState({
      collapsed: !this.state.collapsed,
      isOpen: !this.state.isOpen
    });
  };

  render() {
    const collapseState = this.state.collapsed ? "collapse" : "collapse show";
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

        <nav className="NavbarSmall">
          <h4 className="Navbar__Logo">
            <Link to="/">Guate Casa</Link>
          </h4>
          <div
            className="NavbarSmall__MenuButton"
            onClick={this.handleOpen}
            data-toggle={collapseState}
            data-target="#navLinks"
            aria-expanded="true"
            aria-controls="navLinks"
          >
            {this.state.isOpen ? (
              <FontAwesomeIcon
                icon={faTimes}
                className="fa-lg NavbarSmall_MenuIcon"
              />
            ) : (
              <FontAwesomeIcon
                icon={faBars}
                className="fa-lg NavbarSmall_MenuIcon"
              />
            )}
          </div>
          <ul
            className={collapseState}
            aria-labelledby="menuButton"
            data-parent="#accordionExample"
          >
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
        </nav>

        {/*<nav className="NavbarMobile">
          <h4 className="NavbarMobile__Logo">
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
              Guate Casa
            </Link>
          </h4>
          <div
            id="NavbarMobile_Menu"
            onClick={this.handleOpen}
            data-toggle={collapseState}
            data-target=".NavbarMobile_Navlinks"
            aria-expanded="true"
            aria-controls="NavbarMobile_Navlinks"
          >
            {this.state.isOpen ? (
              <FontAwesomeIcon icon="times" className="fa-lg menu" />
            ) : (
              <FontAwesomeIcon icon="bars" className="fa-lg menu" />
            )}
          </div>
          <ul className="NavbarMobile_Navlinks">
            <li className="NavbarMobile__Link">
              <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                Inicio
              </Link>
            </li>
            <li className="NavbarMobile__Link">
              <Link
                to="/comprar"
                style={{ textDecoration: "none", color: "white" }}
              >
                Comprar
              </Link>
            </li>
            <li className="NavbarMobile__Link">
              <Link
                to="/alquiler"
                style={{ textDecoration: "none", color: "white" }}
              >
                Alquiler
              </Link>
            </li>
            <li className="NavbarMobile__Link">
              <Link
                to="/vender"
                style={{ textDecoration: "none", color: "white" }}
              >
                Vender
              </Link>
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
