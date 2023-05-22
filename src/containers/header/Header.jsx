import React from 'react';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';
import './header.css';
import { Link } from 'react-router-dom';

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">Let&apos;s Build Something useful with AI</h1>
      <p>In our final year project, we present a hope of easily tracking the missing children!</p>

      <div className="gpt3__header-content__input">
        <Link to="/upload-image">
          <button type="button">Get Started</button>
        </Link>
      </div>

      <div className="gpt3__header-content__people">
        <img src={people} />
        <p>59,262 children went missing in India in 2020</p>
      </div>
    </div>

    <div className="gpt3__header-image">
      <img src={ai} />
    </div>
  </div>
);

export default Header;
