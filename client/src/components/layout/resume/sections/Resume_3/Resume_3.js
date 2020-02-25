import React from 'react';
import './Resume_3.css';

import BottomShadow from '../../../../BottomShadow/BottomShadow';
import ContactForm from './ContactForm';

const Resume_3 = props => {
  return (
    <section className='r_sec_3'>
      <BottomShadow />
      <div className='centerContainer contactCenter'>
        <div className='contactCol'>
          <h1>Contact Details</h1>
          <p>Location: Mill Creek, WA</p>
          <p>Phone: 425.315.3743</p>
          <p>Email: pm@twilightsavant.com</p>
        </div>
        <ContactForm />
      </div>
    </section>
  );
};

export default Resume_3;
