import React from "react";
import { useNavigate } from "react-router";

const Button = ({ logo, name, style, page }) => {
  const navigate = useNavigate();
  return (
    <button className="button" style={style} onClick={() => navigate(page)}>
      {logo ? logo : null}
      <p>{name}</p>
    </button>
  );
};

export default Button;
