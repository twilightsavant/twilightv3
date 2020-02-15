import React from 'react';

import './Home_3.css';

//Import The Photos
import logo_0 from './0_logo.png';
import bgPic_0 from './0_bgPic.png';
import bgPix_0 from './0_bgPix.png';

import logo_1 from './1_logo.png';
import bgPic_1 from './1_bgPic.png';
import bgPix_1 from './1_bgPix.png';
import logo_2 from './2_logo.png';
import bgPic_2 from './2_bgPic.png';
import bgPix_2 from './2_bgPix.png';
import logo_3 from './3_logo.png';
import bgPic_3 from './3_bgPic.png';
import bgPix_3 from './3_bgPix.png';

import PortfolioTile from './PortfolioTile';

const Home_3 = props => {
  const projects = populateProjects();

  return (
    <section className='h_sec_3'>
      <div className='centerContainer'>
        <h1>Project Portfolio</h1>
        <div>
          Specializing in developing all aspects of a concept into a full
          fledged application. No project too large from a single page website
          to government compliant solutions met with professionalism and
          dedication. Projects shown below are public domain, NDA projects not
          displayed.
        </div>
        <div className='portContainer'>
          {projects.length > 0 &&
            projects.map((proj, index) => {
              return <PortfolioTile key={index} proj={proj} />;
            })}
        </div>
      </div>
    </section>
  );
};

/* CHANGE OVER TO DB DRIVEN */

const populateProjects = () => {
  let projects;

  projects = [
    {
      key: 1,
      liveSite: true,
      liveSiteAdd: '',
      viewCode: true,
      viewCodeAdd: 'https://github.com/twilightsavant/Twilight-Savant-v1.0',
      oldSite: true,
      oldSiteAdd: 'http://www.twilightsavant.com',
      bgLogo: logo_0,
      bgPix: bgPix_0,
      bgPic: bgPic_0,
      languages: ['Mongo', 'Express', 'React', 'Node.js']
    },
    {
      key: 2,
      liveSite: true,
      liveSiteAdd: 'http://mjunpacked.herokuapp.com',
      viewCode: true,
      viewCodeAdd: 'https://github.com/twilightsavant/MJ_Unpacked',
      oldSite: false,
      oldSiteAdd: '',
      bgLogo: logo_1,
      bgPix: bgPix_1,
      bgPic: bgPic_1,
      languages: ['Mongo', 'Express', 'React', 'Node.js']
    },
    {
      key: 3,
      liveSite: false,
      liveSiteAdd: '',
      viewCode: false,
      viewCodeAdd: '',
      oldSite: true,
      oldSiteAdd: 'http://www.hardenedarms.com',
      bgLogo: logo_2,
      bgPix: bgPix_2,
      bgPic: bgPic_2,
      languages: [
        'PHP',
        'APIs',
        'Payment Processor(s)',
        'Custom E-Commerce',
        'Accounting APIs',
        'jQuery',
        'SQL'
      ]
    },
    {
      key: 4,
      liveSite: false,
      liveSiteAdd: '',
      viewCode: false,
      viewCodeAdd: '',
      oldSite: true,
      oldSiteAdd: 'http://mypets.twilightsavant.com',
      bgLogo: logo_3,
      bgPix: bgPix_3,
      bgPic: bgPic_3,
      languages: [
        'PHP',
        'Custom Social Network',
        'Custom E-Commerce',
        'jQuery',
        'SQL'
      ]
    }
  ];

  return projects;
};

export default Home_3;
