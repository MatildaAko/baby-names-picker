import React from "react";
import NamesButton from "./NamesButton";

const Favourites = ({searchTerm, favourites, setFavourites, singleName, setSingleName, gender }) => {
  return (
    <div>
      <p>Favourites</p>
      <div>
        {favourites
          .filter((val) => {
            return searchTerm === "" ? val : val.name.toLowerCase().includes(searchTerm) && val;
          })
          .filter((val) => {
            return gender === "both" ? val : val.sex === gender;
          })
          .map((favourite, index) => (
            <NamesButton
              key={index}
              name={favourite}
              index={index}
              onClick={() => {
                setFavourites(favourites.filter((name) => !favourite.name.includes(name.name)));
                setSingleName(singleName.concat(favourite));
              }}
            />
          ))}
      </div>
      <hr />
    </div>
  );
};

export default Favourites;
