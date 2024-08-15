import React from 'react'
import project1 from '../assets/Project1.png'
import project3 from '../assets/Project3.jpg'
import project4 from '../assets/Project4.png'

export default function Project() {
  return (
    <div className='bg-white mx-4 mt-3 p-3 shadow-lg rounded-lg'>
         <h1 className='font-bold text-[20px]'>Recent Project</h1>
         <div>
            <div className='p-6 bg-slate-300 rounded-lg my-4'>
               <a href='https://009-shop-client.vercel.app/'><img src={project1} alt="" /></a> 
            </div>
            <div className='p-6 bg-slate-300 rounded-lg my-4'>
                <a href='https://user-management-system-client-six.vercel.app/'><img src={project3} alt="" /></a> 
            </div>
            <div className='p-6 bg-slate-300 rounded-lg'>
            <a href='https://book-nest-client.vercel.app/'><img src={project4} alt="" /></a> 
            
            </div>
         </div>

      
    </div>
  )
}
