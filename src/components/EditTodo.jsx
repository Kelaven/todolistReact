import { useState } from "react";
import React from "react";
import Button from "./Button";

function EditTodo({ todo, editTodo, cancelEditTodo }) {
  const [value, setValue] = useState(todo.content);

  function handleClick() {
    if (value.length) {
      editTodo(value);
      setValue("");
    }
  }

  function handleChange(e) {
    const inputValue = e.target.value;
    setValue(inputValue);
  }

  function handleKeyDown(e) {
    if (e.code === "NumpadEnter" || e.code === "Enter") {
      editTodo(value);
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
      <Button text="Annuler" onClick={cancelEditTodo}></Button>
      <Button text="Sauvegarder" onClick={handleClick}></Button>
    </div>
  );
}

export default EditTodo;
