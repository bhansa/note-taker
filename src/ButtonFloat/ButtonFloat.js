import React, { Component } from "react";
import "./ButtonFloat.scss";

export class ButtonFloat extends Component {
  render() {
    return (
      <div className="ButtonFloat" tabIndex="1">
        <span className="ButtonFloat__icon" title="Add new note">
          &#43;
        </span>
      </div>
    );
  }
}

export default ButtonFloat;
