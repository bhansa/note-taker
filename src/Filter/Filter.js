import React from "react";
import "./Filter.scss";

class Filter extends React.Component {
  render() {
    return (
      <div className="Filter">
        <input type="text" placeholder="Search your notes" />
      </div>
    );
  }
}

export default Filter;
