import React, { useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css'

const Login = () => {
    let [email, setEmail] = useState('')
    let [password, setPassword] = useState('')
    let navigate = useNavigate()

    const [
        signInWithEmailAndPassword,
        user,
        error,
    ] = useSignInWithEmailAndPassword(auth);


    let handleEmailBlur = (event) => {
        setEmail(event.target.value)
    }

    let handlePasswordBlur = (event) => {
        setPassword(event.target.value)
    }

    let handleFormSignIn = (event) => {
        event.preventDefault()
        signInWithEmailAndPassword(email, password)

    }

    if (user) {
        navigate('/shop')
    }


    return (
        <div className='form-container pb-5'>
            <div>
                <h2 className='form-title text-center'>Login </h2>
                <form onSubmit={handleFormSignIn}>
                    <div className="form-input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name='email' required />
                    </div>
                    <div className="form-input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePasswordBlur} type="password" name='password' required />
                    </div>
                    <p>{error?.message}</p>
                    <input className='form-submit' type="submit" value="Login" required />
                </form>
                <p>New to Ema-john? <Link className='form-link' to='/signup'>Create New Account</Link></p>
            </div>
        </div>
    );
};

export default Login;