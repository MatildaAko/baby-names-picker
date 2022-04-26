import React from "react";


const genders = [
  {
    name: "All",
    src: "far fa-venus-mars",
    alt: "all genders image",
    value: "both",
    class: "mixed",
  },
  {
    name: "Girl",
    src: "far fa-venus",
    alt: "male genders image",
    value: "f",
    class: "gold",
  },
  {
    name: "Boy",
    src: "far fa-mars",
    alt: "male genders image",
    value: "m",
    class: "silver",
  },
];

const GenderButton = ({setGender}) => {
  return (
    <div className="radio-toolbar">
      {genders.map((gender) => {
        return (
          <button className={gender.class} id={gender.value} name="genders" value={gender.value} onClick={() => setGender(gender.value)} >
            { gender.name }
        </button>
        );
      })}
    </div>
  );
}

export default GenderButton;

/* const GenderButton = () => {
  return (
    <div className="radio-toolbar">
      <label>
        <input type="radio" id="both" name="genders" value="both" />
      </label>

      <label>
        <input type="radio" id="girl" name="genders" value="girl" />
      </label>

      <label>
        <input type="radio" id="boy" name="genders" value="boy" />
      </label>
    </div>
  );
}

export default GenderButton; */
