import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

function UploadVideoPage() {
    const { imageName } = useParams();
    console.log(imageName)
    const [videoName, setvideoName] = useState("test-video");
  return (
    <div>
      <h1 style={{color:'red'}}>Upload video Page</h1>
      <Link to={"/results/"+imageName+"/"+videoName}>
          <button type="button">Start processing</button>
      </Link>
    </div>
  );
}

export default UploadVideoPage;