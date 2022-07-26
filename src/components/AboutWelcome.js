import React from 'react'
import Javier from "../assets/javier.jpg"

const AboutWelcome = () => {
  return (
    <div className='w-full h-[30rem] relative'>
        <div className='absolute'>
            <img src={Javier} alt="javier" className='w-screen h-[30rem] object-cover'/>
        </div>
        <div className='absolute bg-black opacity-50 w-full h-full'/>
        <div className='absolute w-full flex items-center justify-center'>
            <span className='w-full flex flex-col my-5 pt-16 items-center'>
                <h1 className='text-5xl font-semibold uppercase text-white'>About</h1>
                <hr className='border border-blue-600 w-48 h-2 bg-blue-600 my-5'/>
                <p className='max-w-2xl text-white my-3 text-lg text-center'>
                    Aute in exercitation occaecat labore ea cupidatat mollit. Magna ipsum amet cupidatat deserunt
                     elit deserunt tempor voluptate laboris consequat. Do duis reprehenderit incididunt reprehenderit
                      commodo veniam laborum amet id. Aute qui pariatur enim nostrud est aute. Nisi nostrud aute esse
                       voluptate. Reprehenderit elit enim laboris occaecat sint.
                    </p>
            </span>
        </div>
    </div>
  )
}

export default AboutWelcome