import Head from 'next/head';
import GlobalStyles from "../components/global-styles.jsx";
import Navigation from '../components/navigation.jsx';
import FloralFooter from '../components/floral-footer.jsx';

export default () => {
  return (
    <>
      <Head>
        <title>Michelle & Andrew | Accomodations</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link href="https://fonts.googleapis.com/css?family=Lora|Tangerine&display=swap" rel="stylesheet" />
      </Head>
      <GlobalStyles />
      <Navigation />
      <style jsx>{`
        * {
          box-sizing: border-box;
          font-family: 'Lora', serif;
        }

        .headings {
          text-align: center;
        }

        h1 {
          font-family: Tangerine, cursive;
          font-size: 3em;
          font-weight: 500;
        }

        h2 {
          font-weight: 300;
          font-size: 1.8em;
        }

        .general-info {
          margin: 1em auto 50px;
          max-width: 1000px;
          line-height: 1.6em;
          padding: 0 2em;
          font-size: 1.2em;
        }

        .options {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          align-items: flex-start;
          justify-content: space-between;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2em;
        }

        .option {
          flex: 0 1 500px;
          text-align: center;
          margin: 0 auto;
          padding: 3em;
          min-height: 300px;
          border-bottom: 2px solid rgb(197, 214, 204);
        }

        a {
          color: rgb(43, 133, 81);
        }
      `}</style>

      <div className="headings">
        <h1>Accomodations</h1>
      </div>
      <p className="general-info">
        We have reserved room blocks at two hotels in Manchester. Both are
        wonderful! The Equinox is the wedding venue, and the Hampton Inn is
        just one mile away. Ask for the Cole-Bickford Wedding Room Block at
        either hotel.
      </p>
      <div className="options">
        <div className="option">
          <h2>The Equinox Resort</h2>
          <p>
            Please call <a href="tel:877-854-7625">877-854-7625</a> to make a
            reservation.
          </p>
          <p>
            The room block at the Equinox is available until Friday, May 8th.
          </p>
        </div>
        <div className="option">
          <h2>Hampton Inn Manchester</h2>
          <p>
            Please call <a href="tel:802-362-4000">802-362-4000</a>{" "}
            or visit{" "}
            <a
              href="http://group.hamptoninn.com/ColeBickfordWedding"
              target="_blank"
              rel="noreferrer"
            >
              this special page for the wedding block
            </a>{" "}
            to make a reservation.
          </p>
          <p>
            The room block at the Hampton Inn is available until Monday, May
            4th.
          </p>
        </div>
      </div>
      <FloralFooter />
    </>
  );
};
