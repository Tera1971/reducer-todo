import React from "react";

const Todo = (props) => {
  return (
    <div
      className={props.completed ? "Todo completed" : "Todo"}
      onClick={() => props.toggleTodo(props.Todo.id)}
    >
      <p>{props.Todo.name}</p>
    </div>
  );
};

export default Todo;
