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
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
              Guate Casa
            </Link>
          </h4>
          <ul>
            <li className="Navbar__Link">
              <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                Inicio
              </Link>
            </li>
            <li className="Navbar__Link">
              <Link
                to="/comprar"
                style={{ textDecoration: "none", color: "white" }}
              >
                Comprar
              </Link>
            </li>
            <li className="Navbar__Link">
              <Link
                to="/alquiler"
                style={{ textDecoration: "none", color: "white" }}
              >
                Alquiler
              </Link>
            </li>
            <li className="Navbar__Link">
              <Link
                to="/vender"
                style={{ textDecoration: "none", color: "white" }}
              >
                Vender
              </Link>
            </li>
          </ul>
        </nav>

        <nav className="NavbarSmall">
          <h4 className="Navbar__Logo">
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
              Guate Casa
            </Link>
          </h4>
          <div className="navRight">
            <div
              id="menuButton"
              onClick={this.handleOpen}
              data-style="font-size: 140px"
              toggle={collapseState}
              data-target="#navLinks"
              aria-expanded="true"
              aria-controls="navLinks"
            >
              <div
                id="menuButton"
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
            </div>
            <ul
              id="navLinks"
              className={collapseState}
              aria-labelledby="menuButton"
            >
              <li className="Navbar__Link">
                <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                  Inicio
                </Link>
              </li>
              <li className="Navbar__Link">
                <Link
                  to="/comprar"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Comprar
                </Link>
              </li>
              <li className="Navbar__Link">
                <Link
                  to="/alquiler"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Alquiler
                </Link>
              </li>
              <li className="Navbar__Link">
                <Link
                  to="/vender"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Vender
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        <Route exact path="/" component={Home} />
        <Route path="/comprar" component={Comprar} />
        <Route path="/alquiler" component={Alquiler} />
        <Route path="/vender" component={Vender} />
      </Router>
    );
  }
}
