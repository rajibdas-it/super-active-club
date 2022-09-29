import React, { useEffect, useState } from "react";
import Todo from "../Todo/Todo";
import Cart from "../Cart/Cart";
import Answer from "../Answer/Answer";

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("todos.json")
      .then((res) => res.json())
      .then((data) => setTodos(data));
  }, []);

  const handleAddToList = (todo) => {
    setCart([...cart, todo]);
  }
  let takeTime = 0
  for (const item of cart) {
    takeTime = takeTime + item.time
  }

  return (
    // <div className="w-[90%] mx-auto grid grid-cols-5 gap-4"></div>
    // <div className="w-[90%] mx-auto flex flex-col lg:flex-row">
    <div>
      <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-col-3 lg:grid-cols-5 gap-4">
        {/* <div className="todos-container basis-1/2"> */}
        <div className="todos-container md:col-span-2 lg:col-span-4">
          <p className="text-2xl font-bold mt-10 text-blue-400">Super Active Club</p>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {todos.map((todo) => (
              <Todo key={todo.id} todo={todo} handleAddToList={handleAddToList}></Todo>
            ))}
          </div>
        </div>
        <div className="cart-container bg-white shadow-xl mb-7">
          <Cart takeTime={takeTime}></Cart>
        </div>
      </div>
    </div>
  );
};

export default Todos;
