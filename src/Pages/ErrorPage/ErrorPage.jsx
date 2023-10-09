// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='flex flex-col items-center'>
            <img className='mx-auto' src="https://i.ibb.co/7VRYn31/404.gif" alt="" />
            <Link className="bg-orange-500 p-2 font-medium text-white rounded" to="/" >Back To Home</Link>
        </div>
    );
};

export default ErrorPage;