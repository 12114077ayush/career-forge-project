// import React from 'react'
//${!isActive} ${isActive ? `bg-inactive rounded-md border-none text-active` : `text-inactive`}
import "./Navbar.scss"
import { NavLink } from "react-router-dom"
import { useAuth } from "../utils"
function Navbar() {
    const { logoutUser } = useAuth()
    return (
        <div className="wrapper">
            <div className="nav-container">
                <div className="logotext">
                    Career Forge
                </div>
                <div>
                    <ul className="navitems">
                        <li ><NavLink to='' className={({ isActive }) => `${isActive ? `bg-inactive rounded-2xl border-none text-active p-2` : `text-inactive`} mr-[20px] p-[3px] text-[20px] no-underline `}>
                            Home
                        </NavLink>
                        </li>
                        <li >
                            <NavLink to='about' className={({ isActive }) => ` ${isActive ? `bg-inactive rounded-2xl border-none text-active p-2` : `text-inactive`} mr-[20px] p-[3px] text-[20px] `}>
                                About
                            </NavLink>
                        </li>
                        <li className="listitem">
                            <NavLink to='contact' className={({ isActive }) => ` ${isActive ? `bg-inactive rounded-2xl border-none text-active p-2` : `text-inactive`} mr-[20px] p-[3px] text-[20px]  `}>
                                Contact
                            </NavLink>
                        </li>
                        <li className="listitem">
                            <NavLink to='services' className={({ isActive }) => ` ${isActive ? `bg-inactive rounded-2xl border-none text-active p-2` : `text-inactive`} mr-[20px] p-[3px] text-[20px] `}>
                                Services
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className="">
                    {/* <button className="rightbtn">
                        <NavLink to='contact'>
                            CONTACT US
                        </NavLink>
                    </button> */}
                    <button className="rightbtn" onClick={logoutUser}>
                        <NavLink >
                            Logout
                        </NavLink>
                    </button>
                </div>

            </div>
        </div>
    )
}

export default Navbar