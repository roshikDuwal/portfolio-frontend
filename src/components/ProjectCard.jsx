import React from 'react'
import { Button, Typography } from '@mui/material'
import { FiDelete } from 'react-icons/fi'
import "./card.scss"
import { useDispatch } from 'react-redux'
import { deleteProject, getUser } from '../action/User'

export const ProjectCard = ({
    url,
    id,
    projectImage,
    Projecttitle,
    description,
    technologies,
    isAdmin = false,

}) => {

    const dispatch=useDispatch()

    const deleteHandler=async(id)=>{
        await dispatch(deleteProject(id));
        dispatch(getUser())
    }

    return (
        <>
            <div className="box ">
                <div className='singlebox'>
                    <a href={url} className='projectCard' target='_blank'>

                        <div>
                            <img src={projectImage} alt="Project" />
                        </div>

                        <div className='layer flex  flex-col px-1 text-center text-white '>

                            <h5>
                                {Projecttitle}
                            </h5>
                            <h6>{description}</h6>
                            <p>TechStack: <span> {technologies}</span></p>
                            <Button >View</Button>

                        </div>
                    </a>
                </div>


                {isAdmin && (
                    <Button onClick={()=>deleteHandler(id)} style={{ color: "rgba(40,40,40,0.7" }}>
                        <FiDelete />
                    </Button>
                )}


            </div>


        </>
    )
}

