import React from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


const Contact = () => {
    return(
        <div className={'contact-main'}>
            <div className="contact-content">
            <div>Were here to answer your questions</div>
            <TextField
              placeholder="Email Address"
              label="What's your e-mail address?"
              margin="normal"
              fullWidth
            />
            <TextField
              placeholder="Type your question here"
              label="What's your question or issue?"
              margin="normal"
              fullWidth
            />

            <Button
              color="primary"
              variant="contained"
            >Send Email</Button>
            </div>

        </div>
    )
}

export default Contact