import { useState } from "react";
import "./App.css";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

function App() {
  const [todoList, setTodoList] = useState([]);

  function addTodo(content) {
    const todo = {
      _id: crypto.randomUUID(),
      content,
      done: false,
      edit: false,
      selected: false,
    };
    setTodoList([...todoList, todo]); // récupérer toutes les anciennes todo avec le spread operator + celle que l'on vient de créer
  }

  function deleteTodo(id) {
    setTodoList(todoList.filter((todo) => todo._id !== id));
  }

  function toggleTodo(id) {
    setTodoList(
      todoList.map((todo) =>
        todo._id === id
          ? {
              ...todo,
              done: !todo.done,
            }
          : todo
      )
    );
  }
  function toggleTodoEdit(id) {
    setTodoList(
      todoList.map((todo) =>
        todo._id === id
          ? {
              ...todo,
              edit: !todo.edit,
            }
          : todo
      )
    );
  }
  function editTodo(id, content) {
    setTodoList(
      todoList.map((todo) =>
        todo._id === id ? { ...todo, edit: false, content } : todo
      )
    );
  }
  function selectTodo(id) {
    setTodoList(
      todoList.map((todo) =>
        todo._id === id
          ? {
              ...todo,
              selected: true,
            }
          : {
              ...todo,
              selected: false,
            }
      )
    );
  }

  return (
    <div className="p-20">
      <div className="card">
        <h1 className="mb-20">To do list</h1>
        <AddTodo addTodo={addTodo} />
        <TodoList
          todoList={todoList}
          deleteTodo={deleteTodo}
          toggleTodo={toggleTodo}
          toggleTodoEdit={toggleTodoEdit}
          editTodo={editTodo}
          selectTodo={selectTodo}
        />
      </div>
    </div>
  );
}

export default App;
