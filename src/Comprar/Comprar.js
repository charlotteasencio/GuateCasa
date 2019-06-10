import React from "react";
import "./Comprar.scss";

//import Container from '../Maps/Maps'
import Sidebar from "../Sidebar";
import Maps from "../Maps";

export default class Comprar extends React.Component {
  render() {
    return (
      <div className="comprar">
        {/*<Container />*/}
        <Maps />
        <Sidebar />
      </div>
    );
  }
}
