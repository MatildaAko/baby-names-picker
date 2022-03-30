import React from "react";


const Names = (props) => {
  const { babyNames } = props;
  console.log(babyNames)
  return (babyNames.sort((a, b) => a.name === b.name ? 0 : a.name > b.name ? 1 : -1).map((name, index) => <button key={index} className={name.sex === "f" ? "gold" : "silver"}>{name.name}</button>))
}

export default Names;