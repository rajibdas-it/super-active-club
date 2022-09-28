import React, { useEffect, useState } from "react";

const Todos = () => {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    fetch("todos.json")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);
  return (
    <div className="w-[90%] mx-auto grid grid-cols-5 gap-4">
      <div className="todos-container col-span-4 border border-red-400">
        <div className="grid  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          <h1>HI</h1>
          <h1>HI</h1>
          <h1>HI</h1>
        </div>
      </div>
      <div className="cart-container border border-green-400">
        <h1>Hlw</h1>
      </div>
    </div>
  );
};

export default Todos;
