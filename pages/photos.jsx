import Head from "next/head";
import { useState, useEffect } from "react";
import Navigation from "../components/navigation.jsx";
import FloralFooter from "../components/floral-footer.jsx";
import PopoverPhoto from "../components/popover-photo.jsx";
import GlobalStyles from "../components/global-styles.jsx";

export default () => {
  const [shouldShowPhotos, setShouldShowPhotos] = useState(false);
  const [popoverIsOpen, setPopoverIsOpen] = useState(false);
  const [imgSrc, setImgSrc] = useState(null);

  useEffect(() => {
    setShouldShowPhotos(true);
  });

  const onClickPhoto = event => {
    setPopoverIsOpen(true);
    setImgSrc(event.currentTarget.dataset.imgsrc);
  };

  return (
    <>
      <Head>
        <title>Michelle & Andrew | Photos</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          href="https://fonts.googleapis.com/css?family=Lora|Tangerine&display=swap"
          rel="stylesheet"
        />
      </Head>
      <GlobalStyles />
      <Navigation />
      <PopoverPhoto
        isOpen={popoverIsOpen}
        setIsOpen={setPopoverIsOpen}
        imgSrc={imgSrc}
      />
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
        }

        .photos {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-around;
          align-items: center;
        }

        .one-third {
          flex: 0 0 33.33%;
          width: 33.33%;
        }

        .square-outer {
          position: relative;
          padding-top: 100%;
        }

        .square-inner {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 95%;
          height: 95%;
          transform: translateX(-50%) translateY(-50%);
        }

        .photo-button {
          cursor: pointer;
          overflow: hidden;
          position: relative;
          width: 100%;
          height: 100%;
          margin: 0;
          padding: 0;
          -webkit-appearance: none;
          background: transparent;
          border: none;
          display: inline-block;
          transition: box-shadow 300ms;
          box-shadow: 0 3px 10px rgba(61, 70, 66, 0);
        }

        .photo-button:hover {
          box-shadow: 0 3px 10px rgba(61, 70, 66, 0.6);
        }

        .photo-img {
          opacity: ${shouldShowPhotos ? 1 : 0};
          height: 100%;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translateX(-50%) translateY(-50%);
        }
      `}</style>

      <div className="heading">
        <h1>Photos</h1>
      </div>

      <div className="photos">
        <div className="one-third">
          <div className="square-outer">
            <div className="square-inner">
              <button
                className="photo-button"
                onClick={onClickPhoto}
                data-imgsrc="/static/michelle-and-andrew-at-beach.jpg"
              >
                <img
                  className="photo-img"
                  src="/static/michelle-and-andrew-at-beach.jpg"
                />
              </button>
            </div>
          </div>
        </div>
        <div className="one-third">
          <div className="square-outer">
            <div className="square-inner">
              <button
                className="photo-button"
                onClick={onClickPhoto}
                data-imgsrc="/static/michelle-and-andrew-proposal.jpg"
              >
                <img
                  className="photo-img"
                  src="/static/michelle-and-andrew-proposal.jpg"
                />
              </button>
            </div>
          </div>
        </div>
        <div className="one-third">
          <div className="square-outer">
            <div className="square-inner">
              <button
                className="photo-button"
                onClick={onClickPhoto}
                data-imgsrc="/static/michelle-and-andrew-at-home.jpg"
              >
                <img
                  className="photo-img"
                  src="/static/michelle-and-andrew-at-home.jpg"
                />
              </button>
            </div>
          </div>
        </div>
        <div className="one-third">
          <div className="square-outer">
            <div className="square-inner">
              <button
                className="photo-button"
                onClick={onClickPhoto}
                data-imgsrc="/static/michelle-and-andrew-above-lake.jpg"
              >
                <img
                  className="photo-img"
                  src="/static/michelle-and-andrew-above-lake.jpg"
                />
              </button>
            </div>
          </div>
        </div>
        <div className="one-third">
          <div className="square-outer">
            <div className="square-inner">
              <button
                className="photo-button"
                onClick={onClickPhoto}
                data-imgsrc="/static/michelle-and-andrew-fancy.jpg"
              >
                <img
                  className="photo-img"
                  src="/static/michelle-and-andrew-fancy.jpg"
                />
              </button>
            </div>
          </div>
        </div>
        <div className="one-third">
          <div className="square-outer">
            <div className="square-inner">
              <button
                className="photo-button"
                onClick={onClickPhoto}
                data-imgsrc="/static/michelle-and-andrew-hiking.jpg"
              >
                <img
                  className="photo-img"
                  src="/static/michelle-and-andrew-hiking.jpg"
                />
              </button>
            </div>
          </div>
        </div>
        <div className="one-third">
          <div className="square-outer">
            <div className="square-inner">
              <button
                className="photo-button"
                onClick={onClickPhoto}
                data-imgsrc="/static/michelle-and-andrew-on-boat.jpg"
              >
                <img
                  className="photo-img"
                  src="/static/michelle-and-andrew-on-boat.jpg"
                />
              </button>
            </div>
          </div>
        </div>
        <div className="one-third">
          <div className="square-outer">
            <div className="square-inner">
              <button
                className="photo-button"
                onClick={onClickPhoto}
                data-imgsrc="/static/michelle-and-andrew-on-mountain.jpg"
              >
                <img
                  className="photo-img"
                  src="/static/michelle-and-andrew-on-mountain.jpg"
                />
              </button>
            </div>
          </div>
        </div>
        <div className="one-third">
          <div className="square-outer">
            <div className="square-inner">
              <button
                className="photo-button"
                onClick={onClickPhoto}
                data-imgsrc="/static/michelle-and-andrew-skiing.jpg"
              >
                <img
                  className="photo-img"
                  src="/static/michelle-and-andrew-skiing.jpg"
                />
              </button>
            </div>
          </div>
        </div>
        <div className="one-third">
          <div className="square-outer">
            <div className="square-inner">
              <button
                className="photo-button"
                onClick={onClickPhoto}
                data-imgsrc="/static/michelle-and-andrew-at-colby.jpg"
              >
                <img
                  className="photo-img"
                  src="/static/michelle-and-andrew-at-colby.jpg"
                />
              </button>
            </div>
          </div>
        </div>
        <div className="one-third">
          <div className="square-outer">
            <div className="square-inner">
              <button
                className="photo-button"
                onClick={onClickPhoto}
                data-imgsrc="/static/michelle-and-andrew-at-lighthouse.jpg"
              >
                <img
                  className="photo-img"
                  src="/static/michelle-and-andrew-at-lighthouse.jpg"
                />
              </button>
            </div>
          </div>
        </div>
        <div className="one-third">
          <div className="square-outer">
            <div className="square-inner">
              <button
                className="photo-button"
                onClick={onClickPhoto}
                data-imgsrc="/static/michelle-and-andrew-during-fall.jpg"
              >
                <img
                  className="photo-img"
                  src="/static/michelle-and-andrew-during-fall.jpg"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
      <FloralFooter />
    </>
  );
};
