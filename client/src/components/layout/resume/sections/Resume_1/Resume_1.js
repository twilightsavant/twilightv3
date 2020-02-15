import React from 'react';
import { Link } from 'react-router-dom';

import './Resume_1.css';

const Resume_1 = props => {
  return (
    <section className='r_sec_1'>
      <div className='centerContainer bgDiv fadeInBottom'>
        <div className='content'>
          <h1 className='font26 bold'>Resume</h1>
          <h2 className='font16 bold900'>Patrick Merlino</h2>
          <h3 className='font16 boldNO'>
            Solutions for Today’s Development &<br /> Graphic Design Challenges
          </h3>

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

Resume_1.propTypes = {};

export default Resume_1;
