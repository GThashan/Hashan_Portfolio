import React from 'react'
import Navbar from '../components/Navbar'
import Profiile from '../components/Profiile'
import Skill from '../components/Skill'
import Project from '../components/Project'
import Service from '../components/Service'

function Home() {
  return (
    <div>
        <Navbar/>
        <Profiile/>
        <Skill/>
        <Project/>
        <Service/>
      
    </div>
  )
}

export default Home
