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
          max-width: 1000px;
          margin: 0 auto;
          padding: 0 2em;
        }

        .option {
          line-height: 1.7em;
          flex: 1 1 400px;
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
        We have reserved room blocks at two hotels in Manchester. Both are
        wonderful! The Equinox is the wedding venue, and the Hampton Inn is just
        one mile away. Ask for the Cole-Bickford Wedding Room Block at either of
        the hotels.
      </p>
      <div className="options">
        <div className="option">
          <h2>The Equinox Resort</h2>
          <p className="option-details">
            Please call <a href="tel:877-854-7625">877-854-7625</a> Monday
            through Friday from 9:00 AM - 5:00 PM ET or visit{" "}
            <a
              href="https://be.synxis.com/?adult=1&arrive=2021-06-04&chain=21123&child=0&rate=2106COLEBI&clearcache=all&configcode=initialConfig&currency=USD&depart=2021-06-06&hotel=24349&level=hotel&locale=en-US&nocache=true&notrack=true&rooms=1&sbe_ri=0&themecode=initialTheme2"
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
      </div>
      <FloralFooter />
    </>
  );
};
