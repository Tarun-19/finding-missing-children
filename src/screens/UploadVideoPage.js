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
      <h1 className="gradient__text">Upload Video</h1>
      
      <div className="gpt3__header-content__input">
      <Link to={"/results/"+imageName+"/"+videoName}>
        <button className="round-button">Start Poccess</button>
      </Link>
      </div>
      
    </div>

    <div className="gpt3__header-image">
      <img src={ai} />
    </div>
  </div>
  
  );
}

export default UploadVideoPage;