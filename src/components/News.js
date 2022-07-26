import React from 'react'
import Mikael from "../assets/javier.jpg"
import Card from './Card'

const News = () => {
  return (
    <div className='w-full pb-10 bg-gray-100'>
        <div className='px-20 my-8 pt-10'>
            <hr className='border-4 w-28 border-orange-600 bg-orange-600 '/>
            <span>
                <h1 className='text-4xl font-semibold text-gray-800 my-3'>{"News & Events"}</h1>
            </span>
            <span className='flex items-center gap-x-3'>
                <hr className='h-4 w-4 bg-[#002080]'/>
                <h1 className='uppercase text-lg font-semibold'>Latest News</h1>
            </span>
        </div>
        <div className='w-full flex items-center justify-center'>
            <div className='w-full flex items-center justify-center'>
                <img src={Mikael} alt="news" className='w-10/12 rounded-xl h-96 object-cover'/>
            </div>
        </div>
        <div className='w-full flex items-center justify-center py-4'>
            <div className='grid grid-cols-3 items-center justify-center gap-x-4'>
                <Card Image={Mikael}/>
                <Card Image={Mikael}/>
                <Card Image={Mikael}/>
            </div>
        </div>
    </div>
  )
}

export default News