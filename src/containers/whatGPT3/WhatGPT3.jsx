import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="What is Face Recognition?" text="Facial recognition is the process of identifying or verifying a person's identity using their face. It captures, analyzes, and compares patterns based on the person's facial details." />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">Applications of Face Recognition</h1>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="USER AUTHENTICATION" text="Many people will have experienced using their phone, tablet or computer camera to register their face. Often used for the purpose of unlocking a device for the specific user, this type of facial recognition has widespread uses for time and attendance systems." />
      <Feature title="LAW ENFORCEMENT" text="Mugshots have long been part of the police’s arsenal for identifying and tracking down suspects or convicts. Once an arrested individual has their photograph taken, this will be added to the police facial recognition database, to be scanned whenever the police carry out another criminal search." />
      <Feature title="REDUCING ONLINE BANKING FRAUD" text="By integrating biometric identification into online banking, bank providers can use biometrics to remove the risk of passwords being compromised or one-time passwords being intercepted." />
    </div>
  </div>
);

export default WhatGPT3;
