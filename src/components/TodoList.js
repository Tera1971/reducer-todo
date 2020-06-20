// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React, { component } from "react";

import Todo from "./Todo";

const TodoList = (props) => {
  return (
    <div className="Todo-List">
      {props.todo.map((todo) => (
        <Todo key={todo.id} Todo={todo} toggleTodo={props.toggleTodo} />
      ))}
      <button className="clear-btn" onClick={props.clearComplete} >
      Clear Complete
      </button>
    </div>
  );
};

export default TodoList;
