import React, { Fragment } from 'react';

import Home1 from './sections/Home_1/Home_1';
import Home2 from './sections/Home_2/Home_2';
import Home3 from './sections/Home_3/Home_3';
import BottomShadow from '../../BottomShadow/BottomShadow';

const Home = props => {
  return (
    <Fragment>
      <div>
        <Home1 />
        <Home2 />
        <BottomShadow />
        <Home3 />
      </div>
    </Fragment>
  );
};

export default Home;
