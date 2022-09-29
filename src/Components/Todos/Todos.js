import React, { useEffect, useState } from "react";
import Todo from "../Todo/Todo";
import user from "./rajib.jpg";

const Todos = () => {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    fetch("todos.json")
      .then((res) => res.json())
      .then((data) => setTodos(data));
  }, []);
  console.log(todos);
  return (
    // <div className="w-[90%] mx-auto grid grid-cols-5 gap-4"></div>
    <div className="w-[90%] mx-auto flex flex-col lg:flex-row">
      {/* <div className="todos-container col-span-4"> */}
      <div className="todos-container basis-1/2">
        <p className="text-2xl font-bold mt-10">Super Active Club</p>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {todos.map((todo) => (
            <Todo key={todo.id} todo={todo}></Todo>
          ))}
        </div>
      </div>
      <div className="cart-container bg-white shadow-xl basis-1/4">
        <h1>Aside Bar</h1>
      </div>
    </div>
  );
};

export default Todos;
