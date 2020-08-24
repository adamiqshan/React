import React from "react";

function ToDoItem(props) {
  return (
    <li
      onClick={() => {
        props.isDone(props.id);
      }}
    >
      {props.todo}
    </li>
  );
}

export default ToDoItem;
