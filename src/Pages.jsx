import React, { useEffect } from 'react'
import Home from "./pages/home/Home"
import Skill from './pages/skill/Skill'

import Contact from './pages/contact/Contact'
import About from './pages/about/About'
import { Project } from './pages/project/Project'
import { useSelector } from 'react-redux'


const Pages = () => {

    const { user } = useSelector((state) => state.user);
 
    return (
        <>
            <Home />
            <About about={user.about} />
            <Skill />
            <Project projects={user.projects}  />
            <Contact />
        </>
    )
}

export default Pages