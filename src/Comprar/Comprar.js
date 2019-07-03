import React from "react";
import "./Comprar.scss";
import Sidebar from "../Sidebar";
import MyMapComponent from "../Maps";

export default class Comprar extends React.Component {
  render() {
    return (
      <div className="comprar">
        <MyMapComponent isMarkerShown />
        <Sidebar />
      </div>
    );
  }
}
