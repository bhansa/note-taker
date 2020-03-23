import React, { Component } from "react";

class AddCard extends Component {
  render() {
    return (
      <div className="AddNewCard">
        <div className="AddNewCard__title">
          <input type="text" placeholder="Add title for note" />
        </div>
        <div className="AddNewCard__desc">
          <textarea></textarea>
        </div>
        <div className="AddNewCard__btngrp">
          <button id="Cancel">Cancel</button>
          <button id="Save">Save</button>
        </div>
      </div>
    );
  }
}

export default AddCard;
