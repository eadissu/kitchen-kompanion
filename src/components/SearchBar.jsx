import { useState } from "react";
import "../styling/Components.css";

import SearchIcon from "../icons/SearchIcon";

function SearchBar({ type = "Search Ingredients", value, onChange }) {
  const handleChange = (e) => {
    const newValue = e.target.value;
    onChange?.(newValue);
    
  };

  return (
    <div className="searchbar">
      <div>
        <SearchIcon />
        <input
          className="search-field"
          type={type}
          value={value}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}


export default SearchBar;