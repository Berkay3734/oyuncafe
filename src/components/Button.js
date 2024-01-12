import React from "react";

const Button = ({ logo, name, style }) => {
  return (
    <button className="button" style={style}>
      {logo ? logo : null}
      <p>{name}</p>
    </button>
  );
};

export default Button;
