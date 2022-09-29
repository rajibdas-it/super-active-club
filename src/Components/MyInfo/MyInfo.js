import React from 'react';
import user from "./rajib.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faLocationDot } from '@fortawesome/free-solid-svg-icons'

const MyInfo = () => {
    return (
        <div className="info-section sm:ml-3 lg:ml-7 flex flex-col lg:flex-col items-center lg:justify-center mt-4" data-aos="zoom-out-up"
            data-aos-duration="1500">
            <img className="w-[50px] h-[50px] rounded-full" src={user} alt="" />
            <div className="name-info ml-4">
                <p className="font-semibold text-xl text-center">Rajib Das</p>
                <p> <span className='text-orange-300'><FontAwesomeIcon icon={faLocationDot} /></span> Dhaka, Bangladesh</p>
            </div>
            <div className="others-info mt-7 w-[80%] mx-auto bg-slate-200 rounded-md p-5">
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
        </div>

    );
};

export default MyInfo;