import React from "react";
import "./Alquiler.scss";
import Sidebar from "../Sidebar";
import MyMapComponent from "../Maps";
import Media from "react-media";
import SmallSearch from "../SmallSearch";

export default class Alquiler extends React.Component {
  render() {
    return (
      <div className="alquiler">
        <MyMapComponent />
        <Media query="(max-width: 799px)">
          {matches =>
            matches ? (
              <SmallSearch />
            ) : (
              <Sidebar
                title="Aquiler Casa"
                info="¿Deaseas rentar el hogar perfecto? ¡Buscalo aqui!"
              />
            )
          }
        </Media>
      </div>
    );
  }
}
