import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='font-serif text-white bg-gray-700 py-4'>
            <div className='w-3/4 flex items-center justify-between mx-auto'>
                <h1 className='text-5xl font-bold '>Logo</h1>
                <div className='flex text-xl'>
                    <Link className='mx-2 px-2 hover:text-gray-200' to='/'>Home</Link>
                    <Link className='mx-2 px-2 hover:text-gray-200' to='/'>About </Link>
                    <Link className='mx-2 px-2 hover:text-gray-200' to='/'>Users</Link>
                </div>
            </div>
        </div>
    );
};

export default Header;