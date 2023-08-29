import React from 'react'
import ProfileDetail from "../../assets/profileimage.gif"
import {BsFillTelephoneFill} from "react-icons/bs"
import {FiMail} from "react-icons/fi"

import "./about.scss"

const About = ({about}) => {


  return (
    <>
      <div name='about' className=' about w-full h-screen  bg-[#0a192f] text-gray-300'>

        <div className='flex flex-col pt-20 items-center  w-full h-full'>
          <div className=' max-w-[1000px] w-full px-4 grid-cols-2 gap-8'>

            <div className=' lg:text-right sm:text-left pb-8 pl-4'>
              <p className='text-4xl font-bold inline border-b-4 border-pink-600'>About
              </p>
            </div>

            <div className=' max-w-[1000px] w-full grid md:grid-cols-2 gap-8'>

              <div >
               <img className='rounded-3xl' src={about.avatar.url} alt="Roshik Duwal" />
              </div>

              <div className='flex flex-col gap-3 justify-center aboutdetail'>
                <p>{about.description}
                </p>
                <p className='flex gap-3  items-center '><BsFillTelephoneFill className=' text-[#00E8F8] '/><a className='hover:underline' href="tel:+977-9860077825">{about.phonenumber}</a>  </p>

                
                <p className='flex gap-3  items-center '><FiMail className=' text-[#00E8F8] '/><a  className='hover:underline' href={about.email}>{about.email}</a> </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </>
  )
}

export default About