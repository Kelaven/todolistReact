import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ todoList, deleteTodo }) {
  return todoList.length ? (
    <ul>
      {todoList.map((todo) => (
        <TodoItem todo={todo} deleteTodo={deleteTodo} key={todo._id} />
      ))}
    </ul>
  ) : (
    <p>Aucune todo pour le moment</p>
  );
}

export default TodoList;
