import Head from 'next/head';
import { useState, useEffect } from 'react';
import GlobalStyles from "../components/global-styles.jsx";
import Navigation from '../components/navigation.jsx';
import FloralFooter from '../components/floral-footer.jsx';

export default () => {
  const [imgLoaded, setImgLoaded] = useState(false);
  const onLoadImg = () => {
    setImgLoaded(true);
  }

  let equinoxPhotoImg;

  useEffect(() => {
    if (equinoxPhotoImg.complete) {
      setImgLoaded(true);
    }
  });

  return (
    <>
      <Head>
        <title>Michelle & Andrew | Venue</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link href="https://fonts.googleapis.com/css?family=Lora|Tangerine&display=swap" rel="stylesheet" />
      </Head>
      <GlobalStyles />
      <Navigation />
      <style jsx>{`
        * {
          box-sizing: border-box;
        }

        .headings {
          text-align: center;
        }

        h2 {
          font-family: Tangerine, cursive;
          font-size: 3em;
          font-weight: 500;
        }

        p {
          font-family: 'Lora', serif;
          width: 80%;
          margin: 2em auto;
          line-height: 1.6em;
        }

        .venue-photo-and-details {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: space-around;
          max-width: 90%;
          margin: 0 auto;
        }

        .equinox-photo {
          flex: 1 1 500px;
          width: 90%;
          margin: 0 auto;
          display: block;
          filter: saturate(0.7);
          box-shadow: 0px 4px 12px 0px rgba(0,0,0,.6);
          max-width: 90%;
          opacity: ${imgLoaded ? 1 : 0};
          transition: opacity 1000ms;
        }

        .address {
          flex: 0 0 50%;
          width: 90%;
          margin: 2em auto;
          text-align: center;
          font-size: 1.5em;
          font-style: normal;
        }

        a {
          text-decoration: none;
          color: rgb(103, 156, 125);
          transition: color 300ms;
        }

      `}</style>
      <div className="headings">
        <h2>The Equinox Resort</h2>
      </div>
      <div className="venue-photo-and-details">
        <a href="https://www.equinoxresort.com/" target="_blank">
          <img
            className="equinox-photo"
            src="/static/equinox-lincoln-lawn.jpg"
            alt="The Equinox Resort"
            onLoad={onLoadImg}
            ref={elem => equinoxPhotoImg = elem}
          />
        </a>
        <address className="address">
          3567 Main Street<br/>
          Manchester Center, Vermont<br/><br/>
          <a
            href="https://www.google.com/maps/dir/?api=1&destination=The%2BEquinox%2C%2Ba%2BLuxury%2BCollection%2BGolf%2BResort%2B%2526%2BSpa%2C%2BVermont"
            target="_blank"
            rel="noreferrer noopener"
          >
            Directions via Google Maps
          </a>
        </address>
      </div>
      <FloralFooter />
    </>
  );
};
