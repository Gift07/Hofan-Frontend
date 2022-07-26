import React from 'react'
import Kenny from "../assets/javier.jpg"

const Welcome = () => {
  return (
    <div className='w-screen relative h-[34rem]'>
        <div className='w-full absolute'>
            <img src={Kenny} alt="kenny" className='w-full h-[34rem] object-cover'/>
        </div>
        <div className='absolute z-20 w-full h-full px-20 pt-32 text-white'>
            <h1 className='text-6xl max-w-2xl font-semibold'>
                A college you
                can believe in.
            </h1>
            <hr className='border-4 border-orange-600 w-44 my-4 bg-orange-600 mt-4'/>
            <p className='text-lg my-3 max-w-3xl'>
            A degree from a Christian university is about what you do on the one hand 
            and who you are on the other. That changes everything. Starting with you.
            </p>
            <div className='my-3'>
                <button className='uppercase bg-orange-600 px-4 py-2 text-white'>
                    explore courses
                </button>
            </div>
        </div>
        <div className='w-full h-full z-10 opacity-50 bg-black absolute'/>
    </div>
  )
}

export default Welcome