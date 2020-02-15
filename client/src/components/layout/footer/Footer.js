import React from 'react';
import { Link } from 'react-router-dom';

import './Footer.css';
import footer_logo from './footer_logo.png';

const Footer = props => {
  return (
    <footer>
      <div className='footerBG'>
        <div className='centerContainer'>
          <div className='content'>
            <img src={footer_logo} alt='Twilight Savant, Patrick Merlino' />
            <br />
            <button className='rndBtn color_yellow nounderline bold font14'>
              425.315.3743
            </button>
            <br />
            <Link to='/fullstack'>Fullstack Developer</Link> |{' '}
            <Link to='/fullstack'>Graphic Designer</Link>
            <br />
            <Link to='/fullstack'>Industry Resume</Link> |{' '}
            <Link to='/fullstack'>Contact Me</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {};

export default Footer;
