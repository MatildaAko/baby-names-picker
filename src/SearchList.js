import React from "react";

const Search = ({searchTerm, setSearchTerm}) => {
  return (
    <div>
      <div>
        <input
          type="search"
          className="search-bar"
          placeholder="Search Names..."
          value={searchTerm}
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        ></input>
      </div>
    </div>
  );
};

export default Search;
