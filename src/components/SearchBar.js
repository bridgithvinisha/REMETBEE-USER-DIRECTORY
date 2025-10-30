import React from "react";
import "../App.css";

const SearchBar = ({ value, onChange }) => {
  return (
    <input
      type="text"
      placeholder="Search users..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="search-bar"
    />
  );
};

export default SearchBar;




