/* eslint-disable no-unused-vars */
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logoImg from "../../assets/Logo.png"
import profilePic from "../../assets/placeholder.jpg"

const Navbar = () => {
    const user = true;

    const navLinks = <div className='space-x-3 font-bold flex text-[#023e7d]'>
        <li>
            <NavLink to='/' className={({ isActive }) => (isActive ? 'border-b-2 border-[#f97316] text-[#f97316] ' : '')}>Home</NavLink>
        </li>
        <li>
            <NavLink to='/' className={({ isActive }) => (isActive ? 'border-b-2 border-[#f97316] text-[#f97316] ' : '')}>Home</NavLink>
        </li>
        <li>
            <NavLink to='/blog' className={({ isActive }) => (isActive ? 'border-b-2 border-[#f97316] text-[#f97316] ' : '')}>Home</NavLink>
        </li>

    </div>


    return (
        <div className="navbar shadow-md rounded">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <Link to="/"> <img className='w-16' src={logoImg} alt="" /> </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-2">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end space-x-2">
                <img
                    className='rounded-full'
                    src={user && user?.photoURL ? user.photoURL : profilePic}
                    alt='profile'
                    height='34'
                    width='34'
                />
                {
                    user ?
                        <>
                            <Link className='bg-[#f97316] px-2 py-1 rounded-xl text-white font-medium' to="login">Log Out</Link>
                            <p>{user?.displayName} </p>
                        </>
                        :
                        <>
                            <Link className='bg-[#f97316] px-2 py-1 rounded-xl text-white font-medium' to="login">Login</Link>
                        </>
                }
            </div>
        </div>
    );
};

export default Navbar;