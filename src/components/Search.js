import React from "react";
import { useState } from "react";

function Search({ handleChange }) {
  // function handleChange(e) {
  //   const inputValue = e.target.value;
  //   setInputItems(inputValue);
  //   if (e.keyCode === 8) {
  //     // check if backspace key is pressed
  //     updateDisplayItems(inputValue.slice(0, -1)); // remove the last character and update display items
  //   } else {
  //     updateDisplayItems(inputValue);
  //   }
  // }

  // function handleChange(e) {
  //   console.log(e.key);
  //   const inputValue = e.target.value;
  //   setInputItems(inputValue);
  //   if (e.keycode === "8" && inputValue.length > 0) {
  //     // check if backspace key is pressed and input is not empty
  //     updateDisplayItems(inputValue.slice(0, -1)); // remove the last character and update display items
  //   } else {
  //     updateDisplayItems(inputValue);
  //   }
  // }

  // function handleChange(e) {
  //   console.log(e.keycode);
  //   const inputValue = e.target.value;
  //   setInputItems(inputValue);
  //   if (e.key === "Backspace") {
  //     updateDisplayItems(inputValue.slice(0, -1));
  //   } else {
  //     updateDisplayItems(inputValue);
  //   }
  // }

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" onChange={handleChange} />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
