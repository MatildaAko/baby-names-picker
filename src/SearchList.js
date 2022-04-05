import React, { useState } from "react";
import Names from "./Names";
import Favourites from "./Favourites";

const Search = ({setSearchTerm}) => {
  // const babyNames = require("./babyNamesData.json");
  // const [searchTerm, setSearchTerm] = useState("");
  return (
    <div>
      <div>
        <input
          type="search"
          className="search-bar"
          placeholder="Search Names..."
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        ></input>
      </div>
    </div>
  );
};

export default Search;
