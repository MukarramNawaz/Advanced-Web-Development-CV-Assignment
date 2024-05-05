import React from 'react';
import '../App.css';
function Contact() {
  return (
    <div className="contact">
      <h2>Contact</h2>
      <ul>
        <li>
          <span>Email:</span>
          <a href="mailto:mukarram.nawaz17@gmail.com">mukarram.nawaz17@gmail.com</a>
        </li>
        <li>
          <span>Phone:</span>
          <a href="tel:0309-4347753">0309-4347753</a>
        </li>
        <li>
          
          <p><span>Address:</span>University of Management and Technology, Johar Town, Lahore.</p>
        </li>
      </ul>
    </div>
  );
}

export default Contact;