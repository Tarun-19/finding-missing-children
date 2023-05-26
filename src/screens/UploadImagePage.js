// import React, {Component, useState} from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// // import useRouter

// function UploadImagePage() {
//     const [img, setImg] = useState("");
//     var imageName;
//     console.log("upld img")
//     const router = useNavigate();
//     function fileSelectedHandler(event) {
//       setImg(event.target.files[0].name);
//       console.log(event.target.files[0].name);
//       imageName = event.target.files[0].name;
//     }

//     function redirect() {
//       localStorage.setItem("Image", img);
//       console.log('apple');
//       router('/upload-video');
//     }

//   return (
//     <div>
//       <h1 style={{color:'red'}}>Upload Image Page</h1>

//       <input type="file" onChange={fileSelectedHandler}/>
      
//           <button type="button" onClick={redirect}>Next</button>

//     </div>
//   );
// }

// export default UploadImagePage;

import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

function UploadImagePage() {
  const [img, setImg] = useState("");
  const [imageName, setImageName] = useState("");
  console.log("upld img");
  const router = useNavigate();

  function fileSelectedHandler(event) {
    setImg(event.target.files[0].name);
    setImageName(event.target.files[0].name);
  }

  function redirect() {
    //localStorage.setItem("Image", img);
    console.log('apple');
    router('/upload-video', { state: { imageName } });
  }

  return (
    <div>
      <h1 style={{ color: 'red' }}>Upload Image Page</h1>
      <input type="file" onChange={fileSelectedHandler} />
      <button type="button" onClick={redirect}>Next</button>
    </div>
  );
}

export default UploadImagePage;
