import React from "react";
import Apple from "../icons/Apple";
import PlayWhite from "../icons/Play";

const Store = ({ name }) => {
  return (
    <div className="market">
      {name === "App Store" ? <Apple /> : <PlayWhite />}
      <p>{name}</p>
    </div>
  );
};

export default Store;
