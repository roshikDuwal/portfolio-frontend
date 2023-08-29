import React, { useState } from 'react'
import Logo from "../assets/profile.gif"
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa"
import { BiLogoGmail } from "react-icons/bi"
import { Link } from "react-scroll"

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <>
      <div className=' fixed w-full h-[80px] flex items-center justify-between item-center px-8 bg-[#0a192f] text-white z-50 '  >

        <div>
          <img src={Logo} alt="profile pic" style={{ width: "60px", borderRadius: "50%" }} />
        </div>

        {/* MENU  */}

        <ul className=' hidden md:flex uppercase gap-12 cursor-pointer  '>
          <Link to="home" smooth={true} duration={500} className='hover-underline-animation' >Home</Link>
          <Link to="about" smooth={true} duration={500} className='hover-underline-animation' >About</Link>
          <Link to="skills" smooth={true} duration={500} className='hover-underline-animation' >Skills</Link>
          <Link to="project" smooth={true} duration={500} className='hover-underline-animation' >WORK</Link>
          <Link to="contact" smooth={true} duration={500} className='hover-underline-animation' >Contact</Link>
        </ul>


        {/* Hamburger  */}
        <div onClick={handleNav} className='md:hidden z-10 cursor-pointer'>
          {!nav ? <FaBars /> : <FaTimes />}
        </div>

        {/* mobile menu  */}
        <ul className={!nav ? "hidden " : " uppercase absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center cursor-pointer "}>
          <Link onClick={handleNav} to="home" smooth={true} duration={500} className='hover-underline-animation        py-6 text-1.8xl' >Home</Link>
          <Link onClick={handleNav} to="about" smooth={true} duration={500} className='hover-underline-animation        py-6 text-1.8xl' >About</Link>
          <Link onClick={handleNav} to="skills" smooth={true} duration={500} className='hover-underline-animation        py-6 text-1.8xl' >Skills</Link>
          <Link onClick={handleNav} to="project" smooth={true} duration={500} className='hover-underline-animation        py-6 text-1.8xl' >WORK</Link>
          <Link onClick={handleNav} to="contact" smooth={true} duration={500} className='hover-underline-animation        py-6 text-1.8xl' >Contact</Link>
        </ul>

        {/* social-icons */}

        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
          <ul>
            <li className=' w-[155px] h-[40px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300  bg-blue-800 '>
              <a className='w-full  flex justify-between items-center text-gray-300' href=" https://www.linkedin.com/in/roshik-duwal-b9546a23b/"  target='_blank'>Linkedin <FaLinkedin size={30} /> </a>
            </li>
            <li className=' w-[155px] h-[40px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333] '>
              <a className='w-full  flex justify-between items-center text-gray-300' href="https://github.com/roshikDuwal?tab=repositories" target='_blank'>Github <FaGithub size={30} /> </a>
            </li>
            <li className=' w-[155px] h-[40px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300  bg-green-600 '>
              <a className='w-full  flex justify-between items-center text-gray-300 ' href="mailto:duwalroseek@gmail.com" target='_blank'>Gmail <BiLogoGmail size={30} /> </a>
            </li>
          </ul>

        </div>

      </div>
    </>
  )
}

export default Navbar