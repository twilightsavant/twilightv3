import React, { Fragment } from 'react';

import Full1 from './sections/Full_1/Full_1';
import Full2 from './sections/Full_2/Full_2';
import Full3 from './sections/Full_3/Full_3';

/* Re-Use the below components */
import BottomShadow from '../../BottomShadow/BottomShadow';
import Home4 from '../home/sections/Home_4/Home_4';

const Fullstack = props => {
  return (
    <Fragment>
      <Full1 />
      <BottomShadow />
      <Full2 />
      <Full3 />
      <BottomShadow />
      <Home4 />
    </Fragment>
  );
};

Fullstack.propTypes = {};

export default Fullstack;
