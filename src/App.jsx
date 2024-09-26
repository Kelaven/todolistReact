import { useEffect, useState } from "react";
import "./App.css";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import themeContext from "./context/theme";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [theme, setTheme] = useState("primary");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function fetchTodoList(params) {
      try {
        const response = await fetch("https://restapi.fr/api/rtodo");
        if (response.ok) {
          const todos = await response.json();
          if (Array.isArray(todos)) {
            // si on récupère plusieurs todos (ça sera un tableau)
            setTodoList(todos);
          } else {
            // si on récupère une seule todo
            setTodoList([todos]);
          }
        } else {
          console.log("Oups, erreur");
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    fetchTodoList();
  }, []);

  // function addTodo(content) {
  //   const todo = {
  //     _id: crypto.randomUUID(),
  //     content,
  //     done: false,
  //     edit: false,
  //     selected: false,
  //   };
  //   setTodoList([...todoList, todo]); // récupérer toutes les anciennes todo avec le spread operator + celle que l'on vient de créer
  // }

  function addTodo(newTodo) {
    setTodoList([...todoList, newTodo]);
  }

  function deleteTodo(deletedTodo) {
    setTodoList(todoList.filter((todo) => todo._id !== deletedTodo._id));
  }

  function updateTodo(newTodo) {
    setTodoList(todoList.map((t) => (t._id === newTodo._id ? newTodo : t)));
  }

  function updateTodo(updatedTodo) {
    setTodoList(todoList.map((t) => (t._id === updatedTodo._id ? newTodo : t))); // méthode générique pour récupérer la nouvelle todo en paramètre et se charger de remplacer l'ancienne par la nouvelle
  }
  // function toggleTodo(id) {
  //   setTodoList(
  //     todoList.map((todo) =>
  //       todo._id === id
  //         ? {
  //             ...todo,
  //             done: !todo.done,
  //           }
  //         : todo
  //     )
  //   );
  // }

  // function toggleTodoEdit(id) {
  //   setTodoList(
  //     todoList.map((todo) =>
  //       todo._id === id
  //         ? {
  //             ...todo,
  //             edit: !todo.edit,
  //           }
  //         : todo
  //     )
  //   );
  // }
  // function editTodo(id, content) {
  //   setTodoList(
  //     todoList.map((todo) =>
  //       todo._id === id ? { ...todo, edit: false, content } : todo
  //     )
  //   );
  // }

  // function selectTodo(id) {
  //   setTodoList(
  //     todoList.map((todo) =>
  //       todo._id === id
  //         ? {
  //             ...todo,
  //             selected: true,
  //           }
  //         : {
  //             ...todo,
  //             selected: false,
  //           }
  //     )
  //   );
  // }

  function handleChange(e) {
    setTheme(e.target.value);
  }

  return (
    <themeContext.Provider value={theme}>
      <div className="p-20">
        <div className="card">
          <h1 className="mb-6">To do list</h1>
          <select className="mb-12" onChange={handleChange} value={theme}>
            <option value="primary">Thème 1</option>
            <option value="secondary">Thème 2</option>
          </select>
          <AddTodo addTodo={addTodo} />
          {loading ? (
            <p>Chargement en cours...</p>
          ) : (
            <TodoList
              todoList={todoList}
              deleteTodo={deleteTodo}
              updateTodo={updateTodo}
              // toggleTodo={toggleTodo}
              // toggleTodoEdit={toggleTodoEdit}
              // editTodo={editTodo}
              // selectTodo={selectTodo}
            />
          )}
        </div>
      </div>
    </themeContext.Provider>
  );
}

export default App;
