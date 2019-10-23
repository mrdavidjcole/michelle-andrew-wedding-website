import Head from 'next/head';
import GlobalStyles from "../components/global-styles.jsx";
import Navigation from '../components/navigation.jsx';
import FloralFooter from '../components/floral-footer.jsx';

export default () => {
  return (
    <>
      <Head>
        <title>Michelle & Andrew | Schedule of Events</title>
        <link href="/static/favicon.ico" rel="icon" />
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

        h3 {
          font-family: Tangerine, cursive;
          font-weight: 500;
          font-size: 2.5em;
          margin-bottom: .5em;
        }

        p {
          font-size: 1.1em;
          line-height: 1.6em;
        }

        .days {
          width: 90%;
          margin: 0 auto;
          max-width: 900px;
        }

        .day {
          padding-bottom: 3em;
        }

        .date {
          color: rgb(43, 133, 81);
          flex: 0 0 260px;
          text-align: center;
        }

        .details {
          border: 2px solid rgb(197, 214, 204);
          flex: 1 1 70%;
          padding: 0 2em;
          text-align: center;
          max-width: 800px;
          margin: 0 auto;
        }

        .summary {
          font-weight: 600;
        }

      `}</style>
      <div className="headings">
        <h1>Schedule of Events</h1>
      </div>
      <div className="days">
        <div className="day">
          <div className="details">
            <div className="date">
              <h2>Friday, June 5th</h2>
            </div>
            <h3>
              Welcome Reception
            </h3>
            <p>
              7:00 PM
            </p>
            <p>
              Equinox Pond House
            </p>
            <p className="summary">
              All wedding guests are invited for sweets & drinks to kick off the weekend!
            </p>
            <p>
              Free shuttle available from the Equinox. Shuttles will run from 6:45 PM until 9:00 PM, private cars cannot access the location
            </p>
            <p>
              Dressy Casual Attire
            </p>
            <p>
              Children and any caregivers you plan to have with you are welcome
            </p>
          </div>
        </div>
        <div className="day">
          <div className="details">
            <div className="date">
              <h2>Saturday, June 6th</h2>
            </div>
            <h3>
              Wedding Ceremony and Reception
            </h3>
            <p>
              4:30 PM
            </p>
            <p>
              Equinox Meadow
            </p>
            <p className="summary">
              Ceremony followed by cocktail hour and reception
            </p>
            <p>
              Across the street from the Equinox main hotel, behind the 1811 House (3654 Main Street).
            </p>
            <p>
              Cocktail Attire
            </p>
            <p>
              With respect, we would like our special day to be an adults-only occasion
            </p>
          </div>
        </div>
        <div className="day">
          <div className="details">
            <div className="date">
              <h2>Sunday, June 7th</h2>
            </div>
            <h3>
              Farewell Breakfast
            </h3>
            <p>
              9:00 AM
            </p>
            <p>
              Equinox Dormy Grill
            </p>
            <p className="summary">
              Please join us for a casual farewell bite.
            </p>
            <p>
              Across the street from the Equinox main hotel, at 108 Union Street
            </p>
            <p>
              Casual Attire
            </p>
            <p>
              Children and any caregivers you plan to have with you are welcome
            </p>
          </div>
        </div>
      </div>
      <FloralFooter />
    </>
  );
};
