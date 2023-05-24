import React from 'react';
import possibilityImage from '../../assets/possibility.png';
import './possibility.css';

const Possibility = () => (
  <div className="gpt3__possibility section__padding" id="possibility">
    <div className="gpt3__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="gpt3__possibility-content">
      <h1 className="gradient__text">The possibilities are <br /> beyond your imagination</h1>
      <p>AI has unlocked the ability to generate future images, providing a glimpse into what lies ahead. Using generative models like GANs and autoregressive models, we can create new, realistic images that depict potential future scenarios. While these images are speculative and not definitive predictions, they offer a creative and thought-provoking avenue for exploration.</p>
      <h4>1. Generative Adversarial Networks (GANs).</h4>
      <h4>2. Autoregressive Models.</h4>
      <h4>3. The Speculative Nature of Future Image Generation.</h4>
    </div>
  </div>
);

export default Possibility;
