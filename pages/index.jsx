import Head from 'next/head';
import Navigation from '../components/navigation.jsx';

export default () => {
  return (
    <>
      <Head>
        <title>Michelle & Andrew | June 6th, 2020</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link href="https://fonts.googleapis.com/css?family=Lora|Tangerine&display=swap" rel="stylesheet" />
      </Head>
      <style jsx>{`
        .main-photo {
          width: 100%;
        }
        .headings {
          text-align: center;
        }
        h1 {
          font-family: Tangerine, cursive;
          font-size: 3em;
          margin-bottom: .2em;
        }
        h2 {
          font-family: Tangerine, cursive;
          font-size: 2.5em;
          margin-top: .2em;
        }
      `}</style>
      <Navigation />
      <div className="headings">
        <h1>Michelle and Andrew</h1>
        <h2>June 6th, 2020</h2>
      </div>
      <img className="main-photo" src="/static/michelle-and-andrew-main.jpg"/>
    </>
  );
};
