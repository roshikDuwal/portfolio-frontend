import React, { useEffect } from 'react'
import { Button, colors } from '@mui/material'
import { Formik } from 'formik';
import { Typography } from "@mui/material"
import "./login.scss"
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../action/User';

import {Link} from "react-router-dom"

import {toast} from "react-hot-toast"


const Login = () => {

    const dispatch=useDispatch()

    const {loading,message,error}=useSelector((state)=>state.login)

    useEffect(()=>{
        if(error){
            toast.error(error);
            dispatch({
                type:"CLEAR_ERRORS"
            })
        }

        if(message){
            toast.success(message);
            dispatch({
                type:"CLEAR_MESSAGE"
            })
        }
    },[error,message])

    return (
        <>
            <div className='w-full h-screen loginbox' >
                <div className='w-full  login'>

                    <div className="contactContainer">
                        <Formik
                            initialValues={{ password: '', email: '' }}
                            validate={values => {

                                const errors = {};
                                if (!values.password) {
                                    errors.password = "Required Password"
                                }

                                if (!values.email) {
                                    errors.email = 'Required';
                                } else if (
                                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                                ) {
                                    errors.email = 'Invalid email address';
                                }

                                return errors;
                            }}

                            onSubmit={(values) => {
                                const { email, password } = values;
                               
                                dispatch(login(email,password))
                               
                            }}
                        >

                            {({
                                values,
                                errors,
                                touched,
                                handleChange,
                                handleBlur,
                                handleSubmit,
                                isSubmitting,
                                /* and other goodies */
                            }) => (
                                <form action="" onSubmit={handleSubmit} className="contactContainerForm">

                                    <div className=' title text-center'>
                                        <Typography variant="p" className='text-4xl font-bold inline border-b-4 border-black text-black'>Admin Login</Typography>
                                    </div>


                                    <input type="email" name="email"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.email} placeholder='Email' />
                                    <p className=' text-red-500 '>{errors.email && touched.email && errors.email}</p>

                                    <input type="text" name="password"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.password} placeholder='Password' />
                                    <p className=' text-red-500 '> {errors.password && touched.password && errors.password}</p>

                                    <Button variant='contained' disabled={loading}  type='submit'>LOGIN </Button>

                                    <Button variant='contained' style={{backgroundColor:"black",color:"white"}}> <Link to="/"> BACK TO HOME</Link> </Button>
                                </form>
                            )}

                        </Formik>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Login