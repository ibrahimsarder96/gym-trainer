import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import {useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import SocialLogin from './SocialLogin/SocialLogin';

const Login = () => {
  const navigate = useNavigate();
  const emailRef = useRef();
  const passwordRef = useRef();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);
  let errorElement;
  if(user){
    navigate(from, { replace: true });
  }
  
  if(error){
    errorElement = <p className='text-danger'>Error: {error?.message}</p>
  }
  const handleSubmit = event =>{
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    signInWithEmailAndPassword(email, password)
    console.log(email, password);
  }
  
  const navigateRegister = event =>{
    navigate('/register')
  }
  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
  const resetPassword = async() =>{
    const email = emailRef.current.value;
    // if(email){
    // //   await sendPasswordResetEmail(email);
    // //   toast('Sent email');
    // // }
    // // else{
    // //   toast('please enter your email address')
    //  }
  }
  return (
    <div className='container mx-auto w-50'>
      <h2 className='text-center mt-5'>Please Login</h2>
      <Form onSubmit={handleSubmit}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
  
    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required/>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
   
    <Form.Control ref={passwordRef} type="password" placeholder="Password" required/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary w-50 d-block mx-auto" type="submit">
    Login
  </Button>
</Form>
{errorElement}
<p className='mt-4'>New to Fitness Gym? <Link to="/register" className='text-primary pe-auto text-decoration-none' onClick={navigateRegister}>Please Register</Link></p>
<p className='mt-4'>Forget Password? <button className='btn btn-link text-primary pe-auto text-decoration-none' onClick={resetPassword}>Reset Password</button></p>
<SocialLogin></SocialLogin>
    </div>
  );
};

export default Login;