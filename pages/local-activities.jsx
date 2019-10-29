import Head from "next/head";
import GlobalStyles from "../components/global-styles.jsx";
import Navigation from "../components/navigation.jsx";
import FloralFooter from '../components/floral-footer.jsx';

export default () => {
  return (
    <>
      <Head>
        <title>Michelle & Andrew | Local Activities</title>
        <link href="/static/favicon.ico" rel="icon" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          href="https://fonts.googleapis.com/css?family=Lora|Tangerine&display=swap"
          rel="stylesheet"
        />
      </Head>
      <GlobalStyles />
      <Navigation />
      <style jsx>{`
        * {
          box-sizing: border-box;
          font-family: "Lora", serif;
        }

        .headings {
          text-align: center;
        }

        h1 {
          font-family: Tangerine, cursive;
          font-size: 3em;
          font-weight: 500;
        }

        .activities {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          width: 80%;
          max-width: 1020px;
          margin: 2em auto;
          justify-content: space-around;
        }

        .activity {
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          justify-content: space-between;
          width: 100%;
          padding: 1em 0;
        }

        @media (max-width: 850px) {
          .activity {
            flex-wrap: wrap;
          }

          a {
            padding-bottom: .25em;
            flex: 0 0 100%;
          }
        }

        @media (min-width: 851px) {
          .activity {
            flex-wrap: nowrap;
          }

          a {
            text-align: left;
            padding-right: 1em;
            flex: 0 0 340px;
          }
        }

        a {
          color: rgb(43, 133, 81);
          font-size: 1.3em;
        }

        .description {
          flex: 1 1 auto;
          line-height: 1.8em;
        }
      `}</style>

      <div className="headings">
        <h1>Local Activities</h1>
      </div>

      <div className="activities">
        <div className="activity">
          <a target="_blank" rel="noopener" href="http://bikemanchestervt.com/">Cycling</a>
          <div className="description">
            Vermont has many wonderful roads for cycling; learn about some suggested routes nearby
          </div>
        </div>
        <div className="activity">
          <a target="_blank" rel="noopener" href="http://www.equinoxresort.com/activities/preservation-trust-900-acres/">Equinox Preservation Trust</a>
          <div className="description">
            Hiking trails for all levels from easy walks around the pond, through the woods, and more challenging trails up the mountain
          </div>
        </div>
        <div className="activity">
          <a target="_blank" rel="noopener" href="https://www.equinoxresort.com/activities/summer-activities/">Equinox Resort Activities</a>
          <div className="description">
            The Equinox offers ample activities for summer fun including: golf, tennis, falconry, off-road driving, and more; please contact the Equinox concierge for more information
          </div>
        </div>
        <div className="activity">
          <a target="_blank" rel="noopener" href="https://hildene.org/">Hildene</a>
          <div className="description">
            Tour the historic home and beautiful gardens of Robert Todd Lincoln, son of President Abraham Lincoln
          </div>
        </div>
        <div className="activity">
          <a target="_blank" rel="noopener" href="http://manchesterdesigneroutlets.com/">Manchester Designer Outlets</a>
          <div className="description">
            Enjoy one of the top outlet shopping getaways in New England
          </div>
        </div>
        <div className="activity">
          <a target="_blank" rel="noopener" href="https://www.northshire.com/manchester-store">Northshire Bookstore</a>
          <div className="description">
            Great independent bookstore, which has been a favorite of Michelle’s family for many years
          </div>
        </div>
      </div>
      <FloralFooter />
    </>
  );
};
