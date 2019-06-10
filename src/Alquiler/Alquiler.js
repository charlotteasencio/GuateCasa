import React from "react";
import "./Alquiler.scss";

//import Container from '../Maps/Maps'

import Sidebar from "../Sidebar";
import Maps from "../Maps";

export default class Alquiler extends React.Component {
  render() {
    return (
      <div className="alquiler">
        {/*<Container />*/}
        <Maps />
        <Sidebar />
      </div>
    );
  }
}
