import React, { useEffect, useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { Button, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import {ProjectCard} from '../../../components/ProjectCard'
import { addProject, getUser } from '../../../action/User'
import "./admincard.scss"
import {toast} from "react-hot-toast"


const AdminProject = () => {
  const dispatch = useDispatch()


  const { message, error, loading } = useSelector((state) => state.update)

  const { user } = useSelector((state) => state.user);

  const [title, setTitle] = useState("")
  const [url, setUrl] = useState("")
  const [image, setImage] = useState("")
  const [description, setDescription] = useState("")
  const [techStack, setTechStack] = useState("")

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    await dispatch(addProject(title,url,image,description,techStack))
    dispatch(getUser())
 
  }

  
  const handleImage=(e)=>{
    const file=e.target.files[0]
    const Reader = new FileReader();

    Reader.readAsDataURL(file);

    Reader.onload=()=>{
      if(Reader.readyState===2){
        setImage(Reader.result)
      }
    }

  }

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({
        type: "CLEAR_ERRORS"
      })
    }

    if (message) {
      toast.success(message);
      dispatch({
        type: "CLEAR_MESSAGE"
      })
    }

  },[ error, message, dispatch])

  return (
    <>
      <div className='adminPanelbox w-full p-8  ' >
        <div className="adminPanel ">
          <div className="adminPanelContainer ">

            <Typography variant="h4">
              ADMIN PANEL PROJECTS
            </Typography>

            <form onSubmit={onSubmitHandler}>

              <input type="text"
                placeholder='Title'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />

              <input type="text"
                placeholder='Description'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />

              <input type="text"
                placeholder='TECH STACK'
                value={techStack}
                onChange={(e) => setTechStack(e.target.value)}
              />

              <input type="text"
                placeholder='Link'
                value={url}
                onChange={(e) => setUrl(e.target.value)}
              />

              <input type="file"
                onChange={handleImage}
                accept='image/*'
              />

              <Link to="/admin">BACK</Link>

              <Button type="submit" variant="contained"
                disabled={loading}
              >Update</Button>

            </form>

            <div className="adminPanelProject  ">
              {user &&
                user.projects && 
                user.projects.map((item)=>(
                  <ProjectCard
                  id={item._id}
                  key={item._id}
                  url={item.url}
                  projectImage={item.image.url}
                  Projecttitle={item.title}
                  description={item.description}
                   technologies={item.techStack}
                  isAdmin={true}
                  />
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AdminProject