import React from "react";
import SearchComponent from "../SmallSearch";
import "./Sidebar.scss";

export default class Sidebar extends React.Component {
  render() {
    const { title, info } = this.props;

    return (
      <div className="sidebar">
        <SearchComponent />
        <h2 className="sidebar__Title">{title}</h2>
        <h3 className="sidebar__Info">{info}</h3>
      </div>
    );
  }
}
