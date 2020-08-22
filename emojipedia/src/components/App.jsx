import React from "react";
import Dict from "./Dict";
import emojipedia from "../emojipedia";

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">
        {emojipedia.map((emoji) => (
          <Dict
            emoji={emoji.emoji}
            name={emoji.name}
            means={emoji.meaning}
            key={emoji.id}
          />
        ))}
      </dl>
    </div>
  );
}

export default App;
