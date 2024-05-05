import React from 'react';
import '../App.css';
function Courses() {
  return (
    <div className="socials">
      <h2>Socials</h2>
      <ul>
        <li>
        <span> <img className="social_image" src={require('../icons8-linkedin-48.png')}  alt="LinkedIn" /><a href="https://www.linkedin.com/in/mukarram-nawaz-72371a25a" target='blank'>Linkedin</a></span>
        </li>
        <li>
        <span> <img className="social_image" src={require('../icons8-facebook-48.png')}  alt="LinkedIn" /><a href="https://www.facebook.com/Mukarram.17/" target='blank'>FaceBook</a></span>
          
        </li>
        <li>
          <span><img  className="social_image" src={require('../icons8-youtube-48.png')}  alt="LinkedIn" /> <a href="https://www.youtube.com/@mukarramco" target='blank'>Youtube</a></span>
        </li>
      
      </ul>
    </div>
  );
}

export default Courses;