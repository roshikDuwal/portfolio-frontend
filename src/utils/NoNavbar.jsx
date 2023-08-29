import { useLocation } from "react-router-dom"
import { useState, useEffect } from "react"


const NoNavbar = ({children}) => {
    const location = useLocation();

    const [showNavbar, setNavbar] = useState(true)

    useEffect(() => {
        if (location.pathname === "/admin") {
            setNavbar(false)
        } else if (location.pathname === "/admin/projects") {
            setNavbar(false)
        } else {
            setNavbar(true)
        }
    }, [location])

    return (
        <div>{showNavbar && children}</div>
    )
}

export default NoNavbar