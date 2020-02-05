import React from "react";
import Card from "./Card/Card";
import Filter from "./Filter/Filter";
import "./App.scss";
import dummy_card_data from "./dummy_data";
function App() {
  return (
    <div className="App">
      <h1>Note Taker</h1>
      <Filter />
      <div className="Card-container">
        {dummy_card_data.map((data, key) => (
          <Card title={data.title} desc={data.desc} key={key} />
        ))}
      </div>
    </div>
  );
}

export default App;
