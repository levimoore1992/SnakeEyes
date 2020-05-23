import React from "react";
import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom";

const IconButton = ({header, icon, text}) => {
    return (
        <div className='icon-button-main'>
            <div className="icon-button-icon">
                {icon}
            </div>
            <h2 className="icon-button-header">{header}</h2>
            <p className="icon-button-paragraph">{text}</p>
            <Link to="/signup">
                <Button variant='contained'>Sign Up</Button>
            </Link>
        </div>
    )
}

export default IconButton