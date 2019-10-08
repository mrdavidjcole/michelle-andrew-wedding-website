import Head from 'next/head';
import GlobalStyles from "../components/global-styles.jsx";
import Navigation from '../components/navigation.jsx';
import FloralFooter from '../components/floral-footer.jsx';

export default () => {
  return (
    <>
      <Head>
        <title>Michelle & Andrew | Our Story</title>
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

        h1 {
          font-family: Tangerine, cursive;
          font-size: 3em;
          font-weight: 500;
        }

        p {
          font-family: 'Lora', serif;
          line-height: 1.6em;
          margin-top: 2em;
        }

        .text-and-photo {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          align-items: flex-start;
          justify-content: flex-start;
          width: 70%;
          margin: 0 auto;
        }

        .text-side {
          flex: 1 1 50%;
        }

        .photo-side {
          flex: 1 1 50%;
          padding: 2em;
          min-width: 450px;
        }

        .photo {
          width: 100%;
        }
      `}</style>
      <div className="headings">
        <h1>
          Our Story
        </h1>
      </div>
      <div className="text-and-photo">
        <div className="text-side">
          <p>
            We met online via the Bumble App. Michelle messaged Andrew on January 4,
            2017, and luckily Andrew replied within 24 hours of her reaching out so
            that the match did not disappear! While we connected right away, a
            combination of conflicting schedules and Michelle injuring her knee
            skiing kept us from meeting in person for two months. We texted just
            about daily during that time though!
          </p>
          <p>
            Our first date was at a local brewery/pizzeria called Brewport on March
            18, 2017. The pizza and beer were pretty good but the company was the
            best! We were nervous at first but quickly felt comfortable and loved
            every moment of finally being together. We made plans to go out again
            three days later for a trivia night, starting our wonderful journey
            together.
          </p>
          <p>
            Since that day, we have gone on a great many adventures. There have been
            exciting hikes with beautiful views; trips to Okemo where Andrew learned
            to ski (though he still has his work cut out for him keeping up with
            Michelle); visits to breweries both at home in Connecticut and in other
            places we visit to try new, delicious beer; and even just quiet days at
            home enjoying each other’s company.
          </p>
          <p>
            On Thanksgiving weekend 2018, Andrew stealthily picked up his
            great-grandmother’s engagement ring from his grandmother, who offered it
            to him not long after she met Michelle for the first time the year
            prior. Andrew then carried it with him for several months waiting for
            the right moment to propose. That moment came on February 10, 2019, when
            Michelle and Andrew were out on a walk and talking about their future
            hopes and dreams. Upon returning home, Andrew surprised Michelle by
            getting down on one knee and asking her to marry him. She said yes!
          </p>
        </div>
        <div className="photo-side">
          <img className="photo" src="/static/michelle-and-andrew-in-field.jpg"/>
        </div>
      </div>
      <FloralFooter />
    </>
  );
};
