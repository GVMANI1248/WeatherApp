import React from "react";
import './index.css'
const Search = ({ setSearch, searchPressed }) => {
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Enter city/town..."
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={searchPressed}>Search</button>
    </div>
  );
};

export default Search;
