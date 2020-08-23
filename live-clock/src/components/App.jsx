import React, { useState } from "react";

function App() {
  let [time, setTime] = useState(new Date().toLocaleTimeString());

  function timer() {
    setTime((time = new Date().toLocaleTimeString()));
  }

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={timer}>Get Time</button>
    </div>
  );
}

export default App;
