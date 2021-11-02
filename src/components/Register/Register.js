import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const { user, userSignUp, error, setError } = useAuth();
    const handleEmail = e => {
        setEmail(e.target.value);
    }
    const handlePassword = e => {
        const password = e.target.value
        if (password.length < 6) {
            setError('password must be atleast 6 characters');
            return;
        }
        setPassword(password)
    }

    const handleRegister = () => {
        userSignUp(email, password, name);
    }
    const handleUsername = e => {
        setName(e.target.value)
    }
    return (
        <div className='row m-5'>
            <div className='col-lg-6'>
                <img src="https://viragtea.com/backend/img/admin-login.jpg" className='img-fluid' alt="" />
            </div>
            <div className='col-lg-6'>
                <div className='shadow-lg p-5'>
                    <h3 className='text-secondary'>Registration</h3>
                    <form className='mt-4 '>
                        <div class="mb-3">
                            <input onBlur={handleEmail} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Email' required />
                        </div>
                        <div class="mb-3">
                            <input onBlur={handleUsername} type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Username' required />

                        </div>
                        <div class="mb-3">
                            <input onBlur={handlePassword} type="password" class="form-control" id="exampleInputPassword1" placeholder='password' required />
                            <p><small className='text-danger'>{error}</small></p>
                        </div>
                        <div class="d-grid gap-2">
                            <button onClick={handleRegister} class="btn btn-secondary" type="button">Create Your Account</button>
                        </div>

                    </form>
                    <Link to='/login' className='text-link'>
                        <p className='text-center mt-2'><small className='text-primary'>Already have an account?</small> </p>
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default Register;