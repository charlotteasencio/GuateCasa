import React from "react";
import "./Sidebar.scss";
import Search from "../Search";

export default class Sidebar extends React.Component {
  render() {
    const { title, info } = this.props;

    return (
      <div className="sidebar">
        <h2 className="sidebar__Title">{title}</h2>
        <h3 className="sidebar__Info">{info}</h3>
        <Search />
      </div>
    );
  }
}
