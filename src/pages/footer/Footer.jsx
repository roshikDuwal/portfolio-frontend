import React from 'react'
import "./footer.scss"
import { FaAddressBook } from "react-icons/fa"
import { BsFillTelephoneFill } from "react-icons/bs"
import { BiLogoGmail } from "react-icons/bi"
import { FaFacebook, FaLinkedin } from "react-icons/fa"

const Footer = () => {

    const currentYear = new Date().getFullYear();

    return (
        <>
            <div className=' section-footer  w-full text-white h-full p-5   '>
                <div className=' container1 w-full grid grid-cols-3 '>
                    <div className="f-about">
                        <h3>About</h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla, esse?</p>
                    </div>

                    <div className="f-links">
                        <h3>Links</h3>
                        <ul>
                            <li><span></span><a href="#">Home</a></li>

                            <li><span></span><a
                                href="#">Services</a></li>

                            <li><span></span><a href="#">Project</a></li>

                            <li><span></span><a href="#">Contact Us</a></li>
                        </ul>
                    </div>

                    <div className="f-address">
                        <h3>Have a Question?</h3>
                        <address>
                            <div>
                                <p><FaAddressBook /> Bhaktapur,Nepal</p>
                            </div>
                            <div>
                                <p> <BsFillTelephoneFill /> <a
                                    href="tel:_+9779860077825">+977-9860077825</a></p>
                            </div>
                            <div>
                                <p><BiLogoGmail /><a
                                    href="mailto:duwalroseek@gmail.com">duwalroseek@gmail.com</a></p>
                            </div>
                        </address>
                    </div>
                </div>

                <div className="container2">

                    <div className="f-social-icons">
                        <a href="https://www.linkedin.com/in/roshik-duwal-b9546a23b/" target="_blank"><FaLinkedin /></a>

                        <a href="https://www.facebook.com/roseek.duwal.92" target="_blank"><FaFacebook /></a>
                    </div>

                    <div className="f-credits">
                        <p>Copyright @{currentYear} All right reserved ||</p>
                    </div>

                </div>

            </div>
        </>
    )
}

export default Footer