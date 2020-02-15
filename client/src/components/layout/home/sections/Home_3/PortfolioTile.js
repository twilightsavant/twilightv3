import React from 'react';
import PropTypes from 'prop-types';

import './PortfolioTile.css';

const PortfolioTile = ({
  proj: {
    liveSite = false,
    liveSiteAdd,
    viewCode = false,
    viewCodeAdd,
    oldSite = false,
    oldSiteAdd,
    bgLogo,
    bgPix,
    bgPic,
    languages = []
  }
}) => {
  const style = {
    backgroundImage: `url(${bgPic}), url(${bgPix})`,
    backgroundPosition: 'bottom right',
    backgroundRepeat: 'no-repeat, repeat',
    backgroundSize: 'contain, auto'
  };

  return (
    <div className='portTile'>
      <div className='portTileBG' style={style}>
        <div className='portLogo'>
          <div>
            <img src={bgLogo} alt='Project Logo' />
          </div>
        </div>
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
      <div className='bold font14'>
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
    </div>
  );
};

PortfolioTile.propTypes = {
  proj: PropTypes.object.isRequired
};

/*
details: {
    liveSite: true,
    liveSiteAdd: 'blah',
    viewCode: true,
    viewCodeAdd: 'address',
    oldSite: true,
    oldSiteAdd: 'blah'
    bgLogo: 'imgAddress',
    bgPix: 'pixAddress',
    bgPic: 'bgPicAddress'
}
*/

export default PortfolioTile;
