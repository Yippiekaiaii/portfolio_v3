import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='nav_bar'>
      <NavLink to="/" className='nav_link'>HOME</NavLink>
      <NavLink to="/about" className='nav_link'>ABOUT ME</NavLink>
      <NavLink to="/projects" className='nav_link'>PROJECTS</NavLink>
      <NavLink to="/contact" className='nav_link'>CONTACT</NavLink>
    </div>
  )
}

export default NavBar
