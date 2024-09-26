import React, { useState } from "react";
import Button from "./Button";

function AddTodo({ addTodo }) {
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  function handleClick() {
    if (value.length) {
      // setValue("");
      createTodo();
    }
  }

  async function createTodo() {
    // async fait que cette fonction va retourner une promesse
    try {
      setLoading(true);
      setError(null);
      const response = await fetch("https://restapi.fr/api/rtodo", {
        // await remplace then
        method: "POST",
        body: JSON.stringify({
          content: value,
          edit: false,
          done: false,
        }),
        headers: {
          "Content-type": "application/json",
        },
      });
      if (response.ok) {
        const todo = await response.json();
        addTodo(todo);
      } else {
        setError("Oups, une erreur !");
      }
    } catch (error) {
      setError(`Oups, une erreur ! : ${error}`);
    } finally {
      setLoading(false);
    }
    setValue("");
  }

  function handleChange(e) {
    const inputValue = e.target.value;
    setValue(inputValue);
  }

  function handleKeyDown(e) {
    if (e.code === "NumpadEnter" || e.code === "Enter") {
      // addTodo(value);
      // setValue("");
      createTodo();
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
      <Button
        text={loading ? "Chargement..." : "Ajouter"}
        onClick={handleClick}
      />
    </div>
  );
}

export default AddTodo;
