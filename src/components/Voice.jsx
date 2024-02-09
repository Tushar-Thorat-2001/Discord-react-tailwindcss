import React from 'react'
import img from "../assets/e9a66d1b-85ab-4b89-bc47-f6a824e2a1bd.svg"

const Voice = () => {
  return (
    <div className='min-h-[85vh] bg-#F6F6F6 flex flex-col-reverse justify-center items-center bg-[#F6F6F6] md:flex-row md:px-40'>
   
    <div className=' md:w-2/5   flex justify-center items-center flex-col px-5  '>
        <h1 className='font-bold text-[3rem] leading-10'>Where hanging out is easy</h1>
        <p className='mt-8 pr-5 text-xl text-gray-400 '>
        Grab a seat in a voice channel when you’re free. Friends in your server can see you’re around and instantly pop in to talk without having to call.
        </p>
    </div>
    <div className= ' mt-2 flex justify-start items-start md:w-3/5'>
      <img src={img} alt="img" />
    </div>
</div>
  )
}

export default Voice