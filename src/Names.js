import React from "react";
import NamesButton from "./NamesButton"


const Names = ({  searchTerm, setFavourites, favourites, singleName, setSingleName, gender, setGender }) => {
  return singleName
    .sort((a, b) => a.name.localeCompare(b.name))
    .filter((babyNameEntry) => {
      return searchTerm === "" ? babyNameEntry : babyNameEntry.name.toLowerCase().includes(searchTerm) && babyNameEntry;
    })
    .filter((babyNameEntry) => {
      // return babyNameEntry.sex === gender ;
      return gender === "both" ? babyNameEntry : babyNameEntry.sex === gender;
    })
    .map((name, index) => (
      <NamesButton
        key={index}
        name={name}
        index={index}
        onClick={() => {
          setFavourites(favourites.concat(name));
          setSingleName(singleName.filter((person) => !name.name.includes(person.name)));
        }}
      />
    ));
};

export default Names;
