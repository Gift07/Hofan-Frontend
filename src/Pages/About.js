import React from 'react'
import Navbar from "../components/Navbar"
import AboutWelcome from '../components/AboutWelcome'

const About = () => {
  return (
    <div className='w-full'>
      <Navbar/>
      <div className='pt-20'>
        <AboutWelcome/>
      </div>
    </div>
  )
}

export default About