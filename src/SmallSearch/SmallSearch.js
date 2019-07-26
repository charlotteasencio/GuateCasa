import React, { useState } from "react";
import "./SmallSearch.scss";

const SmallSearch = () => {
  //location is the current state of location and setLocation is an updater for the event - this is a hook. They all begin with 'use', even custom hooks
  //use this instead of setState for function components
  //hooks never go inside of if statements or for loops
  //hooks keep track of the order that you are calling these things in. They can't be called out of order.
  const [location, setLocation] = useState("");
  //can add another hook here for rent or buy

  return (
    <form className="comprarSearch">
      <input
        className="comprarSearch__Input"
        value={location}
        placeholder="Ciudad"
        onChange={e => setLocation(e.target.value)}
      />
      <button className="comprarSearch__button">Vamos</button>
    </form>
  );
};

export default SmallSearch;
