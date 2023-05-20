import React from 'react';
import { Link } from 'react-router-dom';

function UploadImagePage() {
    console.log("upld img")
  return (
    <div>
      <h1 style={{color:'red'}}>Upload Image Page</h1>
      <Link to="/upload-video">
          <button type="button">Next</button>
        </Link>
    </div>
  );
}

export default UploadImagePage;