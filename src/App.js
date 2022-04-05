import React, {useState} from 'react';

import Search from './SearchList'
import './App.css';
import Favourites from './Favourites';
import Names from './Names';


function App() {
  const babyNames = require("./babyNamesData.json");
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className="App">
      <Search setSearchTerm={setSearchTerm} />
      <Favourites />
      <Names babyNames={babyNames} searchTerm={searchTerm} />
    </div>
  );
}

export default App;
