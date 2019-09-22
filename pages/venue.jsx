import Head from 'next/head';
import Navigation from '../components/navigation.jsx';

export default () => {
  return (
    <>
      <Head>
        <title>Michelle & Andrew | Venue</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link href="https://fonts.googleapis.com/css?family=Lora|Tangerine&display=swap" rel="stylesheet" />
      </Head>
      <Navigation />
      <style jsx>{`
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
        }

        .address {
          flex: 0 0 50%;
          width: 90%;
          margin: 4em auto;
          text-align: center;
          font-size: 1.5em;
          font-style: normal;
        }

        a {
          text-decoration: none;
          color: #303030;
          transition: color 300ms;
        }

        a:hover {
          color: rgb(103, 156, 125);
        }
      `}</style>
      <div className="headings">
        <h2>The Equinox Resort</h2>
      </div>
      <div className="venue-photo-and-details">
        <img className="equinox-photo" src="/static/equinox-lincoln-lawn.jpg" alt="The Equinox Resort"/>
        <address className="address">
          3567 Main Street<br/>
          Manchester Center, Vermont<br/><br/>
          <a
            href="https://goo.gl/maps/KSu9Rywu4VFup2QQA"
            target="_blank"
            rel="noreferrer noopener"
          >
            Directions via Google Maps
          </a>
        </address>
      </div>
    </>
  );
};
