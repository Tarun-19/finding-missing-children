import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../components/brand/brand.css';
import '../containers/header/header.css';
import ai from '../assets/ai.png';


function UploadImagePage() {
  const [imageName, setImageName] = useState("test-image");

  return (
    <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">Upload Image</h1>
      
      <div className="gpt3__header-content__input">
      <Link to={`/upload-video/${imageName}`}>
          <button className="round-button">Next</button>
        </Link>
      </div>
      
    </div>

    <div className="gpt3__header-image">
      <img src={ai} />
    </div>
  </div>
  );
}

export default UploadImagePage;
