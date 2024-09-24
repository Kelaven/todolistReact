import React from "react";
import Button from "./Button";

function TodoItem({ todo, deleteTodo, toggleTodo, editTodo, selectTodo }) {
  return (
    <li
      onClick={selectTodo}
      className={`mb-4 ${todo.selected ? "selected" : ""}`}
    >
      <span className="me-4">
        {todo.content}
        {todo.done && " ✓"}
      </span>
      <Button
        text="valider"
        onClick={(e) => {
          e.stopPropagation();
          toggleTodo();
        }}
      ></Button>
      <Button
        text="Modifier"
        onClick={(e) => {
          e.stopPropagation();
          editTodo();
        }}
      ></Button>
      <Button
        text="Supprimer"
        onClick={(e) => {
          e.stopPropagation();
          deleteTodo(todo._id);
        }}
      ></Button>
    </li>
  );
}

export default TodoItem;
