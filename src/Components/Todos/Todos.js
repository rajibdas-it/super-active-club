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
    // <div className="w-[90%] mx-auto flex flex-col lg:flex-row">
      <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-col-3 lg:grid-cols-5 gap-4">
      {/* <div className="todos-container basis-1/2"> */}
      <div className="todos-container md:col-span-2 lg:col-span-4"> 
        <p className="text-2xl font-bold mt-10">Super Active Club</p>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {todos.map((todo) => (
            <Todo key={todo.id} todo={todo}></Todo>
          ))}
        </div>
      </div>
      <div className="cart-container bg-white shadow-xl">
        <div className="info-section sm:ml-3 lg:ml-7 flex flex-col lg:flex-col items-center lg:justify-center mt-4">
          <img className="w-[50px] h-[50px] rounded-full" src={user} alt="" />
          <div className="name-info ml-4">
            <p className="font-semibold text-xl text-center">Rajib Das</p>
            <p>Software Enginner</p>
          </div>
        </div>

        <div className="others-info mt-7 w-[80%] mx-auto bg-slate-200 rounded-md p-3">
          <div className="w-[80%] mx-auto flex flex-row md:flex-row lg:flex-row justify-evenly gap-6 text-slate-600 font-semibold">
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
            <h1 className="font-bold text-slate-800 ml-12">Add A Break</h1>
            <div className="flex justify-evenly bg-slate-200 gap-2 w-[83%] mx-auto p-3 rounded-md mt-3">
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
    <h1 className="ml-12 font-bold text-slate-800">Working Details</h1>
    <div className="ml-12 bg-slate-200 gap-10 w-[83%] mx-auto flex sm:flex-row lg:flex-col justify-between p-3 rounded-md mt-3">
      <p>Exercise Time</p>
      <p>200 mins</p>
    </div>
    <div className="ml-12 bg-slate-200 gap-14 w-[83%] mx-auto flex justify-between p-3 rounded-md mt-3">
      <p>Break Time</p>
      <p>200 mins</p>
    </div>
    </div>
          <div className=" mt-10 w-[80%] mx-auto text-center">
          <button className="ml-3 btn btn-primary w-[80%] text-white">
            Activity Completed
          </button>
          </div>

      </div>
    </div>
  );
};

export default Todos;
