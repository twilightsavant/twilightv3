import React from 'react';
import { useHistory } from 'react-router-dom';

import './Home_2.css';

const Home_2 = props => {
  let history = useHistory();

  return (
    <section className='h_sec_2'>
      <div className='centerContainer flex'>
        <div
          className='h2RollOver designDiv justifyRight'
          onClick={() => {
            history.push('/design');
          }}
        >
          <div className='rollOverTxt bold'>Design</div>
        </div>
        <div
          className='h2RollOver fullstack justifyLeft'
          onClick={() => {
            history.push('/fullstack');
          }}
        >
          <div className='rollOverTxt bold color_white'>Fullstack</div>
        </div>
        <div
          className='h2RollOver resume justifyLeft'
          onClick={() => {
            history.push('/resume');
          }}
        >
          <div className='rollOverTxt bold'>Resume</div>
        </div>
      </div>
    </section>
  );
};

export default Home_2;
