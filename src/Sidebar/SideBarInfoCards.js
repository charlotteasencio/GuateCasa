import React from "react";
import SingleBedIcon from "@material-ui/icons/SingleBed";
import BathtubIcon from "@material-ui/icons/Bathtub";

export const SideBarInfoCard = ({ house }) => {
  return (
    <div className="sidebar__infoCards">
      <p className="sidebar__infoCardsInfo">{`${house.id}. ${house.info}`}</p>
      <p className="sidebar__infoCardsPrice">{house.price}</p>
      <div className="sidebar__infoCardsBedBaths">
        <div className="sidebar__infoCardsBed">
          <SingleBedIcon />
          <p>{house.beds}</p>
        </div>
        <div className="sidebar__infoCardsBath">
          <BathtubIcon />
          <p>{house.baths}</p>
        </div>
      </div>
    </div>
  );
};
