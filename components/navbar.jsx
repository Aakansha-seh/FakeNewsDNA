import React from 'react'
import './navbar.css'

const Navbar = () => {
  return (
    <div>
        <div className="navbar">
            <ul >
            <li><a href="./Home.jsx">Home</a></li>
            <li><a href="./About.jsx">About</a></li>
        </ul>
        <div className="logo marcellus-regular">Fake News DNA</div>
        </div>
    </div>
  )
}

export default Navbar
