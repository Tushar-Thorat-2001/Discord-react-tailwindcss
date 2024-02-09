import React from 'react'
import img from "../assets/ed085dce-41d2-4eed-8e6f-5b4ad94937af.svg"

const Invite = () => {
  return (
    <div className='min-h-[85vh] bg-#F6F6F6 flex flex-col justify-center items-center md:flex-row md:px-40'>
    <div className= ' flex justify-start items-start md:w-3/5'>
      <img src={img} alt="img" />
    </div>
    <div className=' md:w-2/5 flex justify-center items-center flex-col px-5 '>
        <h1 className='font-bold text-[3rem] leading-10'>Create an invite-only place where you belong</h1>
        <p className='mt-8 pr-5 text-xl text-gray-400 '>
        Discord servers are organised into topic-based channels where you can collaborate, share and just talk about your day without clogging up a group chat.
        </p>
    </div>
</div>
  )
}

export default Invite