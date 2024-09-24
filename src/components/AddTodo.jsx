import React, { useState } from "react";
import Button from "./Button";

function AddTodo({ addTodo }) {
  const [value, setValue] = useState("");

  function handleClick() {
    if (value.length) {
      addTodo(value);
      setValue("");
    }
  }

  function handleChange(e) {
    const inputValue = e.target.value;
    setValue(inputValue);
  }

  function handleKeyDown(e) {
    if (e.code === "NumpadEnter" || e.code === "Enter") {
      addTodo(value);
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
      <Button text="Ajouter" onClick={handleClick} />
    </div>
  );
}

export default AddTodo;
