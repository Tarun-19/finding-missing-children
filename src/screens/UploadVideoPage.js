import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import '../containers/header/header.css';
import ai from '../assets/ai.png';


function UploadVideoPage() {
    const { imageName } = useParams();
    console.log(imageName)
    const [videoName, setvideoName] = useState("test-video");
  return (
    <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
    <div className="gpt3__header-image">
    <img src={ai} alt="AI" className="ai-image" />
      </div>
    </div>

    <div className="upload-image-page-content">
      <h1 className="upload-image-page-title">Upload video</h1>

      <Link to={"/results/"+imageName+"/"+videoName}>
        <button className="round-button">Start Poccess</button>
      </Link>
    </div>
    <div className="gpt3__header-image">
    <img src={ai} alt="AI" className="ai-image" />
      </div>
  </div>
  
  );
}

export default UploadVideoPage;