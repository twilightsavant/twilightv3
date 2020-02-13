import React from 'react';
import { Link } from 'react-router-dom';

/* Import Images */
import header_logo from '../../img/header_logo.jpg';

/* Import CSS */
import './SideDrawer.css';

const SideDrawer = props => {
  let drawerClasses = 'side-drawer';
  if (props.show) {
    drawerClasses = 'side-drawer open';
  }

  return (
    <nav className={drawerClasses}>
      <Link to='/' onClick={props.click}>
        <img
          src={header_logo}
          id='sideDrawer_logo'
          alt='Twilight Savant Logo'
        />
      </Link>
      <ul>
        <li>
          <Link to='/' onClick={props.click}>
            Home
          </Link>
        </li>
        <li>
          <Link to='/' onClick={props.click}>
            Fullstack
          </Link>
        </li>
        <li>
          <Link to='/' onClick={props.click}>
            Design
          </Link>
        </li>
        <li>
          <Link to='/' onClick={props.click}>
            Resume / Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default SideDrawer;
