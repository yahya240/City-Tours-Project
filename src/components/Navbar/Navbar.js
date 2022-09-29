import React from 'react'
import './Navbar.scss';
import logo from  '../../logo.png';

const Navbar = ()=>{
    return(
        <nav className="nav-container">
            <div className="logo">
                <img src={logo} alt="logo"></img>
                {/* <h4>CT</h4> */}
            </div>
            <div className="nav-list">
                <ul>
                    <li><a href='/' >Home</a></li>
                    <li><a href='/' >About</a></li>
                    <li><a href='/' >Tour</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;