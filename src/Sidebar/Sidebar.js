import React from "react";
import "./Sidebar.scss";
import Search from "../Search";

export default class Sidebar extends React.Component {
  render() {
    return (
      <div className="sidebar">
        <Search />
      </div>
    );
  }
}
