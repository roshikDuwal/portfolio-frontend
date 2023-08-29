import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "./App.scss"

import Navbar from './components/Navbar'
import Pages from './Pages'
import Footer from './pages/footer/Footer'
import Login from './pages/Login/Login'
import { useDispatch, useSelector } from 'react-redux'
import { getUser, loadUser } from './action/User'

import AdminPanel from "./pages/Adminpanel/AdminPanel"
import Error from './error/Error'
import AdminProject from './pages/Adminpanel/Projects/AdminProject'
import NoNavbar from './utils/NoNavbar'
import { Blocks } from 'react-loader-spinner'

import { Toaster } from 'react-hot-toast';

const App = () => {

  const dispatch = useDispatch()

  const { isAuthenticated } = useSelector((state) => state.login)
  const { loading } = useSelector((state) => state.user)


  useEffect(() => {
    dispatch(getUser())
    dispatch(loadUser())
  }, [dispatch])

  return (
    <>
      <Router>
        {
          loading ? <div className='w-full h-screen flex justify-center items-center'>
            <Blocks
              visible={true}
              height="80"
              width="80"
              ariaLabel="blocks-loading"
              wrapperStyle={{}}
              wrapperClass="blocks-wrapper"
            />
          </div> : <>

            <NoNavbar><Navbar /></NoNavbar>
            <Routes>

              <Route path='/' element={<Pages />} />

              <Route path='/admin' element={isAuthenticated ? <AdminPanel /> : <Login />}></Route>

              <Route path='/admin/project' element={isAuthenticated ? <AdminProject /> : <Login />}></Route>

              <Route path='*' element={<Error />} />
            </Routes>
            <Footer />
            <Toaster />
          </>
        }


      </Router>
    </>
  )
}

export default App