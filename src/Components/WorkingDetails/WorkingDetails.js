import React from "react";
import Swal from "sweetalert2";

const WorkingDetails = (props) => {
  const { takeTime, breakTime } = props;
  const handleActivity = () => {
    Swal.fire(
      "Congratulations!",
      "You have completed all of your Task.",
      "success"
    );
  };
  return (
    <div>
      <div className="mt-6 mr-4">
        <h1 className="ml-12 font-bold text-slate-800">Working Details</h1>
        <div className="ml-12 bg-slate-200 gap-10 w-[83%] mx-auto flex sm:flex-row lg:flex-row justify-between p-3 rounded-md mt-3">
          <p>Working Time</p>
          <p>{takeTime} mins</p>
        </div>
        <div className="ml-12 bg-slate-200 gap-14 w-[83%] mx-auto flex justify-between p-3 rounded-md mt-3">
          <p>Break Time</p>
          <p>{breakTime} mins</p>
        </div>
      </div>
      <div className=" mt-10 w-[80%] mx-auto text-center mb-5">
        <button
          onClick={handleActivity}
          className="ml-3 btn btn-primary w-[80%] text-white"
        >
          Activity Completed
        </button>
      </div>
    </div>
  );
};

export default WorkingDetails;
