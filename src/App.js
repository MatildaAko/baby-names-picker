import React from 'react';
import Names from './Names';
import './App.css';

function App() {
  const babyNames = require("./babyNamesData.json");

  return (<Names babyNames={babyNames}/>
  );
}

export default App;
