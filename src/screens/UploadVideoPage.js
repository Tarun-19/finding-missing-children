import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function UploadVideoPage(props) {
    console.log("upld vid")
    //const imgValue = localStorage.getItem("Image");
    // const imgValue = props.imageName;
    // const [img, setImg] = useState("");
    // console.log('imgValue ->', imgValue);
    // useEffect(()=> {
    //   setImg(localStorage.getItem("Image"));
    // }, [])
  console.log(props);
  return (
    <div>
      <h1 style={{color:'red'}}>Upload video Page</h1>
      <Link to="/results">
      <h1>{1}</h1>
          <button type="button">Start processing</button>
      </Link>
    </div>
  );
}

export default UploadVideoPage;