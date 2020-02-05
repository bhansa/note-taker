import React, { Component } from "react";
import "./Card.scss";

class Card extends Component {
  constructor(props) {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className="Card">
        <h2>{this.props.title}</h2>
        <p>{this.props.desc}</p>
      </div>
    );
  }
}

export default Card;
