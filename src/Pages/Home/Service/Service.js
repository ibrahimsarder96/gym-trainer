import React from 'react';
import './Service.css'

const Service = ({service}) => {
  const {name, img, description, price} = service;
  return (
    <div className='service'>
      <img  src={img} alt="" />
      <h2>{name}</h2>
      <p><small>Price: {price}</small></p>
      <p>{description}</p>
      <button className='book'>Booking</button>
    </div>
  );
};

export default Service;