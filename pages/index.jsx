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

  let mainImage;

  useEffect(() => {
    if (mainImage.complete) {
      setImgLoaded(true);
    }
  });

  return (
    <>
      <Head>
        <title>Michelle & Andrew | June 6th, 2020</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link href="https://fonts.googleapis.com/css?family=Lora|Tangerine&display=swap" rel="stylesheet" />
      </Head>
      <GlobalStyles />
      <style jsx>{`
        * {
          box-sizing: border-box;
        }

        .main-photo {
          opacity: ${imgLoaded ? 1 : 0};
          transform: translateY(${imgLoaded ? '0px' : '20px'});
          transition: opacity 2000ms, transform 2000ms;
          width: 100%;
        }
        .headings {
          text-align: center;
        }
        h1 {
          font-family: Tangerine, cursive;
          font-size: 3em;
          margin-bottom: .2em;
          font-weight: 500;
        }
        h2 {
          font-family: Tangerine, cursive;
          font-size: 2.5em;
          margin-top: .2em;
          font-weight: 500;
        }
      `}</style>
      <Navigation />
      <div className="headings">
        <h1>Michelle and Andrew</h1>
        <h2>June 6th, 2020</h2>
      </div>
      <img
        className="main-photo"
        onLoad={onLoadImg}
        ref={elem => mainImage = elem}
        src="/static/michelle-and-andrew-main.jpg"
      />
      <FloralFooter />
    </>
  );
};
