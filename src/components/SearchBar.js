import React from "react";

const SearchBar = ({ onSearch }) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search users..."
        onChange={(e) => onSearch(e.target.value)}
        style={{
          padding: "10px 20px",
          borderRadius: "8px",
          border: "1px solid #ccc",
          width: "60%",
          fontSize: "1rem",
          boxShadow: "0 0 10px rgba(0,0,0,0.1)"
        }}
      />
    </div>
  );
};

export default SearchBar;




