import { useState } from "react";
import React from "react";
import Button from "./Button";

// function EditTodo({ todo, editTodo, cancelEditTodo }) {
function EditTodo({ todo, updateTodo }) {
  const [value, setValue] = useState(todo.content);

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

  function handleClick() {
    if (value.length) {
      // editTodo(value);
      tryUpdateTodo({ ...todo, content: value, edit: false });
      setValue("");
    }
  }

  function handleChange(e) {
    const inputValue = e.target.value;
    setValue(inputValue);
  }

  function handleKeyDown(e) {
    if (e.code === "NumpadEnter" || e.code === "Enter") {
      // editTodo(value);
      tryUpdateTodo({ ...todo, content: value, edit: false });

      setValue("");
    }
  }

  return (
    <div className="mb-10">
      <input
        type="text"
        placeholder="Ajouter une todo"
        className="me-4"
        value={value} // pour faire de cet input un champ contrôlé (la valeur de cet input est toujours synchronisée avec l’état local du composant)
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      {/* <Button text="Annuler" onClick={cancelEditTodo}></Button> */}
      <Button
        text="Annuler"
        onClick={() => tryUpdateTodo({ ...todo, edit: false })}
      ></Button>
      <Button text="Sauvegarder" onClick={handleClick}></Button>
    </div>
  );
}

export default EditTodo;
