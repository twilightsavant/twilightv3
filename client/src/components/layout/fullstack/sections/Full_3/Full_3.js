import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Full_3.css';

import FullStackProjectTile from '../../fullStackProjectTile/FullStackProjectTile';
import Spinner from '../../../spinner/Spinner';
import BottomShadow from '../../../../BottomShadow/BottomShadow';

/*
import imgTS from '../Full_2/ts.jpg';
import imgMJ from '../Full_2/mj.jpg';
import imgTS_2 from '../Full_2/ts_2.jpg';
*/

const Full_3 = props => {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);
  //const projects = populateProjects();

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('api/projects/stack/lamp');
      setLoading(false);
      setProjects(result.data);
    };

    fetchData(); //grab our projects from the server
  }, [setProjects]);

  return (
    <section className='f_sec_3'>
      <BottomShadow />
      <div className='centerContainer'>
        <h1>LAMP Stack Projects</h1>
        {loading && <Spinner />}
        {!loading &&
          projects &&
          projects.map((proj, index) => {
            return <FullStackProjectTile key={index} proj={proj} />;
          })}
      </div>
    </section>
  );
};

/* Convert over to DB */
/*
const populateProjects = () => {
  let projects;

  projects = [
    {
      key: 1,
      liveSite: true,
      liveSiteAdd: 'http://www.twilightsavant.com',
      viewCode: true,
      viewCodeAdd: 'https://github.com/twilightsavant/twilightv3',
      oldSite: false,
      oldSiteAdd: '',
      sitePic: imgTS,
      siteName: 'Twilight Savant V3.0',
      description:
        'Lighter, more up to date portfolio website with a light and fun theme. Responsive design with a limited back end with more room to showcase past work and new projects.',
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
      sitePic: imgMJ,
      siteName: 'MJ Unpacked',
      description:
        'Conceptual design and front page build out for a new start up. Design, animation and responsive show case for large venture funded company. Pending final review and feedback from customer before full build out.',
      languages: ['Mongo', 'Express', 'React', 'Node.js']
    },
    {
      key: 3,
      liveSite: false,
      liveSiteAdd: '',
      viewCode: true,
      viewCodeAdd: 'https://github.com/twilightsavant/Twilight-Savant-v1.0',
      oldSite: true,
      oldSiteAdd: 'http://www.twilightsavant.com',
      sitePic: imgTS_2,
      siteName: 'Twilight Savant V2.0',
      description:
        'Portfolio website with a darker blue theme. Responsive design with a limited back end to explore building and Hosting on the Digital Ocean Platform.',
      languages: ['Mongo', 'Express', 'React', 'Node.js']
    }
  ];

  return projects;
};
*/

export default Full_3;
