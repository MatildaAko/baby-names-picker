import React, { useState } from "react";

import Search from "./Search";
import "./App.css";
import Favourites from "./Favourites";
import Names from "./Names";
import GenderButton from "./GenderButton";

function App() {
  const babyNames = require("./babyNamesData.json");
  const [searchTerm, setSearchTerm] = useState("");
  const [favourites, setFavourites] = useState([]);
  const [singleName, setSingleName] = useState(babyNames);
  const [gender, setGender] = useState("both");
  return (
    <div className="App">
      <div>
        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <GenderButton gender={gender} setGender={setGender} />
      </div>

      <Favourites
        searchTerm={searchTerm}
        favourites={favourites}
        setFavourites={setFavourites}
        singleName={singleName}
        setSingleName={setSingleName}
        gender={gender}
      />
      <Names
        babyNames={babyNames}
        searchTerm={searchTerm}
        favourites={favourites}
        setFavourites={setFavourites}
        singleName={singleName}
        setSingleName={setSingleName}
        gender={gender}
      />
    </div>
  );
}

export default App;
