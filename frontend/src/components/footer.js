import React from "react";
import {Link} from "react-router-dom";

const Footer = () => {
    return(
        <footer className="footer ">
            <div>
                <ul className='footer-list'>
                    <li>Snake Eyes © 2020</li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/privacy">Privacy Policy</Link></li>
                    <li><Link to="/terms">Terms of Service</Link></li>

                </ul>
            </div>
        </footer>
    )
}

export default Footer