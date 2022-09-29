import React, { useEffect, useState } from 'react';
import MyInfo from "../MyInfo/MyInfo";
import Break from "../Break/Break";
import WorkingDetails from "../WorkingDetails/WorkingDetails";

const Cart = (props) => {
    const { takeTime } = props;
    const [breakTimes, setBreakTimes] = useState([])
    const [bTime, setBTime] = useState(0)
    useEffect(() => {
        fetch('breakTime.json')
            .then(res => res.json())
            .then(data => setBreakTimes(data))
    }, [])

    useEffect(() => {
        const findBreakTime = JSON.parse(localStorage.getItem('break-time'))
        let savedCart = 0
        if (findBreakTime) {
            savedCart = findBreakTime
        }
        setBTime(savedCart);
    }, []);

    const handleAddBreakTime = (bTime) => {
        setBTime(bTime.breakTime);
        localStorage.setItem('break-time', JSON.stringify(bTime.breakTime))
    }
    return (
        <div>
            <MyInfo></MyInfo>
            <div className="mt-6 ml-4">
                <h1 className="font-bold text-slate-800 ml-12">Add A Break</h1>
                <div className="flex justify-evenly bg-slate-200 gap-2 w-[83%] mx-auto p-5 rounded-md mt-3">
                    {
                        breakTimes.map(breakTime => <Break key={breakTime.id} breakTime={breakTime} handleAddBreakTime={handleAddBreakTime}></Break>)
                    }
                </div>
            </div>
            <WorkingDetails takeTime={takeTime} breakTime={bTime}></WorkingDetails>
        </div>
    );
};

export default Cart;