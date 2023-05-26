import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './screens/LandingPage';
import UploadImagePage from './screens/UploadImagePage';
import UploadVideoPage from './screens/UploadVideoPage';
import ResultsPage from './screens/ResultsPage';
import './App.css';

const App = () => (
  <div>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/upload-image' element={<UploadImagePage />} />
        <Route path='/upload-video/:imageName' element={<UploadVideoPage />} />
        <Route path='/results/:imageName/:videoName' element={<ResultsPage />} />
      </Routes>
    </BrowserRouter>
  </div>
);

export default App;
