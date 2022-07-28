import React from 'react'
import Navbar from '../components/Navbar'
import Logo from "../assets/Logo.png"
import { AiOutlineCopyright } from 'react-icons/ai'

const Login = () => {
  return (
    <div className='w-full font-poppins'>
      <Navbar/>
      <div className='pt-20 px-20'>
        <div className='mt-16'>
          <h1 className='text-[#002080] text-2xl uppercase font-semibold'>Login</h1>
        </div>
        <div className='my-3'>
          <span className='flex items-center bg-blue-200'>
            <hr className='w-2 h-10 border border-blue-600 bg-blue-600'/>
            <h1 className='text-gray-900 ml-5'>
              Login to continue with your application
            </h1>
          </span>
        </div>
        <div className='mt-8'>
          <form>
            <div className='my-8'>
              <label className='mr-14'>
                Enter Email
              </label>
              <input
              placeholder='Email' 
              className='h-10 w-72 p-2 border border-blue-700 outline-none'/>
            </div>
            <div className='my-8'>
              <label className='mr-5'>
                Enter Password
              </label>
              <input
              placeholder='Password'
              type="password" 
              className='h-10 w-72 p-2 border border-blue-700 outline-none'/>
            </div>
            <span className='my-3'>
              <h1 className='pb-3'>Forgot your password?</h1>
            </span>
            <div>
              <button className='px-6 py-2 bg-blue-600 text-600 duration-200 hover:bg-blue-700 text-white'>
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className='w-full px-20 py-3 pt-14 flex items-center justify-center gap-x-24'>
          <div className='flex items-center gap-x-4'>
            <img src={Logo} alt="logo" className="w-14 h-14 object-cover"/>
            <span className='uppercase text-blue-700 font-semibold'>
              <h1 >Hofan Training</h1>
              <h1>Institute</h1>
            </span>
          </div>
          <div className='flex items-center text-sm'>
            <AiOutlineCopyright/>
            <h1>2020 All rights reserved</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login