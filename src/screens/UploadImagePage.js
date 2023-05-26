import React, {useState} from 'react';
import { Link } from 'react-router-dom';

function UploadImagePage() {
    const [imageName, setimageName] = useState("test-image");
  return (
    <div>
      <h1 style={{color:'red'}}>Upload Image Page</h1>
      <Link to={"/upload-video/"+imageName}>
          <button type="button">Next</button>
        </Link>
    </div>
  );
}

export default UploadImagePage;