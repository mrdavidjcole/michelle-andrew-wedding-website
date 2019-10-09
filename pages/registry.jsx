import Head from "next/head";
import GlobalStyles from "../components/global-styles.jsx";
import Navigation from "../components/navigation.jsx";
import CrateAndBarrelSvg from "../components/crate-and-barrel-svg.jsx";
import WilliamsSonomaSvg from "../components/williams-sonoma-svg.jsx";

export default () => {
  return (
    <>
      <Head>
        <title>Michelle & Andrew | Local Attractions</title>
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

        .registry-link {
          max-width: 600px;
          margin: 0 auto;
        }

        p {
          margin: 5em auto;
        }
      `}</style>
      <div className="headings">
        <h1>Registry</h1>
      </div>
      <div className="registries">
        <p>
          <a className="registry-link" href="https://michelle-andrew-wedding-website.mrdavidjcole.now.sh">
            <CrateAndBarrelSvg />
          </a>
        </p>
        <p>
          <a className="registry-link" href="https://www.williams-sonoma.com/m/registry/whz7qx2vdw/registry-list.html">
            <WilliamsSonomaSvg />
          </a>
        </p>
      </div>
    </>
  );
};
