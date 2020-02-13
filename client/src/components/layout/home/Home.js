import React, { Fragment } from 'react';

import Home1 from './sections/Home_1';
import Home2 from './sections/Home_2';
import BottomShadow from '../../BottomShadow/BottomShadow';

const Home = props => {
  return (
    <Fragment>
      <div>
        <Home1 />
        <Home2 />
        <BottomShadow />
      </div>
    </Fragment>
  );
};

export default Home;
