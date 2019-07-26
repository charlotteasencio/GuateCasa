import React from "react";
import "./Comprar.scss";
import Sidebar from "../Sidebar";
import MyMapComponent from "../Maps";
import Media from "react-media";
import SmallSearch from "../ComprarSearch";

export default class Comprar extends React.Component {
  render() {
    return (
      <div className="comprar">
        <MyMapComponent isMarkerShown />
        <Media query="(max-width: 799px)">
          {matches =>
            matches ? (
              <SmallSearch />
            ) : (
              <Sidebar
                title="Comprar Casa"
                info="¿Deaseas encontrar el hogar perfecto? ¡Buscalo aqui!"
              />
            )
          }
        </Media>
      </div>
    );
  }
}
