import React from 'react';
import bottomShadowImg from './BottomShadow.jpg';
import './BottomShadow.css';

const BottomShadow = props => {
  return (
    <div className='centerContainer textcenter'>
      <img src={bottomShadowImg} alt='bottomShadow' className='bottomShadow' />
    </div>
  );
};

export default BottomShadow;
