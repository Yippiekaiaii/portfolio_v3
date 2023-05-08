
import {React, useState} from 'react'
import { Link } from 'react-router-dom';

const Header = () => {

  const [isMenuVisible, setMenuVisible]=useState(false)

  //carat menu toggle handler
  const toggleMenu = () => {
        setMenuVisible(!isMenuVisible)
  }

  return (
    <>

    <div className='header'>
        <h1>Peter Wilson</h1>
        <h2>Welcome to my portfolio</h2>      
    </div>

    <div className="carat_menu">
        <Link className="menu_toggle" onClick={toggleMenu}><img src="images/carat.png" alt="Menu"/></Link>       
    </div>

    {isMenuVisible && (
      <ul className="menu_list">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Me</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/contact">Contact</Link></li>
      </ul>
    )}

    </>

  )
}

export default Header
