import React from "react";
import {useForm} from "react-hook-form";
import axios from 'axios';
const Contact = () => {
    const {register, handleSubmit, watch, errors} = useForm();
    const onSubmit = data => {
        console.log(data)
    }

    return(
        <form onSubmit={handleSubmit(onSubmit)} className='contact-form'>
            <legend>We're here to answer your questions</legend>
            <hr/>
            <input type="email" name='email-address' ref={register} placeholder='Whats your email' className='contact-form-input'/>
            <textarea name="question" id="" cols="30" rows="10" ref={register} placeholder='Type your question  here' className='contact-form-input'/>
            <button type='submit' className='contact-form-submit'>Send Email</button>

        </form>
    )
}

export default Contact