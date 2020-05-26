import React, {useEffect} from "react";
import {Link} from "react-router-dom";
import SnakeEyes from '../assets/snake-eyes.jpg'

const Navbar = () => {
    const isAuthenticated = true;
    return(
        <nav className='navbar-main'>
            <Link to='/'>
                <img src={SnakeEyes} alt=""/>
            </Link>
            {(!isAuthenticated) ?
                <div>
                    <Link to={'/signup'}>Signup</Link>
                    <Link to={'login'}>Login</Link>
                </div>
             : <div>Settings</div>}
        </nav>
    )
}

export default Navbar