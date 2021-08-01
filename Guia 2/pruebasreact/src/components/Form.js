import React, { useState } from "react";
import Todo from "./Todo";

const Form = () => {
  const [todo, setTodo] = useState({});
  const [todos, setTodos] = useState([
    { todo: "todo1" },
    { todo: "todo2" },
    { todo: "todo3" },
  ]);

  const handleChange = (e) => setTodo({ [e.target.name]: e.target.value });
  const handleClick = (e) => {
    if (Object.keys(todo).length === 0 || todo.todo.trim() === "") {
      alert("el Campo no puede estar vacio");
      return;
    }
    setTodos([...todos, todo]);
  };

  const deleteTodo = (indice) => {
    const newTodo = [...todos];
    newTodo.splice(indice, 1);
    setTodos(newTodo);
  };

  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
        <label>Agregar Tarea</label> <br />
        <input type='text' name='todo' onChange={handleChange} />
        <button onClick={handleClick}>Agregar</button>
      </form>
      {todos.map((value, index) => (
        <Todo
          todo={value.todo}
          key={index}
          index={index}
          deleteTodo={deleteTodo}
        />
      ))}
    </>
  );
};

export default Form;
