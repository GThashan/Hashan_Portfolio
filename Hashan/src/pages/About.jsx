import React from 'react'
import Navbar from '../components/Navbar'
import Profiile from '../components/Profiile'
import Footer from '../components/Footer'
import Details from '../components/Details'
import Info from '../components/Info'
import Talk from '../components/Talk'

function About() {
  return (
    <div>
        <Navbar/>
        <Profiile/>
        <Details/>
        <Info/>
     
        <Talk/>
        <Footer/>
      
    </div>
  )
}

export default About
