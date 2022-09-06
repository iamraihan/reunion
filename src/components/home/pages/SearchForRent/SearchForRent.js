import React from "react";
import "./SearchForRent.css";
import { HiChevronDown } from "react-icons/hi";

const SearchForRent = () => {
  return (
    <div className="search-rent-container">
      <div className="text-rent">
        <h1>Search Properties For Rent</h1>
      </div>
      <div className="input-rent">
        <div className="input-icon-text">
          <input
            className=""
            type="text"
            placeholder="Search with search bar"
          />
          <HiChevronDown className="input-icon"></HiChevronDown>
        </div>
      </div>
    </div>
  );
};

export default SearchForRent;
