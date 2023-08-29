import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <>
    <div className='w-full h-screen flex flex-col justify-center items-center text-white gap-2'>
        <h1 style={{fontSize:"200%",fontWeight:900}}>PAGE NOT FOUND !!!!</h1>
        <Button style={{backgroundColor:"black",color:'white',padding:"0.5rem"}} ><Link to="/">GO BACK</Link> </Button>
    </div>
    </>
  )
}

export default Error