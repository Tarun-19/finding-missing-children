import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Upload the probe image',
    text: 'Probe image refers to the image captured for facial recognition',
  },
  {
    title: 'Upload the cctv video',
    text: 'Upload the cctv footage where the chances ofloacting the person is very high',
  },
  {
    title: 'Get the output',
    text: 'The output is probability vs time graph which indicates the probability of locating the target at a particular time stamp',
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">Quick Overview</h1>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
