import React from "react";
import NamesButton from "./NamesButton";

const Favourites = ({ favourites, setFavourites, singleName, setSingleName }) => {
  return (
    <div>
      <p>Favourites</p>
      <div>
        {favourites.map((favourite, index) => (
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
