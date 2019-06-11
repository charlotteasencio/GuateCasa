import React from "react";
import "./Comprar.scss";
import Sidebar from "../Sidebar";
import MyMapComponent from "../Search/Maps/Maps";

export default class Comprar extends React.Component {
  render() {
    return (
      <div className="comprar">
        <MyMapComponent />
        <Sidebar />
      </div>
    );
  }
}
