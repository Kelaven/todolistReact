import { useState } from "react";
import "./App.css";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

function App() {
  const [todoList, setTodoList] = useState([]);

  function addTodo(content) {
    const todo = {
      id: crypto.randomUUID,
      content,
      done: false,
      edit: false,
    };
    setTodoList([...todoList, todo]); // récupérer toutes les anciennes todo avec le spread operator + celle que l'on vient de créer
  }

  return (
    <div className="p-20">
      <div className="card">
        <h1 className="mb-20">To do list</h1>
        <AddTodo addTodo={addTodo} />
        <TodoList />
      </div>
    </div>
  );
}

export default App;
