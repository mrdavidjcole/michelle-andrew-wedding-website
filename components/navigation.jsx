import Link from 'next/link';
import { useState } from 'react';

export default () => {
  const [navMenuIsOpen, setNavMenuIsOpen] = useState(false);

  return (
    <>
      <style jsx>{`
        * {
          box-sizing: border-box;
        }

        .floral-header {
          width: 25%;
          margin: 1em auto;
          display: block;
          transition: filter 300ms;
        }

        .floral-header:hover {
          filter: saturate(3);
        }

        nav {
          display: flex;
          align-items: center;
          justify-content: space-around;
          width: 100%;
          padding: 1.5em 0;
          background: rgb(197, 214, 204);
        }

        a {
          color: #303030;
          font-family: 'Lora', serif;
          text-decoration: none;
          flex: 0 0 auto;
          transition: border-color 200ms;
          border-bottom: 1px solid transparent;
        }

        a:hover {
          border-bottom: 1px solid #303030;
        }

        .nav-toggler-button {
          background: transparent;
          border: none;
          display: none;
          height: 60px;
          position: absolute;
          right: 0;
          top: 0;
          width: 60px;
          z-index: 4;
        }

        .nav-toggler-icon-line {
          background-color: #303030;
          border-radius: 1.5px;
          height: 3px;
          left: 50%;
          position: absolute;
          top: 50%;
          transition: all 250ms;
          width: 50%;
        }

        .nav-toggler-icon-top-line {
          transform: translateX(-50%) translateY(${navMenuIsOpen ? "0px" : "-10px"}) rotate(${navMenuIsOpen ? "-45deg" : "0deg"});
        }

        .nav-toggler-icon-middle-line {
          opacity: ${navMenuIsOpen ? 0 : 1};
          transform: translateX(-50%) translateY(0px) rotate(${navMenuIsOpen ? "-45deg" : "0deg"});
        }

        .nav-toggler-icon-bottom-line {
          transform: translateX(-50%) translateY(${navMenuIsOpen ? "0px" : "10px"}) rotate(${navMenuIsOpen ? "45deg" : "0deg"});
        }


        @media (max-width: 850px) {
          nav {
            flex-direction: column;
            margin: 0;
            padding: ${navMenuIsOpen ? '.5em 0' : '0'};
            max-height: ${navMenuIsOpen ? '320px' : '0px'};
            overflow: hidden;
            transition: max-height 400ms, opacity 400ms;
            opacity: ${navMenuIsOpen ? 1 : 0};
          }

          a {
            margin: .5em 0;
          }

          .nav-toggler-button {
            display: block;
          }
        }
      `}</style>
      <Link href="/">
        <a>
          <img className="floral-header" src="/static/floral-header.png"/>
        </a>
      </Link>
      <button
        className="nav-toggler-button"
        onClick={() => setNavMenuIsOpen(!navMenuIsOpen)}
      >
        <div className="nav-toggler-icon-line nav-toggler-icon-top-line"></div>
        <div className="nav-toggler-icon-line nav-toggler-icon-middle-line"></div>
        <div className="nav-toggler-icon-line nav-toggler-icon-bottom-line"></div>
      </button>
      <nav>
        <Link href="/">
          <a>Our Wedding</a>
        </Link>
        <Link href="/our-story">
          <a>Our Story</a>
        </Link>
        <Link href="/photos">
          <a>Photos</a>
        </Link>
        <Link href="/venue">
          <a>Venue</a>
        </Link>
        <Link href="/schedule">
          <a>Schedule</a>
        </Link>
        <Link href="/accommodations">
          <a>Accommodations</a>
        </Link>
        <Link href="/local-activities">
          <a>Local Activities</a>
        </Link>
        <Link href="/registries">
          <a>Registries</a>
        </Link>
      </nav>
    </>
  );
};
