import React, { useState } from "react";
import Names from "./Names";


const Search = (props) => {
  const babyNames = require("./babyNamesData.json");
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div>
      <input
        type="search"
        className="search-bar"
        placeholder="Search Names..."
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
      ></input>
      <Names searchTerm={searchTerm} babyNames={ 
        babyNames
      }/>
    </div>
  );
}
  

export default Search