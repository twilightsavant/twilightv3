import React from 'react';
import { Link } from 'react-router-dom';

//import layout stuff
import './Navbar.css';
import header_logo from '../../../img/header_logo.jpg';
import NavDrawerBtn from '../../navDrawerBtn/NavDrawerBtn';

const Navbar = props => {
  return (
    <div className='headerPlaceHolder'>
      <header>
        <div className='centerContainer color_main font14'>
          <div className='navBar'>
            <div className='logo'>
              <img src={header_logo} alt='Twilight Savant' />
            </div>
            <div className='drawerNav'>
              <NavDrawerBtn click={props.click} />
            </div>
            <div className='l_links'>
              <ul>
                <li>
                  <Link to='/' className='color_main'>
                    HOME
                  </Link>
                </li>
                <li>
                  <Link to='/fullstack' className='color_main'>
                    FULLSTACK
                  </Link>
                </li>
                <li>
                  <Link to='/design' className='color_main'>
                    DESIGN
                  </Link>
                </li>
                <li>
                  <Link to='/resume' className='color_main'>
                    RESUME / CONTACT
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

Navbar.propTypes = {};

export default Navbar;
