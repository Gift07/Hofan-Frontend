import React from 'react'
import { Link,NavLink } from 'react-router-dom'
import Logo from "../assets/Logo.png"

const Navbar = () => {
  return (
    <div className='h-16 bg-[#002080] z-50 w-full px-20 fixed top-0 flex items-center justify-between'>
        <Link to="/">
            <div className='flex items-center justify-centeer gap-x-3'>
                    <img src={Logo} alt="logo" className='w-14 h-14 object-cover'/>
                    <span>
                        <h1 className='text-white uppercase font-semibold'>Hofan Training Instute</h1>
                        <h1 className='text-white font-semibold'>Online Application System</h1>
                    </span>
            </div>
        </Link>
        <div className='flex items-center justify-center gap-x-10'>
            <div>
                <ul className='text-white uppercase flex items-center gap-x-5'>
                    <li className='duration-200 hover:border-b my-2 hover:border-white cursor-pointer'>
                        <NavLink to="/">
                            Home
                        </NavLink>
                    </li>
                    <li className='duration-200 hover:border-b my-2 hover:border-white cursor-pointer'>
                        <NavLink to="/certificate">
                            Certificate
                        </NavLink>
                    </li>
                    <li className='duration-200 hover:border-b my-2 hover:border-white cursor-pointer'>
                        <NavLink to="/diploma">
                            Diploma
                        </NavLink>
                    </li>
                    <li className='duration-200 hover:border-b my-2 hover:border-white cursor-pointer'>
                        <NavLink to="/application-me">
                            Selected 
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div>
                <Link to="/user/sign-in">
                    <button className='uppercase text-white bg-orange-500 px-4 py-2'>
                        Login
                    </button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Navbar