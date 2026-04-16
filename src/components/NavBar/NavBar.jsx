import React from 'react';
import { NavLink } from 'react-router';
import { IoHomeOutline } from "react-icons/io5";
import { IoTimeOutline } from "react-icons/io5";
import { ImStatsDots } from "react-icons/im";

const NavBar = () => {

    return (
        <div className="navbar bg-base-100 shadow-sm flex justify-between">
            <div>
                <a className=" text-4xl font-bold "> <span className='text-[#1f2937]'>Keen</span><span className='text-[#244d3f]'>Keeper</span>  </a>
            </div>
            <div className="flex gap-5">
                <NavLink to='/' className={({ isActive }) =>
                    `flex items-center gap-2 ${isActive ? 'btn btn-neutral bg-[#244d3f]' : ''}`}><IoHomeOutline /> Home</NavLink>
                <NavLink to='/timeline' className={({ isActive }) =>
                    `flex items-center gap-2 ${isActive ? 'btn btn-neutral bg-[#244d3f]' : ''}`}><IoTimeOutline /> Timeline</NavLink>
                <NavLink to='/stats' className={({ isActive }) =>
                    `flex items-center gap-2 ${isActive ? 'btn btn-neutral bg-[#244d3f]' : ''}`}><ImStatsDots /> Stats</NavLink>


            </div>
        </div>
    );
};

export default NavBar;