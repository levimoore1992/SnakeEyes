import React from "react";
import {Link} from "react-router-dom";
import SnakeEyes from '../assets/snake-eyes.jpg'

const Navbar = () => {
    return(
        <nav className='navbar-main'>
            <Link to='/'>
                <img src={SnakeEyes} alt=""/>
            </Link>
        </nav>
    )
}

export default Navbar