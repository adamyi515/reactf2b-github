import React from 'react'
import { FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = ({ title = 'Github Finder' }) => {
  return (
    <nav className='navbar mb-12 shadow-lg '>
        <div className='container mx-auto flex'>

            <div className='flex-none px-2 mx-2'>
                <FaGithub className='inline p-2 text-3xl'/>
                <Link to='/' className='text-lg font-bold'>
                    { title }
                </Link>
            </div>

            <div className='flex-1 px-2 mx-2'>
                <div className='flex justify-end'>
                    <Link to='/' className='text-lg font-bold align-middle px-5 '>
                        Home
                    </Link>
                    <Link to='/about' className='text-lg font-bold align-middle px-5 '>
                        About
                    </Link>
                </div>
            </div>

        </div>
    </nav>
  )
}

export default Navbar