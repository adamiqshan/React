import React, { useState } from "react";

function App() {
  var [hover, sethover] = useState(false);
  var [name, setname] = useState("");
  var [headName, setheadName] = useState("");

  function mouseHover() {
    sethover(true);
  }

  function mouseOut() {
    sethover(false);
  }

  function handleChange(event) {
    setname(event.target.value);
  }

  function handleSubmit() {
    setheadName(name);
  }

  return (
    <div className="container">
      <h1>Hello {headName}</h1>
      <input
        onChange={handleChange}
        type="text"
        placeholder="What's your name?"
        value={name}
      />
      <button
        onClick={handleSubmit}
        onMouseOver={mouseHover}
        onMouseOut={mouseOut}
        style={{ backgroundColor: hover ? "black" : "white" }}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
