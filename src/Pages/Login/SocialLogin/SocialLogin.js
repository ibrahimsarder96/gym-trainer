import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import google from '../../../images/social/google.png';
import facebook from '../../../images/social/facebook.png';
import github from '../../../images/social/github.png';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const navigate = useNavigate();
  let errorElement;
  if(error){
    errorElement = <p className='text-danger'>Error: {error?.message}</p>
  }
  if(user){
    navigate('/home')
  }
  return (
    <div>
      <div className="d-flex align-items-center">
      <div style={{height: '1px'}} className="w-50 bg-primary"></div>
      <p className='mt-2 px-2'>or</p>
      <div style={{height: '1px'}} className="w-50 bg-primary"></div>
      </div>
      <button 
          onClick={()=>signInWithGoogle()}
          className='btn btn-primary d-block w-50 mx-auto my-2'>
          <img style={{height: "30px"}} className='' src={google} alt="" />
          <span className='px-2'>Google Sign In</span>
        </button>
      <button 
          onClick={()=>signInWithGoogle()}
          className='btn btn-primary d-block w-50 mx-auto my-2'>
          <img style={{height: "30px"}} className='' src={facebook} alt="" />
          <span className='px-2'>Google Sign In</span>
        </button>
      <button 
          onClick={()=>signInWithGoogle()}
          className='btn btn-primary d-block w-50 mx-auto my-2'>
          <img style={{height: "30px"}} className='' src={github} alt="" />
          <span className='px-2'>Google Sign In</span>
        </button>
    </div>
  );
};

export default SocialLogin;