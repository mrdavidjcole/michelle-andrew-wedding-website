import Head from 'next/head';
import GlobalStyles from "../components/global-styles.jsx";
import Navigation from '../components/navigation.jsx';

export default () => {
  return (
    <>
      <Head>
        <title>Michelle & Andrew | Schedule of Events</title>
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

        .days {
          display: flex;
          align-items: baseline;
          justify-content: space-between;
          width: 90%;
          flex-wrap: wrap;
          margin: 0 auto;
        }

        .day {
          flex: 1 1 33.33%;
          padding: 2em;
        }

      `}</style>
      <div className="headings">
        <h2>Schedule of Events</h2>
      </div>
      <div className="days">
        <div className="day">
          <h3>Friday, August 18</h3>
          Welcome Reception
          7:00 PM, Equinox Pond House
          All wedding guests are invited for sweets & drinks to kick off the weekend!

          Free shuttle available from the Equinox - shuttles will run from 6:45pm until 9:00pm, private cars can not access the location
          Dressy Casual Attire

          Children and any caregivers you plan to have with you are welcome
        </div>
        <div className="day">
          <h3>Saturday, August 19</h3>
          Wedding Ceremony and Reception

          4:30 PM, Equinox Meadow
          Ceremony followed by cocktail hour and reception

          Across the street from the Equinox main hotel - behind the 1811 House (3654 Main Street).

          Cocktail Attire

          With respect, we would like our special day to be an adults-only occasion
        </div>
        <div className="day">
          <h3>Sunday, August 20</h3>
          Farewell Breakfast
          9:00 AM, Equinox Dormy Grill

          Please join us for a casual farewell bite.

          Across the street from the Equinox main hotel - 108 Union Street

          Casual Attire

          Children and any caregivers you plan to have with you are welcome
        </div>
      </div>
    </>
  );
};
