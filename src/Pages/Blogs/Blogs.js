import React from 'react';

const Blogs = () => {
  return (
    <div className='container'>
      <h2>1.Why are you using firebase? what other options do you have to implement authentication?</h2>
      <p>The Firebase Realtime Database lets you build rich, collaborative applications by allowing secure access to the database directly from client-side code. Data is persisted locally, and even while offline, realtime events continue to fire, giving the end user a responsive experience.
      Authentication is used by a server when the server needs to know exactly who is accessing their information or site.
      Usually, authentication by a server entails the use of a user name and password. Other ways to authenticate can be through cards, retina scans, voice recognition, and fingerprints.
      Authentication by a client usually involves the server giving a certificate to the client in which a trusted third party such as Verisign or Thawte states that the server belongs to the entity (such as a bank) that the client expects it to.
      </p>
     <h2>Authentication vs 	Authorization?</h2>
     <h3>Authentication:</h3>
     <h6>Authentication verifies who the user is.</h6>
     <h6>Authentication works through passwords, one-time pins, biometric information, and other information provided or entered by the user.</h6>
     <h6>Authentication is the first step of a good identity and access management process.</h6>
     <h6>Authentication is visible to and partially changeable by the user.</h6>
     <h3>Authorization:</h3>
     <h6>	Authorization determines what resources a user can access.</h6>
     <h6>Authorization works through settings that are implemented and maintained by the organization.</h6>
     <h6>Authorization always takes place after authentication.</h6>
     <h6>Authorization isn’t visible to or changeable by the user.</h6>
    </div>
  );
};

export default Blogs;