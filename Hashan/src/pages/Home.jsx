import React from 'react'
import Navbar from '../components/Navbar'
import Profiile from '../components/Profiile'
import Skill from '../components/Skill'
import Project from '../components/Project'
import Service from '../components/Service'
import Talk from '../components/Talk'
import Footer from '../components/Footer'
import Details from '../components/Details'
import Info from '../components/Info'

function Home() {
  return (
    <div>
        <Navbar/>
        <div className='lg:grid lg:grid-cols-3 items-start'>
        <Profiile/>
        <Details/>
        <Info/>
        </div>
       
     <div>
     
     <Skill/>
        <Talk/>

     </div>
       
        <Footer/>
      
    </div>
  )
}

export default Home
