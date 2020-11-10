import React from "react";
import "./Card.scss";

const Card = ({ data, index }) => {
  return (
    <a href="/note/{index}">
      <div className="Card">
        <h2>{data.title}</h2>
        <p>{data.description}</p>
      </div>
    </a>
  );
};

export default Card;
