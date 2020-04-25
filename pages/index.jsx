import Head from "next/head";
import { useState, useEffect } from "react";
import GlobalStyles from "../components/global-styles.jsx";
import Navigation from "../components/navigation.jsx";
import FloralFooter from "../components/floral-footer.jsx";

export default () => {
  const [imgLoaded, setImgLoaded] = useState(false);
  const onLoadImg = () => {
    setImgLoaded(true);
  };

  let mainImage;

  useEffect(() => {
    if (mainImage.complete) {
      setImgLoaded(true);
    }
  });

  return (
    <>
      <Head>
        <title>Michelle & Andrew | June 5th, 2021</title>
        <link href="/static/favicon.ico" rel="icon" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          property="og:title"
          content="Michelle & Andrew | June 5th, 2021"
        />
        <meta
          property="og:description"
          content="Michelle and Andrew are getting married!"
        />
        <meta property="og:url" content="https://michelleandandrew.com/" />
        <meta
          property="og:image"
          content="https://michelleandandrew.com/static/michelle-and-andrew-main.jpg"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Lora|Tangerine&display=swap"
          rel="stylesheet"
        />
      </Head>
      <GlobalStyles />
      <style jsx>{`
        * {
          box-sizing: border-box;
        }

        .main-photo {
          opacity: ${imgLoaded ? 1 : 0};
          transform: translateY(${imgLoaded ? "0px" : "20px"});
          transition: opacity 2000ms, transform 2000ms;
          width: 100%;
        }
        .headings {
          text-align: center;
        }
        h1 {
          font-family: Tangerine, cursive;
          font-size: 3em;
          margin-bottom: 0.2em;
          font-weight: 500;
        }
        h2 {
          font-family: Tangerine, cursive;
          font-size: 2.5em;
          margin-top: 0.2em;
          font-weight: 500;
        }
        p {
          font-family: "Lora", serif;
          line-height: 1.6em;
          font-size: 1.1em;
          padding: 1em 2em;
          max-width: 960px;
          margin: 0 auto 2em;
          text-align: center;
        }
      `}</style>
      <Navigation />
      <div className="headings">
        <h1>Michelle and Andrew</h1>
        <h2>June 5th, 2021</h2>
      </div>
      <p>
        In light of the COVID-19 pandemic, we have made the difficult decision
        to postpone our wedding celebration to June 2021. We will continue to
        put more information about the new plan on this website as it becomes
        available, so please continue to check back in for more updates.
      </p>
      <img
        className="main-photo"
        onLoad={onLoadImg}
        ref={elem => (mainImage = elem)}
        src="/static/michelle-and-andrew-main.jpg"
      />
      <FloralFooter />
    </>
  );
};
