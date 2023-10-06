// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
            Error
            <Link to="/" >Back To Home</Link>
        </div>
    );
};

export default ErrorPage;