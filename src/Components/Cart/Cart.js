import React from 'react';
import MyInfo from "../MyInfo/MyInfo";
import Break from "../Break/Break";
import WorkingDetails from "../WorkingDetails/WorkingDetails";

const Cart = (props) => {
    const { takeTime } = props;
    return (
        <div>
            <MyInfo></MyInfo>
            <Break></Break>
            <WorkingDetails takeTime={takeTime}></WorkingDetails>
        </div>
    );
};

export default Cart;