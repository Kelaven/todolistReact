import React, { useState } from "react";
import Button from "./Button";

// function TodoItem({ todo, deleteTodo, toggleTodo, editTodo, selectTodo }) {
function TodoItem({ todo, deleteTodo, updateTodo }) {
  const [loading, setLoading] = useState(false);
  async function tryUpdateTodo(newTodo) {
    try {
      setLoading(true);
      const { _id, ...newTodoWithoutId } = newTodo;
      const response = await fetch(`https://restapi.fr/api/rtodo/${todo._id}`, {
        method: "PATCH", // modifier des propriétés du document qui en BDD, là où PUT a vocation à remplacer le document en entier par un nouveau
        body: JSON.stringify(newTodoWithoutId),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        const newTodo = await response.json();
        updateTodo(newTodo);
      } else {
        console.log("Oups erreur");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  async function handleClickDeleteTodo() {
    try {
      setLoading(true);
      const response = await fetch(`https://restapi.fr/api/rtodo/${todo._id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        deleteTodo(todo);
      } else {
        console.log("oups erreur");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <li
      // onClick={selectTodo}
      className={`mb-4 ${todo.selected ? "selected" : ""}`}
    >
      {loading ? (
        <span className="me-4">Chargement...</span>
      ) : (
        <span className="me-4">
          {todo.content}
          {todo.done && " ✓"}
        </span>
      )}

      <Button
        text="valider"
        onClick={(e) => {
          e.stopPropagation();
          // toggleTodo();
          // updateTodo({ ...todo, done: !todo.done });
          tryUpdateTodo({ ...todo, done: !todo.done });
        }}
      ></Button>
      <Button
        text="Modifier"
        onClick={(e) => {
          e.stopPropagation();
          // editTodo();
          // updateTodo({ ...todo, edit: true });
          tryUpdateTodo({ ...todo, edit: true });
        }}
      ></Button>
      <Button
        text="Supprimer"
        onClick={(e) => {
          e.stopPropagation();
          handleClickDeleteTodo();
        }}
      ></Button>
    </li>
  );
}

export default TodoItem;
