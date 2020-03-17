import React, { Component } from "react";
import "./Card.scss";

class Card extends Component {
  render() {
    return (
      <div className="Card-container">
        {this.props.data.map((data, index) => (
          <a href="/note/{index}" key={index}>
            <div className="Card">
              <h2>{data.title}</h2>
              <p>{data.desc}</p>
            </div>
          </a>
        ))}
      </div>
    );
  }
}

export default Card;
