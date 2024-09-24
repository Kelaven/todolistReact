import React from "react";
import TodoItem from "./TodoItem";
import EditTodo from "./EditTodo";

function TodoList({
  todoList,
  deleteTodo,
  toggleTodo,
  toggleTodoEdit,
  editTodo,
  selectTodo,
}) {
  return todoList.length ? (
    <ul>
      {todoList.map((todo) =>
        todo.edit ? (
          <EditTodo
            key={todo._id}
            todo={todo}
            cancelEditTodo={() => toggleTodoEdit(todo._id)}
            editTodo={(content) => editTodo(todo._id, content)}
          />
        ) : (
          <TodoItem
            todo={todo}
            deleteTodo={deleteTodo}
            toggleTodo={() => toggleTodo(todo._id)}
            editTodo={() => toggleTodoEdit(todo._id)}
            key={todo._id}
            selectTodo={() => selectTodo(todo._id)}
          />
        )
      )}
    </ul>
  ) : (
    <p>Aucune todo pour le moment</p>
  );
}

export default TodoList;
