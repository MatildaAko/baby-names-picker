import React from "react";

const NamesButton = ({ name, index, onClick }) => {
  return (
      <button key={index} className={name.sex === "f" ? "gold" : "silver"} onClick={onClick}>
        {name.name}
      </button>
  );
}

export default NamesButton;