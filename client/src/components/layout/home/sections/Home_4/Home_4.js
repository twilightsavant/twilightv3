import React, { useState, Fragment } from 'react';
import ModalImg from '../../../../ModalImg/ModalImg';

import './Home_4.css';
import img_1 from './img_1.jpg';
import img_2 from './img_2.jpg';
import img_3 from './img_3.jpg';
import img_4 from './img_4.jpg';
import img_5 from './img_5.jpg';
import img_6 from './img_6.jpg';
import img_7 from './img_7.jpg';
import img_8 from './img_8.jpg';

import img_thumb1 from './img_thumb1.jpg';
import img_thumb2 from './img_thumb2.jpg';
import img_thumb3 from './img_thumb3.jpg';
import img_thumb4 from './img_thumb4.jpg';
import img_thumb5 from './img_thumb5.jpg';
import img_thumb6 from './img_thumb6.jpg';
import img_thumb7 from './img_thumb7.jpg';
import img_thumb8 from './img_thumb8.jpg';

const Home_4 = props => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalProps, setModalProps] = useState({});

  const gallery = loadGallery();
  let modal;

  const backdropClickHandler = () => {
    setModalOpen(false);
  };

  const imageClickHandler = galItem => {
    setModalOpen(true);
    setModalProps({
      imgFullPath: galItem.imgFullPath,
      imgTitle: galItem.imgTitle
    });
  };

  if (modalOpen) {
    modal = <ModalImg imgDetails={modalProps} click={backdropClickHandler} />;
  }

  return (
    <Fragment>
      {modal}
      <section className='h_sec_3'>
        <div className='centerContainer'>
          <h1>Small Business Website Portfolio</h1>
          <div className='portGallery'>
            {gallery.length > 0 &&
              gallery.map((galItem, index) => {
                if (galItem.link) {
                  return (
                    <a
                      href={galItem.link}
                      target='_blank'
                      rel='noopener noreferrer'
                      key={galItem.key}
                    >
                      <img src={galItem.thumbnail} alt={galItem.imtTitle} />
                    </a>
                  );
                } else {
                  return (
                    <span>
                      <img
                        src={galItem.thumbnail}
                        alt={galItem.imtTitle}
                        key={galItem.key}
                        onClick={() => imageClickHandler(galItem)}
                      />
                    </span>
                  );
                }
              })}
          </div>
        </div>
      </section>
    </Fragment>
  );
};

/* CHANGE TO DB FED */

const loadGallery = () => {
  const gallery = [
    {
      key: 1,
      thumbnail: img_thumb1,
      imgFullPath: img_1,
      imgTitle: 'Beer Candy',
      link: 'http://client505.twwebdev.com'
    },
    {
      key: 2,
      thumbnail: img_thumb2,
      imgFullPath: img_2,
      imgTitle: 'Eastside Tattoo',
      link: 'http://client293.twwebdev.com'
    },
    {
      key: 3,
      thumbnail: img_thumb3,
      imgFullPath: img_3,
      imgTitle: 'Corbett Automotive',
      link: 'http://client140.twwebdev.com'
    },
    {
      key: 4,
      thumbnail: img_thumb4,
      imgFullPath: img_4,
      imgTitle: 'Fantasy Sports Fan',
      link: 'http://client456.twwebdev.com'
    },
    {
      key: 5,
      thumbnail: img_thumb5,
      imgFullPath: img_5,
      imgTitle: 'Guns And Lace',
      link: 'http://www.gunsandlace.com'
    },
    {
      key: 6,
      thumbnail: img_thumb6,
      imgFullPath: img_6,
      imgTitle: 'Isaksen Scale Models',
      link: 'http://client336.twwebdev.com'
    },
    {
      key: 7,
      thumbnail: img_thumb7,
      imgFullPath: img_7,
      imgTitle: 'Isaksen Scale Models',
      link: 'http://client485.twwebdev.com'
    },
    {
      key: 8,
      thumbnail: img_thumb8,
      imgFullPath: img_8,
      imgTitle: 'Isaksen Scale Models',
      link: 'http://client192.twwebdev.com'
    }
  ];

  return gallery;
};

Home_4.propTypes = {};

export default Home_4;
