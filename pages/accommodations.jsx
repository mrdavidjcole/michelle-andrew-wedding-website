import Head from "next/head";
import GlobalStyles from "../components/global-styles.jsx";
import Navigation from "../components/navigation.jsx";
import FloralFooter from "../components/floral-footer.jsx";

export default () => {
  return (
    <>
      <Head>
        <title>Michelle & Andrew | Accommodations</title>
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
          max-width: 1600px;
          margin: 0 auto;
          padding: 0 2em;
        }

        .option {
          line-height: 1.7em;
          flex: 0 1 400px;
          margin: 0 auto;
          padding: 0 1em 3em;
        }

        .option-details {
          border-top: 2px solid rgb(197, 214, 204);
          padding-top: 1em;
        }

        a {
          color: rgb(43, 133, 81);
        }
      `}</style>

      <div className="headings">
        <h1>Accommodations</h1>
      </div>
      <p className="general-info">
        We have reserved room blocks at three hotels in Manchester. All are
        wonderful! The Equinox is the wedding venue, the Taconic is next door to
        the venue, and the Hampton Inn is just one mile away. Ask for the
        Cole-Bickford Wedding Room Block at any of the hotels.
      </p>
      <div className="options">
        <div className="option">
          <h2>The Equinox Resort</h2>
          <p className="option-details">
            Please call <a href="tel:877-854-7625">877-854-7625</a> Monday
            through Friday from 9:00 AM - 5:00 PM ET or visit{" "}
            <a
              href="https://www.marriott.com/event-reservations/reservation-link.mi?id=1589516785311&key=GRP&app=resvlink"
              target="_blank"
            >
              this special page for the wedding block
            </a>{" "}
            to make a reservation.
          </p>
        </div>
        <div className="option">
          <h2>Hampton Inn Manchester</h2>
          <p className="option-details">
            Please call <a href="tel:802-362-4000">802-362-4000</a> and select
            "zero" for the front desk or visit{" "}
            <a
              href="https://hamptoninn.hilton.com/en/hp/groups/personalized/R/RUTMVHX-CBC-20210604/index.jhtml?WT.mc_id=POG"
              target="_blank"
            >
              this special page for the wedding block
            </a>{" "}
            to make a reservation.
          </p>
        </div>
        <div className="option">
          <h2>Kimpton Taconic Hotel</h2>
          <p className="option-details">
            We still plan to provide a room block here; however, we have been
            informed that it likely will not be available until the fall.
          </p>
        </div>
      </div>
      <FloralFooter />
    </>
  );
};
