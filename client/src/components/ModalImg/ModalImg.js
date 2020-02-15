import React from 'react';
import PropTypes from 'prop-types';

import './modalImg.css';

const ModalImg = props => {
  const { imgFullPath, imgTitle } = props.imgDetails;
  return (
    <div className='modalImg' onClick={props.click}>
      <div className='content'>
        <img src={imgFullPath} alt='imgTitle' />
        <br />
        <div className='imgDesc'>{imgTitle}</div>
      </div>
    </div>
  );
};

/*

    */

ModalImg.propTypes = {
  imgDetails: PropTypes.object.isRequired
};

export default ModalImg;
