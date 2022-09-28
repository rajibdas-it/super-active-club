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
    <div className="w-[90%] mx-auto grid grid-cols-6 gap-4">
      <div className="todos-container col-span-4">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {todos.map((todo) => (
            <Todo key={todo.id} todo={todo}></Todo>
          ))}
        </div>
      </div>
      <div className="cart-container bg-white col-span-2 shadow-xl">
        <div className="info-section ml-2 flex mt-4">
          <img className="w-[50px] h-[50px] rounded-full" src={user} alt="" />
          <div className="name-info ml-3">
            <p className="font-semibold text-xl">Rajib Das</p>
            <p>Software Enginner</p>
          </div>
        </div>
        <div className="others-info mt-7 w-[90%] mx-auto bg-slate-200 rounded-md p-3">
          <div className="w-[80%] mx-auto flex gap-6 text-slate-600 font-semibold">
            <div className="weight">
              <p>
                <span className="text-2xl font-bold text-black">85</span>kg
              </p>
              <p>Weight</p>
            </div>
            <div className="height">
              <p>
                <span className="text-2xl font-bold text-black">5.7</span>
              </p>
              <p>Height</p>
            </div>
            <div className="age">
              <p>
                <span className="text-2xl font-bold text-black">31</span>yrs
              </p>
              <p>Age</p>
            </div>
          </div>
        </div>
        <div className="mt-6 ml-4">
          <h1 className="font-bold text-slate-800">Add A Break</h1>
          <div className="btn-group bg-slate-200 gap-2 w-[95%] p-3 rounded-md mt-3">
            <button className="rounded-full bg-white p-2" value={10}>
              10s
            </button>
            <button className="rounded-full bg-white p-2" value={20}>
              20s
            </button>
            <button className="rounded-full bg-white p-2" value={30}>
              30s
            </button>
            <button className="rounded-full bg-white p-2" value={40}>
              40s
            </button>
            <button className="rounded-full bg-white p-2" value={50}>
              50s
            </button>
          </div>
        </div>
        <div className="mt-6 ml-4">
          <h1 className="font-bold text-slate-800">Working Details</h1>
          <div className="btn-group bg-slate-200 gap-10 w-[95%] p-3 rounded-md mt-3">
            <p>Exercise Time</p>
            <p>200 mins</p>
          </div>
          <div className="btn-group bg-slate-200 gap-14 w-[95%] p-3 rounded-md mt-3">
            <p>Break Time</p>
            <p>200 mins</p>
          </div>
        </div>
        <div className="mt-10 w-[80%] mx-auto">
          <button className="btn btn-primary w-full text-white">
            Activity Completed
          </button>
        </div>
      </div>
    </div>
  );
};

export default Todos;
