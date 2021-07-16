import React from "react";

const CardComponent = ({ show, title, description }) => {
  return show ? (
    <>
      <h1>{title}</h1>

      <p>{description}</p>
    </>
  ) : (
    <h1>{title}</h1>
  );
};

export default CardComponent;
