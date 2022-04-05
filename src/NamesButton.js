import React, {useState} from "react";

const NamesButton = ({ name, index }) => {
  const [likeName, setLikeName] = useState(false);
  function changeFavourites() {
    setLikeName(!likeName);
    console.log(likeName);
  }
  return (
      <button key={index} className={name.sex === "f" ? "gold" : "silver"} onClick={changeFavourites}>
        {name.name}
      </button>
  );
}

export default NamesButton;