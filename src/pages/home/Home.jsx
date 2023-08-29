import React from 'react'
import { HiArrowNarrowRight } from "react-icons/hi"

const Home = () => {
  return (
    <>
      <div name="home" className=' bw-full h-screen bg-[#0a192f] ' >
        {/* Container  */}
        <div className='  max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
          <p className=' capitalize text-white font-medium  '>Hi,It's Me </p>
          <h1 className='text-4xl sm:text-7xl font-bold text-white'> #<span className='text-4xl sm:text-7xl font-bold text-[#00E8F8]'>Roshik </span></h1>
          <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm Web  Developer.</h2>
          <p className=' text-[#8892b0] py-4 max-w-[700px]'>Highly motivated web developer in IT industry seeking new opportunities.
            Dedicated to lifelong learning, I'm constantly seeking new ways to enhance my skills and contribute to impactful projects in dynamic environments. </p>

          <div>
            <button className='text-white border-2 px-6 py-3 my-2 flex items-center gap-2 ease-in duration-200 hover:bg-red-600 hover:border-red-600 justify-center'>Download Resume <HiArrowNarrowRight /></button>
          </div>
        </div>

      </div>
    </>
  )
}

export default Home