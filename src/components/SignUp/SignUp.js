import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import './SignUp.css'
import auth from '../../firebase.init';

const SignUp = () => {
    let [email, setEmail] = useState('')
    let [password, setPassword] = useState('')
    let [confirmPassword, setConfirmPassword] = useState('')
    let [error, setError] = useState('')
    let navigate = useNavigate()

    const [
        createUserWithEmailAndPassword, user
    ] = useCreateUserWithEmailAndPassword(auth);

    let handleEmailBlur = (event) => {
        setEmail(event.target.value)
    }
    let handlePasswordBlur = (event) => {
        setPassword(event.target.value)
    }

    let handleConfirmPasswordBlur = (event) => {
        setConfirmPassword(event.target.value)
    }

    /*  let handleError = (event) => {
         setError('Password did not Match')
         return;
     } */

    let handleFormLogIn = (event) => {
        event.preventDefault()
        if (password !== confirmPassword) {
            setError('Password did not Match')
            return;
        }
        else {
            setError('')
        }
        if (password.length < 6) {
            setError('Password length must be more or equal 6 character')
            return;
        }
        else {
            setError('')
        }

        createUserWithEmailAndPassword(email, password)

    }

    if (user) {
        navigate('/')
    }



    console.log(email);
    console.log(error);

    return (
        <div className='form-container pb-5'>
            <div>
                <h2 className='form-title text-center'>Sign Up</h2>
                <form onSubmit={handleFormLogIn}>
                    <div className="form-input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name='email' required />
                    </div>
                    <div className="form-input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePasswordBlur} type="password" name='password' required />
                    </div>
                    <div className="form-input-group">
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input onBlur={handleConfirmPasswordBlur} type="password" name='confirmPassword' required />
                    </div>
                    <p className='text-danger fw-bold'>{error}</p>
                    <input className='form-submit' type="submit" value="SignUp" />
                </form>
                <p>Already have an Account? <Link className='form-link' to='/signup'>Login</Link></p>
            </div>
        </div>
    );
};

export default SignUp;