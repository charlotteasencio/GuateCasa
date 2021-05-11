import React from "react";
import SingleBedIcon from "@material-ui/icons/SingleBed";
import BathtubIcon from "@material-ui/icons/Bathtub";
import "./MapsInfoCard.scss";

export const MapInfoCard = ({ house }) => {
  return (
    <div className="maps__infoCards">
      <p className="maps__infoCardsInfo">{`${house.id}. ${house.info}`}</p>
      <p className="maps__infoCardsPrice">{house.price}</p>
      <div className="maps__infoCardsBedBaths">
        <div className="maps__infoCardsBed">
          <SingleBedIcon />
          <p>{house.beds}</p>
        </div>
        <div className="maps__infoCardsBath">
          <BathtubIcon />
          <p>{house.baths}</p>
        </div>
      </div>
    </div>
  );
};
