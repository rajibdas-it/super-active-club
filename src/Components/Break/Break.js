import React from 'react';

const Break = (props) => {
    const { handleAddBreakTime } = props
    const { breakTime } = props.breakTime

    return (
        <button onClick={() => handleAddBreakTime(props.breakTime)} className="rounded-full bg-white p-2" value={10}>
            {breakTime} mins
        </button>

    );
};

export default Break;