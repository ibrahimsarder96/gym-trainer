import React from 'react';
import './About.css'
import photo1 from '../../images/me/photo-1.jpg'

const About = () => {
  return (
      <div className="container">
        <img className='photo mt-2' src={photo1} alt="" />
        <h2 className='mt-3'>Md.Ibrahim Sarder</h2>
        <p>My only goal for the next four months is to prepare for a good quality web development.I will do an internship in a good company.My goal is to be a fullstack and problem solver.This is my big mission</p>
    </div>
  );
};

export default About;