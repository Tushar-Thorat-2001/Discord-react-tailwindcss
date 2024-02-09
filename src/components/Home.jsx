import React from 'react'
import { GoDownload } from "react-icons/go";
import img from "../assets/429c4a92-c557-44bc-b32a-8374cdb970c8.svg"
import leftimg from "../assets/67e3836c-2242-421f-ad23-c3d58a462ca1.svg"
import rightimg from "../assets/07033d58-c1a6-4f5f-92ee-ce19ed994d53.svg"
const Home = () => {
  return (
    <div className='min-h-[70vh] bg-brightblue relative flex flex-col items-end py-5 md:justify-center md:items-center '>

        <div className='flex flex-col text-white md:px-40 text-center gap-3 relative z-40'>
            <h1 className='text-[2rem]  font-extrabold  md:tracking-widest md:text-[3.5rem] line-[3.5rem]'>IMAGINE A PLACE...
</h1>
<p className='text-center flex p-2 text-[0.7rem] md:text-[1.1rem]  '>...where you can belong to a school club, a gaming group, or a worldwide art community. <br className='hidden md:block'/>Where just you and a handful of friends can spend time together. A place that makes it easy<br className='hidden md:block'/> to talk every day and hang out more often.</p>


<div className='flex flex-col  md:flex-row justify-between items-center text-start font-normal font-semibold gap-4 mt-4'>
    <button className='p-3 bg-white  text-black flex  gap-3 text-xl rounded-full md:px-10 '>
    <GoDownload size={25}/>
        Downloads for Windows
    </button>
    <button className=' p-3 bg-black  text-white flex  gap-3 text-xl rounded-full md:px-10 '>
    <GoDownload  size={25}/>
        Open Discord for browser
    </button>

</div>


        </div>

        <div className='hidden md:block absolute md:z-0 md:bottom-0 '>
            <img src={img} alt="img" className='object-cover'  />

        </div>
        <div className=' absolute z-10 right-10 object-cover w-full md:-left-44 bottom-0 '>
            <img src={leftimg} alt="img"  />

        </div>
        <div className='hidden md:block absolute z-10 -right-44 bottom-0 '>
            <img src={rightimg} alt="img"  />

        </div>


    </div>
  )
}

export default Home