import React from "react";

const Names = (props) => {
  const { babyNames, searchTerm } = props;
  console.log(props)
  return babyNames
    .sort((a, b) => (a.name === b.name ? 0 : a.name > b.name ? 1 : -1))
    .filter((val) => {
      if (searchTerm === "") {
        return val;
      } else if (val.name.toLowerCase().includes(searchTerm)) {
        return val;
      }
    })
    .map((name, index) => (
      <button key={index} className={name.sex === "f" ? "gold" : "silver"}>
        {name.name}
      </button>
    ));
}

export default Names;