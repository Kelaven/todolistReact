import React from "react";

function TodoItem({ todo, deleteTodo, toggleTodo, editTodo }) {
  return (
    <li className="mb-4">
      <span className="me-4">
        {todo.content}
        {todo.done && " ✓"}
      </span>
      <button onClick={toggleTodo} className="me-2">
        Valider
      </button>
      <button onClick={editTodo} className="me-2">
        Modifier
      </button>
      <button onClick={() => deleteTodo(todo._id)} className="me-2">
        Supprimer
      </button>
    </li>
  );
}

export default TodoItem;
