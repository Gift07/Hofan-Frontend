import React from 'react'
import Footer from '../components/Footer'
import Info from '../components/Info'
import Navbar from '../components/Navbar'
import News from '../components/News'
import Welcome from '../components/Welcome'

const Home = () => {
  return (
    <div className='w-sreen font-poppins overflow-x-hidden'>
        <Navbar/>
        <div className='pt-20'>
        <Welcome/>
        <Info/>
        <News/>
        <Footer/>
        </div>
    </div>
  )
}

export default Home