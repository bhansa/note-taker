import React from "react";
import "./Filter.scss";
import ShowResultText from "../ShowResultText/ShowResultText";

const Filter = ({ resultCount, isResultVisible, handleInputChange }) => {
  return (
    <>
      <div className="Filter">
        <input
          type="text"
          placeholder="Search your notes"
          onKeyUp={(event) => {
            handleInputChange(event);
          }}
        />
      </div>
      {isResultVisible && <ShowResultText resultCount={resultCount} />}
    </>
  );
};

export default Filter;
