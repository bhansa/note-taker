import React from "react";
import Filter from "./Filter/Filter";
import ButtonFloat from "./ButtonFloat/ButtonFloat";
import "./App.scss";
import dummy_card_data from "./dummy_data";
class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      data: dummy_card_data
    };
  }
  render() {
    return (
      <div className="App">
        <h1>Note Taker</h1>
        <ButtonFloat />
        <Filter data={this.state.data} />
      </div>
    );
  }
}

export default App;
