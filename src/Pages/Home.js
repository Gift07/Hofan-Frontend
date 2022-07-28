import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <div className='w-sreen font-poppins overflow-x-hidden'>
        <Navbar/>
        <div className='pt-20'>
        <Footer/>
        </div>
    </div>
  )
}

export default Home