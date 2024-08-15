import React from 'react'
import Navbar from '../components/Navbar'
import Profiile from '../components/Profiile'
import Talk from '../components/Talk'
import Footer from '../components/Footer'
import Project from '../components/Project'

function Works() {
  return (
    <div>
        <Navbar/>
        <div className='lg:grid lg:grid-cols-2'>
        <Profiile/>
        <Project/>
        </div>
        
        <Talk/>
     <Footer/>
      
    </div>
  )
}

export default Works
