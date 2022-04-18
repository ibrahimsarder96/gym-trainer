import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({service}) => {
  const {id,name, img, description, price} = service;

  const navigate = useNavigate()
  const navigateToServiceDetail = id =>{
      navigate(`/service/${id}`)
  }
  return (
    <div className='service'>
      <img  src={img} alt="" />
      <h2>{name}</h2>
      <p><small>Price: {price}</small></p>
      <p>{description}</p>
      <Link to="/checkout">
      <button onClick={()=> navigateToServiceDetail(id)} className='book'>Book: {name}</button>
      </Link>
      
    </div>
  );
};

export default Service;