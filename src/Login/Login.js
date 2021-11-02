import React, { useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';

const Login = () => {
    const { user, userLogin, signInUsingGoogle, setIsLoading, setUser, error, setError } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const location = useLocation()
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home'
    const handleSignInUsingGoogle = () => {
        signInUsingGoogle()
            .then((result) => {
                const user = result.user;
                console.log(user);
                history.push(redirect_uri);

            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage);
            })
            .finally(() => setIsLoading(false))
    }


    const handleEmail = e => {
        setEmail(e.target.value);
    }
    const handlePassword = e => {
        const password = e.target.value
        setPassword(password)
    }
    const handleLogin = () => {
        userLogin(email, password)
            .then((result) => {
                const user = result.user;
                history.push(redirect_uri);
                console.log(user)
                setUser(user);
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage)
                console.log(error.message)
            })
            .finally(() => setIsLoading(false))
    }
    return (
        <div className='row m-5'>
            <div className='col-lg-6'>
                <img src="https://viragtea.com/backend/img/admin-login.jpg" className='img-fluid' alt="" />
            </div>
            <div className='col-lg-6'>
                <div className='shadow-lg p-5'>
                    <form >
                        <div class="mb-3">
                            <input onBlur={handleEmail} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Email' required />
                            <p className='text-danger'>{error}.</p>

                        </div>
                        <div class="mb-3">
                            <input onBlur={handlePassword} type="password" class="form-control" id="exampleInputPassword1" placeholder='password' />
                        </div>
                        <div class="d-grid gap-2">
                            <button onClick={handleLogin} class="btn btn-secondary" type="button">Log in</button>
                        </div>

                    </form>
                    <Link to='/register' className='text-link'>
                        <p className='text-center mt-2'><small className='text-primary'>New User?</small> </p>
                    </Link>
                    <button onClick={handleSignInUsingGoogle} type="button" class="btn btn-secondary"><i class="fab fa-google me-2"></i>Google SignIn</button>
                </div>

            </div>
        </div>
    );
};

export default Login;