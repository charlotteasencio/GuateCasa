import React from "react";
import "./Sidebar.scss";
import Search from "../Search";

export default class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    };
  }

  handleCollapse = () => {
    const currentState = this.state.active;
    this.setState({ active: !currentState });
  };

  render() {
    const { title, info } = this.props;

    return (
      <div>
        <button onClick={this.handleCollapse}>collapse</button>
        <div className={this.state.active ? "sidebar collapsed" : "sidebar"}>
          <h2 className="sidebar__Title">{title}</h2>
          <h3 className="sidebar__Info">{info}</h3>
          <Search />
        </div>
      </div>
    );
  }
}
