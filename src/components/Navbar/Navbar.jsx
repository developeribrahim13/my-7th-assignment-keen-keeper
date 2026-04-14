import React from 'react';
import logo from '/assets/logo.png';
import { NavLink } from 'react-router';
import { RiHome2Line } from "react-icons/ri";
import { IoTimeOutline } from "react-icons/io5";
import { ImStatsDots } from "react-icons/im";

const Navbar = () => {
    return (
        <nav className='border-b border-gray-100'>
        <div className='max-w-[90%] mx-auto sm:flex justify-between items-center py-3'>
            <div>
                <img src={logo} alt='logo'></img>
            </div>
            <div className='flex items-center justify-start gap-5'>
                <NavLink to={"/"} className={({isActive})=> `${isActive?"bg-[#244D3F] text-white btn":""} text-gray-500 flex items-center`}><RiHome2Line /> Home</NavLink>
                <NavLink to={"/timeline"} className={({isActive})=> `${isActive?"bg-[#244D3F] text-white btn":""} text-gray-500 flex items-center`}><IoTimeOutline /> Timeline</NavLink>
                <NavLink to={"/stats"} className={({isActive})=> `${isActive?"bg-[#244D3F] text-white btn":""} text-gray-500 flex items-center`}><ImStatsDots /> Stats</NavLink>
            </div>
        </div>
        </nav>
    );
};

export default Navbar;