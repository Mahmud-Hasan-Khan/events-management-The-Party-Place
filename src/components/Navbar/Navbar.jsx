/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { UserContext } from '../../Provider/AuthProviders';
import Swal from 'sweetalert2';

const Navbar = () => {
    const { loggedInUser, logOut } = useContext(UserContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        logOut()
            .then(() => {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Logout Successful!',
                    showConfirmButton: false,
                    timer: 1500
                })
                navigate("/")
            })
            .catch((error) => {
                // An error happened.
                console.log(error.message);
            })
    }

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
                <Link to="/"> <img className='w-16' src="https://i.ibb.co/64cW3zq/navbar-Logo.png" alt="" /> </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-2">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end space-x-2">
                {
                    loggedInUser ?
                        <>
                            <p>{loggedInUser?.displayName} </p>
                            <img
                                className='rounded-full'
                                src={loggedInUser?.photoURL}
                                alt='profile'
                                height='34'
                                width='34'
                            />
                            <Link onClick={handleLogout} className='bg-[#f97316] px-2 py-1 rounded-xl text-white font-medium' to="/login">Log Out</Link>
                        </>
                        :
                        <>
                            <Link className='bg-[#f97316] px-2 py-1 rounded-xl text-white font-medium' to="/login">Login</Link>
                            <Link className='bg-[#f97316] px-2 py-1 rounded-xl text-white font-medium' to="/register">Register</Link>
                        </>
                }
            </div>
        </div>
    );
};

export default Navbar;