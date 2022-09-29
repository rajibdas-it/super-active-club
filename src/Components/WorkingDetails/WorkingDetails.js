import React from 'react';

const WorkingDetails = (props) => {
    const { takeTime } = props
    return (
        <div>
            <div className="mt-6 ml-4">
                <h1 className="ml-12 font-bold text-slate-800">Working Details</h1>
                <div className="ml-12 bg-slate-200 gap-10 w-[83%] mx-auto flex sm:flex-row lg:flex-row justify-between p-3 rounded-md mt-3">
                    <p>Working Time</p>
                    <p>{takeTime} mins</p>
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
    );
};

export default WorkingDetails;