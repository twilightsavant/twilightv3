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
            <Link to='/'>Home</Link> | <Link to='/fullstack'>Fullstack</Link>
            <br />
            <Link to='/resume'>Industry Resume</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {};

export default Footer;
