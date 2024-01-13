import React from "react";

const PlayerCard = ({ number, name, skor }) => {
  return (
    <div className="card">
      <h1>{number}</h1>
      <h3 className="nickname">{name}</h3>
      <p style={{ color: "#F5B60F", marginTop: "5px" }}>{skor}</p>
    </div>
  );
};

export default PlayerCard;
