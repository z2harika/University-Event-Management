import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const ContactUs = () => {
  return (
    <div className="contact-us">
      <div className='container'>

        <h3 className='display-5 font-weight-bold text-muted' style={{"marginBottom":"20px","marginTop":"20px","textAlign":"center"}}>Contact Us</h3>
      </div>
      <div className="contact-icons" style={{"textAlign":"center"}}>
        <a  style={{"margin":"15px"}}href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon style={{color: "#808080"}} icon={faLinkedin} size="2x" />
        </a>
        <a style={{"margin":"15px"}} href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon  style={{color: "#808080"}} icon={faInstagram} size="2x" />
        </a>
        <a  style={{"margin":"15px"}} href="mailto:example@example.com">
          <FontAwesomeIcon style={{color: "#808080"}} icon={faEnvelope} size="2x" />
        </a>
      </div>
    </div>
  );
}

export default ContactUs;
