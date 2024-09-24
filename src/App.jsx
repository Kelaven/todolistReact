import { useState } from "react";
import "./App.css";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="flex flex-row justify-center items-center p-20">
      <div className="card p-20">
        <h1 className="mb-20">To do list</h1>
        <AddTodo />
        <TodoList />
      </div>
    </div>
  );
}

export default App;
