import React from "react";
import { useState } from "react";

function Search({ updateDisplayItems, rerenderDefault }) {
  const [inputItems, setInputItems] = useState("");

  function handleFocus(e) {
    setInputItems(e.target.value);
    updateDisplayItems(inputItems);
  }

  function handleBlur(e) {
    rerenderDefault();
  }

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input
          className="prompt"
          name={inputItems}
          onChange={handleFocus}
          onBlur={handleBlur}
        />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
