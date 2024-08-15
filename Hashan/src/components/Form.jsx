import React from 'react'

function Form() {
  return (
    <div className='bg-white mx-4 mt-4 p-4 shadow-lg rounded-lg'>
       <h1 className='font-bold text-[30px]'>Contact Form</h1>
       <form action="">
        <div className='flex flex-col w-full my-3'>
        <label htmlFor="" className='text-[20px] my-2'>Name</label>
        <input type="text" placeholder='Enter your name'  className='outline-none p-3 bg-slate-200'/>
        </div>

        <div className='flex flex-col w-full my-3'>
        <label htmlFor="" className='text-[20px] my-2'>Email</label>
        <input type="text" placeholder='Enter your email'  className='outline-none p-3 bg-slate-200'/>
        </div>

        <div className='flex flex-col w-full my-3'>
        <label htmlFor="" className='text-[20px] my-2'>Phone Number</label>
        <input type="text" placeholder='Enter your number'  className='outline-none p-3 bg-slate-200'/>
        </div>

        <div className='flex flex-col w-full my-3'>
        <label htmlFor="" className='text-[20px] my-2'>Message</label>
        <textarea  placeholder='Enter your number'  className='outline-none p-3 bg-slate-200'/>
        </div>
        <button className='bg-[#5588ff] p-4 my-2 w-full text-white font-bold hover:bg-slate-800'>Send</button>
       
       </form>
    </div>
  )
}

export default Form
