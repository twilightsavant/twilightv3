import React from 'react';
import PropTypes from 'prop-types';

import ImgShadow from '../../../ImgShadow/ImgShadow';
import './FullStackProjectTile.css';

const FullStackProjectTile = ({
  proj,
  proj: {
    sitePic,
    siteName,
    description,
    liveSite = false,
    liveSiteAdd,
    viewCode = false,
    viewCodeAdd,
    oldSite = false,
    oldSiteAdd,
    languages = []
  }
}) => {
  const graphicLink = generateGraphicJSX(proj);

  return (
    <div className='f_projTile'>
      <div className='imgDiv'>
        {graphicLink}
        <ImgShadow />
      </div>
      <div className='content'>
        <div className='title'>{siteName}</div>
        <div className='langs bold font13'>
          {languages.length
            ? languages.map((lan, index) => {
                if (languages.length > index + 1) {
                  return lan + ' | ';
                } else {
                  return lan;
                }
              })
            : ''}
        </div>
        <div className='desc'>{description}</div>
        <div className='portBtns'>
          {liveSite && liveSiteAdd.length ? (
            <button>
              <a href={liveSiteAdd} target='_blank' rel='noopener noreferrer'>
                Live Site
              </a>
            </button>
          ) : (
            ''
          )}
          {oldSite && oldSiteAdd.length ? (
            <button>
              <a href={oldSiteAdd} target='_blank' rel='noopener noreferrer'>
                {'('}Old{')'} Site
              </a>
            </button>
          ) : (
            ''
          )}
          {viewCode && viewCodeAdd.length ? (
            <button>
              <a href={viewCodeAdd} target='_blank' rel='noopener noreferrer'>
                View Code
              </a>
            </button>
          ) : (
            ''
          )}
        </div>
      </div>
    </div>
  );
};

const generateGraphicJSX = ({
  siteName,
  sitePic,
  liveSite = false,
  liveSiteAdd,
  oldSite = false,
  oldSiteAdd
}) => {
  if (liveSite && liveSiteAdd.length) {
    return (
      <a href={liveSiteAdd} target='_blank' rel='noopener noreferrer'>
        <img src={sitePic} alt={siteName} className='sitePic' />
      </a>
    );
  }
  if (oldSite && oldSiteAdd.length) {
    return (
      <a href={oldSiteAdd} target='_blank' rel='noopener noreferrer'>
        <img src={sitePic} alt={siteName} className='sitePic' />
      </a>
    );
  }

  return <img src={sitePic} alt={siteName} className='sitePic' />;
};

FullStackProjectTile.propTypes = {
  proj: PropTypes.object.isRequired
};

export default FullStackProjectTile;
