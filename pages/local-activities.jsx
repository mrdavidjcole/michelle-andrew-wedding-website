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
          max-width: 80%;
          margin: 2em auto;
          justify-content: space-around;
        }

        a {
          align-items: center;
          background-color: #ffffff;
          border-radius: 4px;
          box-shadow: 0 3px 10px rgba(61, 70, 66, 0.2);
          color: rgb(43, 133, 81);
          display: flex;
          flex: 1 1 25%;
          font-size: 1.3em;
          height: 140px;
          justify-content: center;
          margin: 1em;
          min-width: 250px;
          text-decoration: none;
          transition: box-shadow 300ms;
        }

        a:hover {
          box-shadow: 0 3px 10px rgba(61, 70, 66, 0.4);
          z-index: 1;
        }
      `}</style>

      <div className="headings">
        <h1>Local Activities</h1>
      </div>

      <div className="activities">
        <a target="_blank" rel="noopener" href="https://www.svac.org/">
          Art Museum
        </a>
        <a
          target="_blank"
          rel="noopener"
          href="https://www.bromley.com/summer/attractions/mountain-adventure-park/"
        >
          Mount Bromley
        </a>
        <a target="_blank" rel="noopener" href="https://www.northshire.com/">
          Bookstore
        </a>
        <a
          target="_blank"
          rel="noopener"
          href="http://www.battenkill.com/trip/kill.htm"
        >
          Canoeing/Kayaking
        </a>
        <a target="_blank" rel="noopener" href="http://bikemanchestervt.com/">
          Cycling
        </a>
        <a
          target="_blank"
          rel="noopener"
          href="http://www.greenmountainfalconryschool.com/"
        >
          Falconry
        </a>
        <a
          target="_blank"
          rel="noopener"
          href="https://m.orvis.com/product/manchester-vermont-fly-fishing-school/10ra"
        >
          Fly Fishing
        </a>
        <a
          target="_blank"
          rel="noopener"
          href="http://www.equinoxresort.com/golf/"
        >
          Golf
        </a>
        <a
          target="_blank"
          rel="noopener"
          href="http://www.equinoxresort.com/activities/preservation-trust-900-acres/"
        >
          Hiking
        </a>
        <a target="_blank" rel="noopener" href="https://hildene.org/">
          Historic Site
        </a>
        <a
          target="_blank"
          rel="noopener"
          href="https://experience.landroverusa.com/vermont/index.html"
        >
          Off Road Driving
        </a>
        <a
          target="_blank"
          rel="noopener"
          href="http://manchesterdesigneroutlets.com/"
        >
          Outlet Shopping
        </a>
        <a
          target="_blank"
          rel="noopener"
          href="https://vtstateparks.com/emerald.html"
        >
          Emerald State Park
        </a>
        <a
          target="_blank"
          rel="noopener"
          href="https://vtstateparks.com/shaftsbury.html"
        >
          Shaftsbury State Park
        </a>
        <a
          target="_blank"
          rel="noopener"
          href="https://www.fs.usda.gov/wps/portal/fsinternet/cs/recarea?ss=110920&navtype=BROWSEBYSUBJECT&cid=FSE_003738&navid=110240000000000&pnavid=110000000000000&recid=75341&actid=50&ttype=recarea&pname=Lye+Brook+Falls+Trail"
        >
          Waterfalls
        </a>
      </div>
      <FloralFooter />
    </>
  );
};
