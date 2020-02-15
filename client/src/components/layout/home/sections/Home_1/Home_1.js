import React from 'react';
import { Link } from 'react-router-dom';

import './Home_1.css';

const Home_1 = props => {
  return (
    <section className='h_sec_1'>
      <div className='centerContainer bgDiv fadeInBottom'>
        <div className='content'>
          <h2 className='font24'>
            Technology That
            <br />
            Makes You <span className='font28 bold'>Look Good</span>
          </h2>
          <h4>Full Stack Developer</h4>
          <h3 className='font26'>Patrick Merlino</h3>

          <button className='rndBtn'>
            <Link to='/resume' className='color_yellow nounderline'>
              Get Your Project Started
            </Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home_1;
