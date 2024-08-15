import React from 'react'
import Navbar from '../components/Navbar'
import Profiile from '../components/Profiile'
import Talk from '../components/Talk'
import Footer from '../components/Footer'
import Service from '../components/Service'
import Skill from '../components/Skill'

function Services() {
  return (
    <div>
        <Navbar/>
        <div className='lg:grid lg:grid-cols-3'>
        <Profiile/>
        <Service/>
        <Skill/>

        </div>
        
        <Talk/>
        <Footer/>
      
    </div>
  )
}

export default Services
