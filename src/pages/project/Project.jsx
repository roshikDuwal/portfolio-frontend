import React from 'react'
import "./project.scss"
import { AiOutlineProject } from "react-icons/ai"
import { Typography } from "@mui/material"
import {ProjectCard} from '../../components/ProjectCard'


export const Project = ({projects}) => {

 

    return (
        <>
            <div name="project" className="  w-full mb-5 ">

                <div className='flex flex-col pt-20 items-center  w-full h-full bg-white rounded-t-lg'>
                    <div className='flex flex-col items-center'>


                        <Typography className='flex flex-wrap  gap-2 text-black g:text-right sm:text-left pb-8 pl-4 font-black ' style={{fontFamily:"sans-serif",fontWeight:700}} variant='h3'> Project Work <AiOutlineProject /></Typography>

                        <div className=" flex flex-wrap gap-5  items-center justify-center    projectwrapper  w-full h-full  max-w-[1000px] border-2  mb-9 "  >
                            
                            {projects.map((project, index) => {
                                return(
                                    
                                    <ProjectCard  key={index}
                                    url={project.url}
                                    projectImage={project.image.url}
                                    Projecttitle={project.title}
                                    description={project.description}
                                    technologies={project.techStack}
                                    isAdmin={false} />
                                )
                            })}

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

