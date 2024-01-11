import React from "react";

function Menu({ name }) {
  return (
    <a href="www.google.com" className="menu">
      <p>{name}</p>
    </a>
  );
}

export default Menu;
