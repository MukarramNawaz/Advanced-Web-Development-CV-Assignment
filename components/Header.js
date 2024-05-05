import React from 'react';

function Header() {
  return (
    <div className="header">
      <div>  <img src={require('../my_img.png')}  alt="Mukarram Nawaz" /></div>
     
     <div><h1>Mukarram Nawaz</h1>
      <h2>React Front-End Developer</h2>
      <p>Ambitious, Cooperative, Observant,</p>
      <p>Responsible, Philanthropist, Vigilant</p> </div>
      
    </div>
  );
}

export default Header;
