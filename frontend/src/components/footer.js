import React from "react";
import {Link} from "react-router-dom";

const Footer = () => {
    return(
        <footer className="footer ">
            <div>
                <ul className='footer-list'>
                    <li>Snake Eyes © 2020</li>
                    <li><Link to="/">Contact</Link></li>
                    <li><Link to="/">Privacy Policy</Link></li>
                    <li><Link to="/">Terms of Service</Link></li>

                </ul>
            </div>
        </footer>
    )
}

export default Footer