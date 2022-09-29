import React from 'react';

const Break = () => {
    return (
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
    );
};

export default Break;