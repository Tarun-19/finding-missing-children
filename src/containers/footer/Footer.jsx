import React from 'react';
import gpt3Logo from '../../logo.svg';
import './footer.css';

const Footer = () => (
  <div className="gpt3__footer section__padding">
    <div className="gpt3__footer-heading">
      <h1 className="gradient__text">Do you want to step in to the future before others</h1>
    </div>

    

    <div className="gpt3__footer-links">
      {/* <div className="gpt3__footer-links_logo">
        
        <p> All Rights Reserved</p>
      </div> */}
      <div className="gpt3__footer-links_div">
        <h4>Links</h4>
        <p>Social Media</p>
        <p>Contact</p>
      </div>
      {/* <div className="gpt3__footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div> */}
      <div className="gpt3__footer-links_div">
        <h4>Get in touch</h4>
        <p>IET LUCKNOW,Uttar Pradesh,India</p>
        <p>8574XXXXXX</p>
        <p>info@fmc.org</p>
      </div>
    </div>

    <div className="gpt3__footer-copyright">
      <p>@2023 FMC. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;
