import React, { useState } from "react";

function ToDoItem(props) {
  var [isDone, setisDone] = useState(false);

  function handleClick() {
    setisDone(!isDone);
  }

  return (
    <li
      style={isDone ? { textDecoration: "line-through" } : null}
      onClick={handleClick}
    >
      {props.todo}
    </li>
  );
}

export default ToDoItem;
