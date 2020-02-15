import React, { Fragment } from 'react';

import BottomShadow from '../../BottomShadow/BottomShadow';
import Resume1 from './sections/Resume_1/Resume_1';
import Resume2 from './sections/Resume_2/Resume_2';
import Resume3 from './sections/Resume_3/Resume_3';

const Resume = props => {
  return (
    <Fragment>
      <Resume1 />
      <BottomShadow />
      <Resume2 />
      <Resume3 />
    </Fragment>
  );
};

Resume.propTypes = {};

export default Resume;
