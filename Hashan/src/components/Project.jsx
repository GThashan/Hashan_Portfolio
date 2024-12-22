import React from 'react'
import project1 from '../assets/Project1.png'
import project3 from '../assets/Project3.jpg'
import project4 from '../assets/Project4.png'

export default function Project() {
  return (
    <div className='bg-[#0f172a] mx-4 mt-3 p-10 shadow-lg rounded-lg '>
         <h1 className='font-bold text-[20px] text-white '>Recent Project</h1>
        
         <div className='lg:grid lg:grid-cols-2 gap-2'>
            <div className='p-6 bg-slate-300 rounded-lg '>
               <img src={project1} alt="" />
               <div className='flex flex-gap-2'>
                   <div>React js</div>
                   <div>React js</div>
                   <div>React js</div>
                   <div>React js</div>
               </div>
            </div>
            <div className='p-6 bg-slate-300 rounded-lg '>
               <img src={project3} alt="" />
            </div>
            <div className='p-6 bg-slate-300 rounded-lg '>
            <img src={project4} alt="" />
            </div>
            <div className='p-6 bg-slate-300 rounded-lg'>
              <img src={project1} alt="" />
            </div>
        
         </div>
        

      
    </div>
  )
}
