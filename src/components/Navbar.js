import React from 'react'
import { Link } from 'react-router-dom'
import Logo from "../assets/Logo.png"

const Navbar = () => {
  return (
    <div className='h-20 bg-[#002080] z-50 w-full px-20 fixed top-0 flex items-center justify-between'>
        <Link to="/">
            <div className='flex items-center justify-centeer gap-x-3'>
                    <img src={Logo} alt="logo" className='w-16 h-16 object-cover'/>
                    <span>
                        <h1 className='text-white uppercase font-semibold'>Hofan Training</h1>
                        <h1 className='text-white uppercase font-semibold'>Institute</h1>
                    </span>
            </div>
        </Link>
        <div className='flex items-center justify-center gap-x-10'>
            <div>
                <ul className='text-white uppercase flex items-center gap-x-5'>
                    <li className='duration-200 hover:border-b my-2 hover:border-white cursor-pointer'>
                        <Link to="/about">
                            About
                        </Link>
                    </li>
                    <li className='duration-200 hover:border-b my-2 hover:border-white cursor-pointer'>
                        <Link to="/certificate">
                            Certificate
                        </Link>
                    </li>
                    <li className='duration-200 hover:border-b my-2 hover:border-white cursor-pointer'>
                        <Link to="/diploma">
                            Diploma
                        </Link>
                    </li>
                    <li className='duration-200 hover:border-b my-2 hover:border-white cursor-pointer'>
                        <Link to="/application-me">
                            My Application 
                        </Link>
                    </li>
                </ul>
            </div>
            <div>
                <Link to="/user/sign-up">
                    <button className='uppercase text-white bg-orange-500 px-4 py-2'>
                        Apply now
                    </button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Navbar