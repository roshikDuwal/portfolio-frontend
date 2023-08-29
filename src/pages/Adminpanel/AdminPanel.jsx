import React, { useEffect, useState } from 'react'
import "./admin.scss"
import { Button, Typography } from "@mui/material"
import { Link } from "react-router-dom"
import { AiOutlineProject } from "react-icons/ai"
import { useDispatch, useSelector } from "react-redux"
import { logout, updateUser } from "../../action/User.js"
import {toast} from "react-hot-toast"

const AdminPanel = () => {

  const dispatch = useDispatch()


  const {message:LoginMessage} = useSelector((state) => state.login)

  const {message,error,loading} =useSelector((state) => state.update)


  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [about, setAbout] = useState({description:"",phonenumber:"",email:"",avatar:""})

  const onSubmitHandler = async(e) => {
    e.preventDefault();
    await dispatch(updateUser(name,email,password,about))
  }

  const logoutHandler = () => {
    dispatch(logout())
  }

  //about image
  const handleAboutImage = (e) => {
    const file = e.target.files[0]
    const Reader = new FileReader();
    Reader.readAsDataURL(file);

    Reader.onload = () => {
      if (Reader.readyState === 2) {
        setAbout({...about,avatar: Reader.result })
      }
    }
  }

  useEffect(() => {
    if (LoginMessage) {
      toast.success(LoginMessage);
      dispatch({
        type: "CLEAR_MESSAGE"
      })
    }
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
  }, [error,message, LoginMessage, dispatch])

  return (
    <>
      <div className='adminPanelbox w-full p-8  ' >
        <div className="adminPanel ">
          <div className="adminPanelContainer ">
            <Typography variant="h4">
              ADMIN PANEL
            </Typography>

            <form onSubmit={onSubmitHandler}>
              <input type="text"
                placeholder='Name'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input type="email"
                placeholder='Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input type="password"
                placeholder='Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <div className="adminPanelAbout">
                <fieldset>
                  <legend>About</legend>
                  <input type="text"
                    placeholder='Description'
                    value={about.description}
                    onChange={(e) => setAbout({ ...about, description: e.target.value })}
                  />
                  <input type="text"
                    placeholder='Number'
                    value={about.phonenumber}
                    onChange={(e) => setAbout({ ...about, phonenumber: e.target.value })}
                  />
                  <input type="email"
                    placeholder='email'
                    value={about.email}
                    onChange={(e) => setAbout({ ...about, email: e.target.value })}
                  />

                  <input
                    type='file'
                    onChange={handleAboutImage}
                    className='adminPanelFileUpload'
                    placeholder='Choose Avatar'
                    accept='image/*'
                  />
                </fieldset>
              </div>

              <Link to="/admin/project">Projects <AiOutlineProject /></Link>

              <Button type="submit" variant="contained" 
              disabled={loading}
              >Update</Button>

            </form>

            <Button
              variant='contained'
              color='error'
              style={{ display: "block", margin: "4vmax auto" }}
              onClick={logoutHandler}
            >LOGOUT
            </Button>
          </div>
        </div>


      </div>
    </>
  )
}

export default AdminPanel