import React, { useState, useEffect, Fragment } from 'react';
import ModalImg from '../../../../ModalImg/ModalImg';
import Spinner from '../../../spinner/Spinner';
import axios from 'axios';

import './Home_4.css';

const Home_4 = props => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalProps, setModalProps] = useState({});
  const [loading, setLoading] = useState(true);
  const [gallery, setGallery] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('api/smallSites');
      setLoading(false);
      setGallery(result.data);
    };

    fetchData(); //grab our projects from the server
  }, [setGallery]);

  //const gallery = loadGallery();
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
            {loading && <Spinner />}
            {!loading &&
              gallery &&
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

Home_4.propTypes = {};

export default Home_4;
