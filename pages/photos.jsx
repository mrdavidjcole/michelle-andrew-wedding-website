import Head from "next/head";
import { useState, useEffect } from "react";
import Navigation from "../components/navigation.jsx";
import FloralFooter from "../components/floral-footer.jsx";
import Photo from "../components/photo.jsx";
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
        <link href="/static/favicon.ico" rel="icon" />
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
      `}</style>

      <div className="heading">
        <h1>Photos</h1>
      </div>

      <div className="photos">
        <Photo
          onClickPhoto={onClickPhoto}
          shouldShowPhotos={shouldShowPhotos}
          src="/static/michelle-and-andrew-on-mountain.jpg"
        />
        <Photo
          onClickPhoto={onClickPhoto}
          shouldShowPhotos={shouldShowPhotos}
          src="/static/michelle-and-andrew-biking.jpg"
        />
        <Photo
          onClickPhoto={onClickPhoto}
          shouldShowPhotos={shouldShowPhotos}
          src="/static/michelle-and-andrew-at-home.jpg"
        />
        <Photo
          onClickPhoto={onClickPhoto}
          shouldShowPhotos={shouldShowPhotos}
          src="/static/michelle-and-andrew-at-dave-and-nora-wedding.jpg"
        />
        <Photo
          onClickPhoto={onClickPhoto}
          shouldShowPhotos={shouldShowPhotos}
          src="/static/michelle-and-andrew-at-lake.jpg"
        />
        <Photo
          onClickPhoto={onClickPhoto}
          shouldShowPhotos={shouldShowPhotos}
          src="/static/michelle-and-andrew-during-fall.jpg"
        />
        <Photo
          onClickPhoto={onClickPhoto}
          shouldShowPhotos={shouldShowPhotos}
          src="/static/michelle-and-andrew-hiking.jpg"
        />
        <Photo
          onClickPhoto={onClickPhoto}
          shouldShowPhotos={shouldShowPhotos}
          src="/static/michelle-and-andrew-skiing.jpg"
        />
        <Photo
          onClickPhoto={onClickPhoto}
          shouldShowPhotos={shouldShowPhotos}
          src="/static/michelle-and-andrew-at-beach.jpg"
        />
        <Photo
          onClickPhoto={onClickPhoto}
          shouldShowPhotos={shouldShowPhotos}
          src="/static/michelle-and-andrew-on-the-cape.jpg"
        />
        <Photo
          onClickPhoto={onClickPhoto}
          shouldShowPhotos={shouldShowPhotos}
          src="/static/michelle-and-andrew-at-lighthouse.jpg"
        />
        <Photo
          onClickPhoto={onClickPhoto}
          shouldShowPhotos={shouldShowPhotos}
          src="/static/michelle-and-andrew-proposal.jpg"
        />
      </div>
      <FloralFooter />
    </>
  );
};
