import React, { useEffect, useState, Fragment } from 'react';
import axios from 'axios';

import './Home_3.css';
import Spinner from '../../../spinner/Spinner';

import PortfolioTile from './PortfolioTile';

const Home_3 = props => {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);
  //const projects = populateProjects();

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('api/projects/frontpage');
      setLoading(false);
      setProjects(result.data);
    };

    fetchData(); //grab our projects from the server
  }, [setProjects]);

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
          {loading && <Spinner />}
          {!loading &&
            projects &&
            projects.map((proj, index) => {
              return <PortfolioTile key={index} proj={proj} />;
            })}
        </div>
      </div>
    </section>
  );
};

export default Home_3;
