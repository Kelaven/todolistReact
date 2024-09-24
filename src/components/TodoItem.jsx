import React from "react";

function TodoItem({ todo, deleteTodo }) {
  return (
    <li className="mb-4">
      <span className="me-4">{todo.content}</span>
      <button className="me-2">Valider</button>
      <button className="me-2">Modifier</button>
      <button onClick={() => deleteTodo(todo._id)} className="me-2">
        Supprimer
      </button>
    </li>
  );
}

export default TodoItem;
