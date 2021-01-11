import React from "react";
import MyMapComponent from "../Maps/Maps";
import Sidebar from "../Sidebar";
import "./Vender.scss";

export default class Vender extends React.Component {
  render() {
    return (
      <div className="alquiler">
        <MyMapComponent />
        <Sidebar />
      </div>
    );
  }
}
