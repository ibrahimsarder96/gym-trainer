import React from 'react';
import { Form } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import './Checkout.css'

const Checkout = () => {
  const {serviceId} = useParams();
  return (
    <div className='checkout-form mt-5'>
      <h2>Please checkout your booking{serviceId}</h2>
      <Form >
        <input type="text" name="name" id="" placeholder='Your Name'/>
        <input type="email" name="email" id="" placeholder='Email'/>
        <input type="text" name="number" id="" placeholder='Phone-Number'/>
        <input type="text" name="address" id="" placeholder='Address' />
        
        <input 
        className='bg-primary text-white mx-auto w-50 rounded mt-2' 
        type="submit" 
        value="Checkout" />
      </Form>
    </div>
  );
};

export default Checkout;