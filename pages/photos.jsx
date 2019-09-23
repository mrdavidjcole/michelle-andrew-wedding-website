import Head from 'next/head';
import Navigation from '../components/navigation.jsx';
import FloralFooter from '../components/floral-footer.jsx';

export default () => {
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

        .headings {
          text-align: center;
        }

        h1 {
          font-family: Tangerine, cursive;
          font-size: 3em;
          font-weight: 500;
        }

        .photos {
          display: flex;
          flex-wrap: wrap;
        }

        .photo-wrapper {
          flex: 0 0 33.33%;
          padding-top: 33.33%;
          position: relative;
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
          transform: translateX(-50%) translateY(-50%);
        }

        .photo:hover {
          filter: saturate(1);
        }

      `}</style>
      <div className="headings">
        <h1>
          Photos
        </h1>
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
