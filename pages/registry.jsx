import Head from "next/head";
import GlobalStyles from "../components/global-styles.jsx";
import Navigation from "../components/navigation.jsx";
import CrateAndBarrelSvg from "../components/crate-and-barrel-svg.jsx";
import WilliamsSonomaSvg from "../components/williams-sonoma-svg.jsx";

export default () => {
  return (
    <>
      <Head>
        <title>Michelle & Andrew | Registry</title>
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

        .registries {
          max-width: 80%;
          margin: 0 auto;
          text-align: center;
        }

        .registries-wrapper {
          max-width: 1000px;
          margin: 0 auto;
        }

        .registry-link {
          display: block;
          margin: 0 auto;
          margin: 2em auto;
          padding: 2em 0;
          border: 2px solid rgb(197, 214, 204);
        }

        .logo {
          margin: 0 auto;
        }

        .cb {
          max-width: 45%;
        }

        .ws {
          padding-top: 8px;
          max-width: 90%;
        }

        p {
        }
      `}</style>
      <div className="headings">
        <h1>Registries</h1>
      </div>
      <div className="registries-wrapper">
        <div className="registries">
          <a
            className="registry-link"
            href="https://www.crateandbarrel.com/gift-registry/michelle-cole-and-andrew-bickford/r6016453"
          >
            <div className="logo cb">
              <CrateAndBarrelSvg />
            </div>
          </a>
          <a
            className="registry-link"
            href="https://www.williams-sonoma.com/m/registry/whz7qx2vdw/registry-list.html"
          >
            <div className="logo ws">
              <WilliamsSonomaSvg />
            </div>
          </a>
        </div>
      </div>
    </>
  );
};
