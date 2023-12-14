import React from "react";
import "./chem.jpg";
const Card = ({ img, proimg, title, button }) => {
  return (
    <div className="card">
      <img src={img} alt={title} />
      <img src={proimg} alt={title} />
      <h2>{title}</h2>
      <button>{button}</button>
    </div>
  );
};

export default Card;
