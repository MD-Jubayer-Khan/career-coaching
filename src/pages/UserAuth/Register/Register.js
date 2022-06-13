import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import './Register.css';
import auth from '../../../firebase.init';
import Loading from '../../shared/Loading/Loading';
import { Button } from 'react-bootstrap';
import SocialLogin from '../../shared/SocialLogin/SocialLogin';

const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
      ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification:true});
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";

    const navigateLogin = () =>{
        navigate('/login');
    };

    if(loading){
        return <Loading></Loading>
    }

   
    if (user) {
        navigate(from, { replace: true });
    }

    const handleRegister = event =>{
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        createUserWithEmailAndPassword(email, password);
    }

    return (
        <div className='register-form'>
            <h2 style={{textAlign: 'center'}}>Please Register</h2>
            <form onSubmit={handleRegister}>
                <input type="text" name="name" id="" placeholder='Your Name'/>
                
                <input type="email" name="email" id="" placeholder='Email Address' required/>
                
                <input type="password" name="password" id="" placeholder='Password' required/>
                <Button variant="primary" type="submit" value="Register" >
                   Register
                </Button>
            </form>
            <p className='mt-3'>Already have an account? <Link to="/login" className='text-primary pe-auto text-decoration-none' onClick={navigateLogin}>Please Login</Link> </p>

            {/* Google Sign In */}

            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;