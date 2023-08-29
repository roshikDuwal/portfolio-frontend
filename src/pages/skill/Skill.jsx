import React from 'react'
import "./skill.scss"
import {

    SiReact,
    SiJavascript,
    SiMongodb,
    SiNodedotjs,
    SiExpress,
    SiCss3,
    SiHtml5,
    SiTailwindcss

} from "react-icons/si"

const Skill = () => {
    return (
        <>
            <div name="skills" className=' skills bg-[#0a192f] mx-auto p-4 flex flex-col text-white justify-center max-w-[1000px] w-full h-screen  '>

                <div className=' skilltitle px-10 h-full'>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Skills</p>
                </div>

                <div className=" card w-full h-full">

                    <div className="card-side front">
                        <p className='text-3xl font-bold border-b-4 text-center p-3'>Frontend</p>

                        <div className="icons grid  grid-cols-2 place-items-center p-2 ">

                            <div className="name">
                                <SiHtml5 size={40} />
                                HTML
                            </div>


                            <div className="name">
                                <SiCss3 size={40} />
                                CSS
                            </div>

                            <div className="name">
                                <SiJavascript size={40} />
                                JavaScript
                            </div>

                            <div className="name">
                                <SiReact size={40} />
                                React
                            </div>

                            <div className="name">
                                <SiTailwindcss size={40} />
                                TailWindCss
                            </div>
                            
                            

                        </div>
                    </div>

                    <div className="card-side back">
                        <p className='text-3xl font-bold border-b-4 text-center p-3'>Backend</p>

                        <div className="icons grid  grid-cols-2 place-items-center p-2">
                            <div className="name">
                                <SiMongodb size={40} />
                                Mongodb
                            </div>

                            <div className="name">
                                <SiNodedotjs size={40} />
                                Nodejs
                            </div>


                            <div className="name">
                                <SiExpress size={40} />
                                Express
                            </div>
                        </div>
                    </div>

                </div>






            </div>
        </>
    )
}

export default Skill