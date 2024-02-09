import React from 'react'
import img from "../assets/81fa9d4f-7f62-4b93-b3ef-58d39bc6549c.svg"
import { GoDownload } from "react-icons/go";

const Tech = () => {
  return (
    <div className='md:min-h-screen bg-[#F6F6F6] flex flex-col  items-center py-[5rem] px-42 '>
        <div className='text-[1.2rem]  font-extrabold  md:tracking-tight md:text-[3.5rem] line-[3.5rem]'>

        <h1>RELIABLE TECH FOR STAYING CLOSE</h1>
        </div>
          <div className='py-1 px-4 text-gray-400 text-center text-[0.8rem] md:text-base'>
          Low-latency voice and video feels like you’re in the same room. Wave hello over video, watch friends stream their <br className='hidden md:block'/>
         
          games or gather together over a drawing session with Screen Share.
          
          </div>
          <div>
            <img src={img} alt="" />
          </div>
          
          <div className='text-base font-bold  md:tracking-tight md:text-[2.5rem] line-[3.5rem]'>
            Ready to start your journey?
          </div>
        
           
           <button className='mt-10 flex gap-3 p-3 bg-brightblue md:px-[5rem] md:text-xl rounded-full text-white' >
           <GoDownload size={32}/>
             Download for Windows
           </button>
        
    </div>
  )
}

export default Tech