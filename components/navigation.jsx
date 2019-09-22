import Link from "next/link";

export default () => {
  return (
    <>
      <style jsx>{`
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
          text-decoration: none;
          text-transform: uppercase;
          flex: 0 0 auto;
          transition: border-color 200ms;
          border-bottom: 1px solid transparent;
        }

        a:hover {
          border-bottom: 1px solid #303030;
        }
      `}</style>
      <nav>
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
        <Link href="/accomodations">
          <a>Accomodations</a>
        </Link>
        <Link href="/local-attractions">
          <a>Local Attractions</a>
        </Link>
        <Link href="/registry">
          <a>Registry</a>
        </Link>
      </nav>
    </>
  );
};
