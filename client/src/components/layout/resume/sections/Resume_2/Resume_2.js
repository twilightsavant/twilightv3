import React from 'react';
import PropTypes from 'prop-types';

import './Resume_2.css';

const Resume_2 = props => {
  return (
    <section className='r_sec_2'>
      <div className='centerContainer'>
        <span className='name bolder font20'>PATRICK MERLINO</span>a programmer,
        consultant and business owner since the mid 90s. I bring a diverse
        knowledge of programming languages and their strengths to each web
        project. My experience includes social media web portal development,
        hundreds of websites, and successfully achieving year over year
        multi-million dollar sales volumes via an e-commerce storefront.
        <p>
          I am able to lead a team or participate as a team member as a full
          stack programmer. I enjoy contributing to company growth and
          profitability through the design, development and implementation of
          web based applications and tools.
        </p>
        <div className='r_flexBox'>
          <div className='r_flex'>
            <div>
              <span>SKILLS</span>
            </div>
            <ul>
              <li>E-Commerce Programmer</li>
              <li>Custom Front & Back end systems</li>
              <li>CMS development</li>
              <li>API integrations</li>
              <li>Credit Card Gateway Programming</li>
              <li>Graphic Design (Print & Digital)</li>
              <li>Database Administration</li>
              <li>UI Funnel Optimization</li>
              <li>E-mail based marketing for results</li>
              <li>Full stack programming</li>
              <li>Video Editing / Production</li>
              <li>Commercial Photography</li>
              <li>Prototyping / CNC / Manual Machining</li>
              <li>Production Drawings / Prints</li>
              <li>3D Design, Modelling & Animation</li>
            </ul>
          </div>
          <div className='r_flex'>
            <div>
              <span>LANGUAGES</span>
            </div>
            <ul>
              <li>PHP</li>
              <li>SQL/mySQL</li>
              <li>HTML5</li>
              <li>Javascript</li>
              <li>AJAX/JSON</li>
              <li>C#/.NET</li>
              <li>JAVA</li>
              <li>C++</li>
              <li>CSS</li>
              <li>node.JS/Express</li>
              <li>MongoDB</li>
              <li>Hogan/JSX</li>
              <li>React</li>
              <li>RestAPIs</li>
              <li>G-Code</li>
            </ul>
          </div>
          <div className='r_flex'>
            <div>
              <span>PROGRAMS</span>
            </div>
            <ul>
              <li>Adobe Photoshop, Illustrator</li>
              <li>Adobe Premier/After Effects</li>
              <li>Adobe InDesign</li>
              <li>Microsoft Office Suite</li>
              <li>Maya / Softimage / Rhino</li>
              <li>Visual Studio/Code</li>
              <li>Git, AWS, Server Administration</li>
              <li>Multiple programming IDEs</li>
              <li>AWS / Digital Ocean</li>
              <li>Fusion360</li>
              <li>FeatureCam</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

Resume_2.propTypes = {};

export default Resume_2;
