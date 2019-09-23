import Head from 'next/head';
import { useState, useEffect } from 'react';
import Navigation from '../components/navigation.jsx';
import FloralFooter from '../components/floral-footer.jsx';
import FullWidthIcon from '../components/full-width-icon.jsx';
import GridIcon from '../components/grid-icon.jsx';

export default () => {
  const [shouldShowPhotos, setShouldShowPhotos] = useState(false);
  const [layoutIsGrid, setLayoutIsGrid] = useState(true);

  useEffect(() => {
    setShouldShowPhotos(true);
  });

  const onClickLayoutToggle = () => {
    setLayoutIsGrid(!layoutIsGrid);
  };

  return (
    <>
      <Head>
        <title>Michelle & Andrew | Photos</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link href="https://fonts.googleapis.com/css?family=Lora|Tangerine&display=swap" rel="stylesheet" />
      </Head>
      <Navigation />
      <style jsx>{`
        * {
          box-sizing: border-box;
        }

        .heading {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        h1 {
          font-family: Tangerine, cursive;
          font-size: 3em;
          font-weight: 500;
          flex: 0 0 auto;
          margin-right: 1em;
        }

        .layout-button {
          cursor: pointer;
          background: transparent;
          border: none;
          outline: none;
          width: 40px;
          flex: 0 0 auto;
          transition: transform 300ms;
        }

        .layout-button:hover {
          transform: scale(1.1);
        }

        .photos {
          display: flex;
          flex-wrap: wrap;
        }

        .photo-wrapper {
          flex: 0 0 ${layoutIsGrid ? '33.33%' : '100%'};
          padding-top: ${layoutIsGrid ? '33.33%' : '100%'};
          position: relative;
          transition: flex-basis 700ms, padding-top 700ms;
        }

        .photo {
          position: absolute;
          top: 50%;
          left: 50%;
          padding: .5em;
          height: 95%;
          width: 95%;
          transition: filter 400ms;
          filter: saturate(.5);
          background-size: cover;
          background-position: center;
          transform: translateX(-50%) translateY(${shouldShowPhotos ? '-50%' : 'calc(-50% + 20px)'});
          opacity: ${shouldShowPhotos ? 1 : 0};
          transition: opacity 2000ms, transform 2000ms;
        }

        .photo:hover {
          filter: saturate(1);
        }

      `}</style>
      <div className="heading">
        <h1>
          Photos
        </h1>
        <button
          className="layout-button"
          onClick={onClickLayoutToggle}
          >
            {layoutIsGrid
              ? <FullWidthIcon />
              : <GridIcon />
            }
          </button>
      </div>
      <div className="photos">
        <div className="photo-wrapper">
          <div className="photo" style={{ backgroundImage: 'url("/static/michelle-and-andrew-at-colby.jpg")' }}></div>
        </div>
        <div className="photo-wrapper">
          <div className="photo" style={{ backgroundImage: 'url("/static/michelle-and-andrew-at-home.jpg")' }}></div>
        </div>
        <div className="photo-wrapper">
          <div className="photo" style={{ backgroundImage: 'url("/static/michelle-and-andrew-at-lake.jpg")' }}></div>
        </div>
        <div className="photo-wrapper">
          <div className="photo" style={{ backgroundImage: 'url("/static/michelle-and-andrew-fancy.jpg")' }}></div>
        </div>
        <div className="photo-wrapper">
          <div className="photo" style={{ backgroundImage: 'url("/static/michelle-and-andrew-hiking.jpg")' }}></div>
        </div>
        <div className="photo-wrapper">
          <div className="photo" style={{ backgroundImage: 'url("/static/michelle-and-andrew-on-boat.jpg")' }}></div>
        </div>
        <div className="photo-wrapper">
          <div className="photo" style={{ backgroundImage: 'url("/static/michelle-and-andrew-on-mountain.jpg")' }}></div>
        </div>
        <div className="photo-wrapper">
          <div className="photo" style={{ backgroundImage: 'url("/static/michelle-and-andrew-proposal.jpg")' }}></div>
        </div>
        <div className="photo-wrapper">
          <div className="photo" style={{ backgroundImage: 'url("/static/michelle-and-andrew-skiing.jpg")' }}></div>
        </div>
      </div>
      <FloralFooter />
    </>
  );
};
