import React from "react";
import "./Alquiler.scss";
import Sidebar from "../Sidebar";
import MyMapComponent from "../Maps";

export default class Alquiler extends React.Component {
  render() {
    return (
      <div className="alquiler">
        <MyMapComponent isMarkerShown />
        <Sidebar
          title="Alquiler Casa"
          info="¿Deaseas encontrar el hogar perfecto? ¡Buscalo aqui!"
        />
      </div>
    );
  }
}
