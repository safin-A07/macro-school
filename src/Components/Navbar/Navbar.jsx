import React from 'react';

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm ">
            <div className='w-10/12 mx-auto flex justify-between'>
                <h1 className='text-3xl text-red-700 '>Macro<span className='text-2xl text-black' >school</span></h1>
                <div className='flex gap-4'>
                    <button className="btn btn-neutral btn-dash">Home</button>
                    <button className="btn btn-neutral btn-dash">Course</button>
                    <button className="btn btn-neutral btn-dash">Special 9 10</button>
                    <button className="btn btn-neutral btn-dash">About us</button>
                </div>
                <button className="btn btn-outline btn-secondary">login /sign up</button>
            </div>
        </div>
    );
};

export default Navbar;