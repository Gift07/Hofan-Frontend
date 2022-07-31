import React from 'react'
import { TailSpin } from 'react-loader-spinner'

const Loading = () => {
  return (
    <div className="absolute top-0  w-screen h-screen bg-transparent bg-black bg-opacity-70 backdrop-blur-md z-[100] flex items-center justify-center">
    <div className='bg-white rounded-md text-sky-600 p-10 flex flex-col items-center justify-center'>
      <h1>Loading...</h1>
      <TailSpin width={30} height={30} color="dodgerblue"/>
    </div>
  </div>
  )
}

export default Loading