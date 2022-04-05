import React, {useState} from 'react';

import Search from './SearchList'
import './App.css';
import Favourites from './Favourites';
import Names from './Names';


function App() {
  const babyNames = require("./babyNamesData.json");
  const [searchTerm, setSearchTerm] = useState("");
  const [favourites, setFavourites] = useState([])
  const [singleName, setSingleName] = useState(babyNames)
  return (
    <div className="App">
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Favourites
        favourites={favourites}
        setFavourites={setFavourites} singleName={singleName}
        setSingleName={setSingleName} />
      <Names
        babyNames={babyNames}
        searchTerm={searchTerm}
        favourites={favourites}
        setFavourites={setFavourites}
        singleName={singleName}
        setSingleName={setSingleName}
      />
    </div>
  );
}

export default App;
