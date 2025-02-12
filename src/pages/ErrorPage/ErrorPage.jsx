import React from 'react';
import { FaRegFaceSadTear } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='flex items-center justify-center flex-col h-screen w-screen gap-3'>
            <FaRegFaceSadTear className='text-purple-500 text-6xl' />
            <h1 className='text-4xl font-bold text-purple-500'>Oops!</h1>
            <h4 className='text-xl font-bold text-purple-500'>The Page You Are Looking For Is Not Found</h4>
            <Link to={"/"}><button className="btn border-2 border-purple-500 shadow-purple-400 shadow-md">Go Home</button></Link>
        </div>
    );
};

export default ErrorPage;