import Head from "next/head";
import GlobalStyles from "../components/global-styles.jsx";
import Navigation from "../components/navigation.jsx";
import FloralFooter from "../components/floral-footer.jsx";

export default () => {
  return (
    <>
      <Head>
        <title>Michelle & Andrew | RSVP</title>
        <link href="/static/favicon.ico" rel="icon" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          href="https://fonts.googleapis.com/css?family=Lora|Tangerine&display=swap"
          rel="stylesheet"
        />
      </Head>
      <GlobalStyles />
      <style jsx>{`
        iframe {
          display: block;
          margin: 0 auto;
          max-width: 90%;
        }

        .scroll_tip {
          width: 640;
          max-width: 90%;
          margin: 20px auto 0;
          font-family: "Lora", serif;
          text-align: center;
        }
      `}</style>
      <Navigation />

      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSej6LvyxB3AB-9sVmdaR5pXMVhQF4fBqdkhW4UrOknvEofSig/viewform?embedded=true"
        width="640"
        height="500"
        frameBorder="0"
        marginHeight="0"
        marginWidth="0"
      >
        Loading…
      </iframe>
      <p className="scroll_tip">
        Please scroll down to
        <br /> complete the form and submit
      </p>
      <FloralFooter />
    </>
  );
};
