import React, { useState } from "react";
import "./SmallSearch.scss";

const SearchComponent = () => {
  //location is the current state of location and setLocation is an updater for the event - this is a hook. They all begin with 'use', even custom hooks
  //use this instead of setState for function components
  //hooks never go inside of if statements or for loops
  //hooks keep track of the order that you are calling these things in. They can't be called out of order.
  const [location, setLocation] = useState("");
  //can add another hook here for rent or buy

  return (
    <form className="search">
      <div className="search__Elements">
        <input
          className="search__Input"
          value={location}
          placeholder="Ciudad"
          onChange={e => setLocation(e.target.value)}
        />
        <div className="search__dropDownContainer">
          <button className="search__button">Vamos</button>
        </div>
      </div>
    </form>
  );
};

export default SearchComponent;
