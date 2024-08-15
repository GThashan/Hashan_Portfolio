import React from 'react'
import Navbar from '../components/Navbar'
import Profiile from '../components/Profiile'
import Talk from '../components/Talk'
import Footer from '../components/Footer'
import Form from '../components/Form'

function Contact() {
  return (
    <div>
        <Navbar/>
        <div className='lg:grid lg:grid-cols-2'>
        <Profiile/>
        <Form/>
        </div>
        
        <Talk/>
        <Footer/>

      
      
    </div>
  )
}

export default Contact
