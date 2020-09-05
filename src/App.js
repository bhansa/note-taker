import React from "react";
import Filter from "./Filter/Filter";
import ButtonFloat from "./ButtonFloat/ButtonFloat";
import "./App.scss";
import dummy_card_data from "./dummy_data";
import Card from "./Card/Card";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: dummy_card_data,
      filteredResult: dummy_card_data,
      resultCount: 0,
      isResultVisible: false,
    };
  }
  handleInputChange = (event) => {
    let inputValue = event.target.value;
    // creating regex
    let regex = new RegExp(inputValue, "i");
    let filteredResult = this.state.data.filter(
      (val) => regex.test(val.title) === true || regex.test(val.desc)
    );
    this.setState({
      filteredResult: filteredResult,
      resultCount: filteredResult.length,
      isResultVisible: () => {
        return inputValue.length > 0;
      },
    });
    console.log(this.state.filteredResult.length);
  };
  render() {
    const { resultCount, isResultVisible, filteredResult } = this.state;
    return (
      <div className="App">
        <h1>Note Taker</h1>
        <ButtonFloat />
        <Filter
          handleInputChange={this.handleInputChange}
          resultCount={resultCount}
          isResultVisible={isResultVisible}
          data={this.state.data}
        />
        <Card data={filteredResult} />
      </div>
    );
  }
}

export default App;
