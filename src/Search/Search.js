import React, { useState } from "react";
import "./Search.scss";

const SearchParams = () => {
  //location is the current state of location and setLocation is an updater for the event - this is a hook. They all begin with 'use', even custom hooks
  //use this instead of setState for function components
  //hooks never go inside of if statements or for loops
  //hooks keep track of the order that you are calling these things in. They can't be called out of order.
  const [location, setLocation] = useState("");
  //can add another hook here for rent or buy
  const [searchType, setSearchType] = useState("comprar");

  const SearchTypes = ["Comprar", "Alquiler"];

  return (
    <div>
      <form className="locationSearchForm">
        <div className="locationSearch">
          <input
            className="locationSearch__Input"
            value={location}
            placeholder="Ciudad"
            onChange={e => setLocation(e.target.value)}
          />
          <select
            className="locationSearch__Select"
            value={searchType}
            onChange={e => setSearchType(e.target.value)}
            onBlur={e => setSearchType(e.target.value)}
          >
            {/*if you had an array of strings to make options in this list*/}
            {SearchTypes.map(searchType => (
              /*key should be something unique to each element (UserID for example on something more complicated) it lets react know when something has changed that needs to be rerendered or if the 
                order of the list was just changed */
              <option key={searchType} value={searchType}>
                {searchType}
              </option>
            ))}
          </select>
        </div>
        <button className="locationSearchForm__button">Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
