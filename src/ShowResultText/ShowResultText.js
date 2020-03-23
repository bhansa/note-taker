import React, { Component } from "react";

class ShowResultText extends Component {
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        Found <strong>{this.props.resultCount}</strong> results
      </div>
    );
  }
}

export default ShowResultText;
