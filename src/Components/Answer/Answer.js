import React from 'react';

const Answer = () => {
    return (
        <div>
            <div tabIndex={0} className="collapse group mb-2 rounded-md">
                <div className="collapse-title bg-primary text-primary-content group-focus:bg-primary group-focus:text-secondary-content">
                    <p className='text-2xl font-bold'>How Does React Works?</p>
                </div>
                <div className="collapse-content bg-slate-300 text-primary-content group-focus:bg-slate-300 group-focus:text-secondary-content">
                    <p className='mt-2'><span className='text-xl font-bold underline'>Declarative:</span> Create simple views for each state in application and react will efficiently update and render just the right components when data changes.</p>
                    <p>Component Based: Application UI is wrapped inside a self-contained module known as a component. Components are used to define the visuals and interactions in applications.
                    </p>
                    <br />
                    <p>
                        <span className='text-xl font-bold underline'> Virtual DOM:</span> A virtual DOM object has similar properties as a real DOM object. It is a one-way data binding hence manipulating the virtual DOM is quick rather than updating the original DOM.
                    </p>
                    <br />
                    <p>
                        <span className='text-xl font-bold underline'>Event Handling:</span> React has a distinct way of handling events. Rather than directly targeting DOM events. React wraps them in their own event wrapper.
                    </p>
                    <br />
                    <p>
                        <span className='text-xl font-bold underline'>JavaScript extensions(JSX):</span> Using JSX while concise HTML/XML-like structures in the same file as you while javascript code then Babel will transform these expressions into actual JavaScript Code.
                    </p>
                    <br />
                    <p>
                        <span className='text-xl font-bold underline'>Performance:</span> React binds data with an application architecture called Flux controls. It helps us update the view for the user and with Flux can control the application workflow.
                    </p>
                    <br />
                </div>
            </div>
            <div tabIndex={1} className="collapse group mb-2 rounded-md">
                <div className="collapse-title bg-primary text-primary-content group-focus:bg-primary group-focus:text-secondary-content">
                    <p className='text-2xl font-bold'> What are the difference between Props and State?</p>
                </div>
                <div className="collapse-content bg-slate-300 text-primary-content group-focus:bg-slate-300 group-focus:text-secondary-content">
                    <h3 className='mt-2 text-xl font-bold underline'>Props</h3>
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
                    <p className='text-2xl font-bold'> How many reasons we use useEffect without data loading?</p>
                </div>
                <div className="collapse-content bg-slate-300 text-primary-content group-focus:bg-slate-300 group-focus:text-secondary-content">
                    <p className='mt-2'>React create a virtual dom</p>
                </div>
            </div>

        </div>
    );
};

export default Answer;