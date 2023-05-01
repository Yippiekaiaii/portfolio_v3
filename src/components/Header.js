
import {React, useState} from 'react'




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
        <a href="#" className="menu_toggle" onClick={toggleMenu}><img src="images/carat.png" alt="Menu"/></a>       
    </div>

    {isMenuVisible && (
      <ul className="menu_list">
              <li><a href="/">Home</a></li>
              <li><a href="/about">About Me</a></li>
              <li><a href="/projects">Projects</a></li>
              <li><a href="/contact">Contact</a></li>
      </ul>
    )}

    </>

  )
}

export default Header
