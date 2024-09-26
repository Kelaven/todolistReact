import React from "react";
import TodoItem from "./TodoItem";
import EditTodo from "./EditTodo";

function TodoList({
  todoList,
  deleteTodo,
  updateTodo,
  // toggleTodo,
  // toggleTodoEdit,
  // editTodo,
  // selectTodo,
}) {
  return todoList.length ? (
    <ul>
      {todoList.map((todo) =>
        todo.edit ? (
          <EditTodo
            key={todo._id}
            todo={todo}
            updateTodo={updateTodo}
            // cancelEditTodo={() => toggleTodoEdit(todo._id)}
            // editTodo={(content) => editTodo(todo._id, content)}
          />
        ) : (
          <TodoItem
            key={todo._id}
            todo={todo}
            deleteTodo={deleteTodo}
            updateTodo={updateTodo}
            // toggleTodo={() => toggleTodo(todo._id)}
            // editTodo={() => toggleTodoEdit(todo._id)}
            // selectTodo={() => selectTodo(todo._id)}
          />
        )
      )}
    </ul>
  ) : (
    <p>Aucune todo pour le moment</p>
  );
}

export default TodoList;
