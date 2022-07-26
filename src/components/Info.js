import React from 'react'

const Info = () => {
  return (
    <div className='w-full h-[30rem] bg-[#002080]'>
        <div className='w-full py-5 pt-20 flex items-center justify-center'>
            <span className='flex items-center justify-center'>
                <hr className='w-28 border-2 border-gray-600 bg-white mx-3'/>
                <h1 className='text-white font-semibold text-xl uppercase'>Get started</h1>
                <hr className='w-28 border-2 border-gray-600 bg-white mx-3'/>
            </span>
        </div>
        <div className='w-full flex  flex-col items-center justify-center'>
            <h1 className='text-5xl text-orange-600 font-semibold'>{"Visit & Apply"}</h1>
            <p className='text-center my-5 max-w-2xl text-white'>
            Think Redeemer is right for you? The best way to experience Redeemer is to come
             for a visit! And when you are ready, the Admissions team will walk you through each step of the application process.
            </p>
        </div>
        <div className='w-full flex items-center justify-center my-3'>
            <button className='px-6 py-2 bg-orange-600 text-white'>
                Find out More
            </button>
        </div>
    </div>
  )
}

export default Info