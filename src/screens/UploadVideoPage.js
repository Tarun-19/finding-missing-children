import React from 'react';
import { Link } from 'react-router-dom';

function UploadVideoPage() {
    console.log("upld vid")
  return (
    <div>
      <h1 style={{color:'red'}}>Upload video Page</h1>
      <Link to="/results">
          <button type="button">Start processing</button>
      </Link>
    </div>
  );
}

export default UploadVideoPage;