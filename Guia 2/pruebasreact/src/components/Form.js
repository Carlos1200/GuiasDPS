import React, { useState } from "react";
import Todo from "./Todo";

const Form = () => {
  const [todo, setTodo] = useState({ todo: "",cantidad:null });
  const [todos, setTodos] = useState([
    { todo: "todo1",cantidad:5 },
    { todo: "todo2",cantidad:7 },
    { todo: "todo3",cantidad:2 },
  ]);


  const handleChange = (e) => setTodo({
      ...todo,
      [e.target.name]: e.target.value
    });
  const handleClick = (e) => {
    if (Object.keys(todo).length === 0 || todo.todo.trim() === "" || isNaN(todo.cantidad)) {
      alert("el Campo no puede estar vacio y cantidad debe de ser un numero");
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
        <input type='text' name='cantidad' onChange={handleChange} />
        <button onClick={handleClick}>Agregar</button>
      </form>
      {todos.map((value, index) => (
        <Todo
          todo={value.todo}
          key={index}
          index={index}
          deleteTodo={deleteTodo}
          cantidad={value.cantidad}
        />
      ))}
    </>
  );
};

export default Form;
