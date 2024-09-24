import React from "react";

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
      <button
        onClick={(e) => {
          e.stopPropagation();
          toggleTodo();
        }}
        className="me-2"
      >
        Valider
      </button>
      <button
        onClick={(e) => {
          e.stopPropagation();
          editTodo();
        }}
        className="me-2"
      >
        Modifier
      </button>
      <button
        onClick={(e) => {
          e.stopPropagation();
          deleteTodo(todo._id);
        }}
        className="me-2"
      >
        Supprimer
      </button>
    </li>
  );
}

export default TodoItem;
