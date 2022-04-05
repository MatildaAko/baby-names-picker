import React from "react";
import NamesButton from "./NamesButton"


const Names = ({  searchTerm, setFavourites, favourites, singleName, setSingleName }) => {
  return singleName
    .sort((a, b) => (a.name === b.name ? 0 : a.name > b.name ? 1 : -1))
    .filter((val) => {
      return searchTerm === "" ? val : val.name.toLowerCase().includes(searchTerm) && val;
    })
    .map((name, index) => (
      <NamesButton
        key={index}
        name={name}
        index={index}
        onClick={() => {
          !favourites.includes(name) && setFavourites(favourites.concat(name));
          setSingleName(singleName.filter((person) => !name.name.includes(person.name)));
        }}
      />
    ));
};

export default Names;
