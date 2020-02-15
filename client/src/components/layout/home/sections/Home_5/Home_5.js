import React from 'react';

import './Home_5.css';
import lang_icons from './lang_icons.png';

const Home_5 = props => {
  return (
    <section className='h_sec_5'>
      <div className='bg'>
        <div className='centerContainer color_white'>
          <h1 className='font22'>LANGUAGES</h1>
          <h2 className='boldNO font14'>
            Experience in a diverse range of languages to accomplish your next
            projects goals.
          </h2>
          <img src={lang_icons} alt='' />
        </div>
      </div>
    </section>
  );
};

export default Home_5;
