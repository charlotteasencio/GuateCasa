import React from "react";
import "./Alquiler.scss";
import Sidebar from "../Sidebar";
import MyMapComponent from "../Search/Maps/Maps";

export default class Alquiler extends React.Component {
  render() {
    return (
      <div className="alquiler">
        <MyMapComponent />
        <Sidebar />
      </div>
    );
  }
}
