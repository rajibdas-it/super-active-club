import React from 'react';

const Answer = () => {
    return (
        <div>
            <div tabIndex={0} className="collapse group mb-2 rounded-md">
                <div className="collapse-title bg-primary text-primary-content group-focus:bg-primary group-focus:text-secondary-content">
                    How Does React Works?
                </div>
                <div className="collapse-content bg-slate-300 text-primary-content group-focus:bg-slate-300 group-focus:text-secondary-content">
                    <p>React create a virtual dom</p>
                </div>
            </div>
            <div tabIndex={1} className="collapse group mb-2 rounded-md">
                <div className="collapse-title bg-primary text-primary-content group-focus:bg-primary group-focus:text-secondary-content">
                    What are the difference between Props and State?
                </div>
                <div className="collapse-content bg-slate-300 text-primary-content group-focus:bg-slate-300 group-focus:text-secondary-content">
                    <h3 className='text-xl font-bold underline'>Props</h3>
                    <p>1. Props are read-only.</p>
                    <p>2. Props are immutable.</p>
                    <p>3. Props allow you to pass data from one component to other components as an argument.</p>
                    <p>4. Props can be accessed by the child component.</p>
                    <p>5. Props make components reusable.</p>
                    <br />
                    <h3 className='text-xl font-bold underline'>States</h3>
                    <p>1. State changes can be asynchronous.</p>
                    <p>2. State is mutable. </p>
                    <p>3. State holds information about the components.</p>
                    <p>4. State cannot be accessed by child components.</p>
                    <p>5. State cannot make components reusable.</p>
                </div>
            </div>
            <div tabIndex={3} className="collapse group mb-2 rounded-md">
                <div className="collapse-title bg-primary text-primary-content group-focus:bg-primary group-focus:text-secondary-content">
                    How Does React Works?
                </div>
                <div className="collapse-content bg-slate-300 text-primary-content group-focus:bg-slate-300 group-focus:text-secondary-content">
                    <p>React create a virtual dom</p>
                </div>
            </div>

        </div>
    );
};

export default Answer;