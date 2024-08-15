import React from 'react'
import Navbar from '../components/Navbar'
import Profiile from '../components/Profiile'
import Skill from '../components/Skill'
import Project from '../components/Project'

function Home() {
  return (
    <div>
        <Navbar/>
        <Profiile/>
        <Skill/>
        <Project/>
      
    </div>
  )
}

export default Home
