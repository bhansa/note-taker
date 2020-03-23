import React from "react";
import "./Filter.scss";
import Card from "../Card/Card";
import ShowResultText from "../ShowResultText/ShowResultText";

class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data,
      filteredResult: this.props.data,
      resultCount: 0,
      isResultVisible: false
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  handleInputChange = event => {
    let inputValue = event.target.value;
    // creating regex
    let regex = new RegExp(inputValue, "i");
    let filteredResult = this.state.data.filter(
      val => regex.test(val.title) === true || regex.test(val.desc)
    );
    this.setState({
      filteredResult: filteredResult,
      resultCount: filteredResult.length,
      isResultVisible: () => {
        return inputValue.length > 0;
      }
    });
    console.log(this.state.filteredResult.length);
  };
  render() {
    return (
      <div>
        <div className="Filter">
          <input
            type="text"
            placeholder="Search your notes"
            onKeyUp={this.handleInputChange}
          />
        </div>
        {this.state.isResultVisible && (
          <ShowResultText resultCount={this.state.resultCount} />
        )}
        <Card data={this.state.filteredResult} />
      </div>
    );
  }
}

export default Filter;
