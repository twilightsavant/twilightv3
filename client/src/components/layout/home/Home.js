import React, { Fragment } from 'react';

import Home1 from './sections/Home_1/Home_1';
import Home2 from './sections/Home_2/Home_2';
import Home3 from './sections/Home_3/Home_3';
import Home4 from './sections/Home_4/Home_4';
import Home5 from './sections/Home_5/Home_5';
import BottomShadow from '../../BottomShadow/BottomShadow';

const Home = props => {
  return (
    <Fragment>
      <div>
        <Home1 />
        <Home2 />
        <BottomShadow />
        <Home3 />
        <Home4 />
        <Home5 />
      </div>
    </Fragment>
  );
};

export default Home;
