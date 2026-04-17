import React from 'react';
import { NavLink } from 'react-router';
import { IoHomeOutline } from "react-icons/io5";
import { IoTimeOutline } from "react-icons/io5";
import { ImStatsDots } from "react-icons/im";

const NavBar = () => {

    return (
        <div className="navbar bg-base-100 shadow-sm flex flex-col md:flex-col lg:flex-row lg:justify-between lg:items-center px-4">

  
    <div className="text-3xl lg:text-4xl font-bold text-center lg:text-left">
        <span className='text-[#1f2937]'>Keen</span>
        <span className='text-[#244d3f]'>Keeper</span>
    </div>

  
    <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row gap-4 mt-3 lg:mt-0">

        <NavLink to='/' className={({ isActive }) =>
            `flex items-center gap-2 px-3 py-2 rounded-lg ${isActive ? 'bg-[#244d3f] text-white' : ''}`}>
            <IoHomeOutline /> Home
        </NavLink>

        <NavLink to='/timeline' className={({ isActive }) =>
            `flex items-center gap-2 px-3 py-2 rounded-lg ${isActive ? 'bg-[#244d3f] text-white' : ''}`}>
            <IoTimeOutline /> Timeline
        </NavLink>

        <NavLink to='/stats' className={({ isActive }) =>
            `flex items-center gap-2 px-3 py-2 rounded-lg ${isActive ? 'bg-[#244d3f] text-white' : ''}`}>
            <ImStatsDots /> Stats
        </NavLink>

    </div>
</div>
    );
};

export default NavBar;