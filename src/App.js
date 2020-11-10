import React, { useState, useEffect } from "react";
import Filter from "./Filter/Filter";
import ButtonFloat from "./ButtonFloat/ButtonFloat";
import Card from "./Card/Card";
import dummy_card_data from "./dummy_data";
import "./App.scss";

import { db } from "./firebase";

const App = () => {
  const [notes, setNotes] = useState([
    // data: dummy_card_data,
    // filteredResult: dummy_card_data,
    // resultCount: 0,
    // isResultVisible: false,
  ]);
  // function handleInputChange(event){
  //   let inputValue = event.target.value;
  //   // creating regex
  //   let regex = new RegExp(inputValue, "i");
  //   let state.filteredResult = this.state.data.filter(
  //     (val) => regex.test(val.title) === true || regex.test(val.desc)
  //   );
  //   // this.setState({
  //   //   filteredResult: filteredResult,
  //   //   resultCount: filteredResult.length,
  //   //   isResultVisible: () => {
  //   //     return inputValue.length > 0;
  //   //   },
  //   // });
  //   console.log(this.state.filteredResult.length);
  // };
  useEffect(() => {
    db.collection("notes").onSnapshot((snapshot) => {
      setNotes(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);
  return (
    <div className="App">
      <h1>Note Taker</h1>
      <ButtonFloat />
      {/* <Filter
        handleInputChange={this.handleInputChange}
        resultCount={state.resultCount}
        isResultVisible={state.isResultVisible}
        data={this.state.data}
      /> */}
      <div className="Card-container">
        {notes.map((note, index) => {
          return <Card data={note} key={index} />;
        })}
      </div>
    </div>
  );
};

export default App;
