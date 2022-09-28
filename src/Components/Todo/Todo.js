import React from "react";

const Todo = (props) => {
  const { todo } = props;
  const { id, img, title, description, time } = todo;
  console.log(typeof time);
  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={img} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <p>
          <small>Time Required: {time} mins</small>
        </p>
        <div className="card-actions">
          <button className="btn btn-primary w-full">Add to List</button>
        </div>
      </div>
    </div>
  );
};

export default Todo;
