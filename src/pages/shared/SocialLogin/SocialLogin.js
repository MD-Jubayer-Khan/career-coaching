import React from 'react';
import { Button } from 'react-bootstrap';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../Loading/Loading';



const SocialLogin = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    let from = location.state?.from?.pathname || "/";

    let errorElement;

    if (user) {
        navigate(from, { replace: true });
    };

    if(error){
        errorElement = <p className='text-danger'>{error?.message}</p> 
    }

    if(loading){
        return <Loading></Loading>
    }
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{height:'1px', backgroundColor:'lightGray'}} className="w-50"></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{height:'1px', backgroundColor:'lightGray'}} className="w-50"></div>
            </div>
            {errorElement}
            <div>
                <Button onClick={()=>signInWithGoogle()} className='bg-info text-white border-none d-block mx-auto'>Google Sign In</Button>
            </div>
        </div>
    );
};

export default SocialLogin;