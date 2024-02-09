import React from 'react'
import img from "../assets/cf0c6af9-2d6d-426b-b9eb-e7f34ede0a97.svg"

const Freedom = () => {
  return (
    <div className='min-h-[85vh] bg-#F6F6F6 flex flex-col justify-center items-center md:flex-row md:px-40'>
    <div className= ' flex justify-start items-start md:w-3/5'>
      <img src={img} alt="img" />
    </div>
    <div className=' md:w-2/5 flex justify-center items-center flex-col px-5 '>
        <h1 className='font-bold text-[3rem] leading-10'>From few to a fandom</h1>
        <p className='mt-8 pr-5 text-xl text-gray-400 '>
        Get any community running with moderation tools and custom member access. Give members special powers, set up private channels and more.
        </p>
    </div>
</div>
  )
}

export default Freedom