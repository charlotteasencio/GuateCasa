import React from "react";
import "./Sidebar.scss";
import { SideBarInfoCard } from "./SideBarInfoCards";

const Sidebar = ({ houses }) => {
  return (
    <div className="sidebar">
      {houses.map(house => {
        return <SideBarInfoCard key={house.id} house={house} />;
      })}
    </div>
  );
};

export default Sidebar;
