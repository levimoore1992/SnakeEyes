import React from "react";
import {useForm} from "react-hook-form";
import {Link} from "react-router-dom";

const Login = () => {
    const {register, handleSubmit, watch, errors} = useForm()
    const onSubmit = data => {
        console.log(data)
    }

    return(
        <form onSubmit={handleSubmit(onSubmit)} className={'login-form'}>
            <legend>Sign in to continue</legend>
            <hr/>
            <input type="email" name='email' ref={register} placeholder='Email Address'/>
            <input type="password" name='password' />
            <div className="button">
                <button type='submit'>Sign In</button>
                <button type='button'><Link to={'signup'}>Register</Link></button>
            </div>
            <Link to={'/forgot-password'}>Forgot your password?</Link>
        </form>
    )
}
    export default Login