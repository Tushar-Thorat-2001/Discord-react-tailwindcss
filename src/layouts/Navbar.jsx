import React ,{useState}from 'react'
import {Link} from "react-scroll"
import { BiLogoDiscordAlt } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
    const[menu,setMenu] = useState(false)

    const handleChange = ()=>{
        setMenu(!menu)

    }

  return (
    <div className='flex flex-row justify-between md:justify-around items-center p-5 px-3 md:px-20 bg-brightblue  relative z-50'>
        <div className='font-normal font-bold text-base text-white flex gap-1'>
          <BiLogoDiscordAlt size={25} />
          <Link  to="/" spy={true } smooth={true}>
             Discord
          </Link>
        </div>

        <div className=' hidden md:flex font-normal font-bold text-base text-white gap-4' >
         <Link className=' hover:text-black' to="/" spy={true } smooth={true}>
           Download
         </Link>
         <Link  className=' hover:text-black' to="/" spy={true } smooth={true}>
           Nitro
         </Link>
         <Link className=' hover:text-black'  to="/" spy={true } smooth={true}>
           Discover
         </Link>
         <Link  className=' hover:text-black' to="/" spy={true } smooth={true}>
           Safety
         </Link>
         <Link className=' hover:text-black'  to="/" spy={true } smooth={true}>
           Support
         </Link>
         <Link  className=' hover:text-black' to="/" spy={true } smooth={true}>
           Blog
         </Link>
         <Link  className=' hover:text-black' to="/" spy={true } smooth={true}>
           Careers
         </Link>
        

        </div>

        <div className='font-normal font-bold text-base text-white flex gap-4'>
            <button className='bg-white text-black p-2.5 rounded-2xl'>
                Open Discord
            </button>

            <GiHamburgerMenu className='md:hidden mt-2' size={30} onClick={handleChange} />

        </div>
        <div className={` ${
          menu ? "translate-x-0" : "-translate-x-full"
        } md:hidden flex flex-col absolute bg-brightblue left-0 top-20 font-medium text-white text-base text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300 `}>
            <Link className=' hover:text-black' to="/" spy={true } smooth={true}>
           Download
         </Link>
         <Link  className=' hover:text-black' to="/" spy={true } smooth={true}>
           Nitro
         </Link>
         <Link className=' hover:text-black'  to="/" spy={true } smooth={true}>
           Discover
         </Link>
         <Link  className=' hover:text-black' to="/" spy={true } smooth={true}>
           Safety
         </Link>
         <Link className=' hover:text-black'  to="/" spy={true } smooth={true}>
           Support
         </Link>
         <Link  className=' hover:text-black' to="/" spy={true } smooth={true}>
           Blog
         </Link>
         <Link  className=' hover:text-black' to="/" spy={true } smooth={true}>
           Careers
         </Link>

        </div>

    </div>
  )
}

export default Navbar