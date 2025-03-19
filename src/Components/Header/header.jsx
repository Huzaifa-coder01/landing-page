import React from "react";
import './header.css'

const Header = () => {
    return(
        <header>
            <nav>
                <a href="#home" className="logo">Brand</a>
                <ul className="nav-links">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#service">Services</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header