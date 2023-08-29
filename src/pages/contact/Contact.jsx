import React, { useEffect } from 'react'
import { Button } from '@mui/material'
import { Formik } from 'formik';
import { Typography } from "@mui/material"
import "./contact.scss"
import {useDispatch, useSelector} from "react-redux"

import {contactUs} from "../../action/User"
import {toast} from "react-hot-toast"

const Contact = () => {
    const dispatch=useDispatch()


    const {loading,message,error}=useSelector((state)=>state.update)



    
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

  },[error, message, dispatch])

    return (
        <>
            <div className='w-full h-screen my-12 contactbox' name="contact">
                <div className='w-full  contact'>
                    <div className=' text-center'>
                        <Typography variant="p" className='text-4xl font-bold inline border-b-4 border-pink-600 text-white'>Contact Us</Typography>

                    </div>

                    <div className="contactRightBar"></div>

                    <div className="contactContainer">

                        <Formik
                            initialValues={{ name: '', email: '', message: '' }}

                            validate={values => {

                                const errors = {};
                                if (!values.name) {
                                    errors.name = "Required Name"
                                }
                                if (!values.message) {
                                    errors.message = "Required Message"
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

                            onSubmit={(values,action ) => {
                              const {email,name,description}=values

                              dispatch(contactUs(email,name,description))
                              action.resetForm()
                            
                            }}
                        >

                            {({
                                values,
                                errors,
                                touched,
                                handleChange,
                                handleBlur,
                                handleSubmit,
                                
                                /* and other goodies */
                            }) => (
                                <form action="" onSubmit={handleSubmit} className="contactContainerForm">


                                    <input type="text" name="name"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.name} placeholder='Name' />
                                    <p className=' text-red-500 '> {errors.name && touched.name && errors.name}</p>

                                    <input type="email" name="email"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.email} placeholder='Email' />
                                    <p className=' text-red-500 '>{errors.email && touched.email && errors.email}</p>


                                    <textarea name="message"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.message} cols="30" rows="10" placeholder='message'></textarea>
                                    <p className=' text-red-500 '>  {errors.message && touched.message && errors.message}</p>

                                    <Button disabled={loading} variant='contained' type='submit'> Send </Button>
                                </form>
                            )}

                        </Formik>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact