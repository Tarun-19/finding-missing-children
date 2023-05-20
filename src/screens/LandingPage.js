import React from 'react';
import { Link } from 'react-router-dom';
import { Footer, Blog, Possibility, Features, WhatGPT3, Header } from '../containers';
import { CTA, Brand, Navbar } from '../components';
import '../App.css';

function LandingPage() {
  console.log("landing")
  return (
    <div>
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
}

export default LandingPage;
