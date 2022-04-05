import React from "react";
import NamesButton from "./NamesButton"


const Names = (props) => {
  const { babyNames, searchTerm, changeFavourites } = props;
  
  return babyNames
    .sort((a, b) => (a.name === b.name ? 0 : a.name > b.name ? 1 : -1))
    .filter((val) => {
      return searchTerm === "" ? val : val.name.toLowerCase().includes(searchTerm) && val;
    })
    .map((name, index) => (
      <NamesButton name={name} index={index} changeFavourites={changeFavourites}/>
    ));
};

export default Names;
