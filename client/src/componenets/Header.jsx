import React from 'react'
import { FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='bg-slate-200 shadow-md'>
        <div className='flex justify-between items-center max-w-6xl mx-auto p-3 '>
            <h1 className='font-bold text-sm sm:tex-xl flex flex-wrap' >
                <span className='text-slate-500'>Real</span>
                <span className='text-slate-700'>Estate</span>
            </h1>
            <form className='bg-slate-100 p-3 rounded-lg flex items-center '>
                <input type="text" placeholder='Search Here...' className='bg-transparent focus:outline-none w-24 sm:w-64'/>
                <FaSearch className='text-slate-600'/>
            </form>
            <ul className='flex gap-4'>
                <Link to='/' className='hidden sm:inline text-slate-700 hover:underline cursor-pointer'>Home</Link>
                <Link to="/about" className='hidden sm:inline text-slate-700 hover:underline cursor-pointer'>About</Link>
                <Link to="/signin" className='sm:inline text-slate-700 hover:underline cursor-pointer'>SignIn</Link>
                <Link to="/signup" className='hidden sm:inline text-slate-700 hover:underline cursor-pointer'>SignUp</Link>
            </ul>
        </div>
        
    </header>    
)
}

export default Header