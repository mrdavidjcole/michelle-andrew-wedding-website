export default (props) => {
  const { onClickPhoto, shouldShowPhotos, src } = props;
  return (
    <>
      <style jsx>{`
        .one-third {
          flex: 0 0 33.33%;
          width: 33.33%;
        }

        .square-outer {
          position: relative;
          padding-top: 100%;
        }

        .square-inner {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 95%;
          height: 95%;
          transform: translateX(-50%) translateY(-50%);
        }

        .photo-button {
          cursor: pointer;
          overflow: hidden;
          position: relative;
          width: 100%;
          height: 100%;
          margin: 0;
          padding: 0;
          -webkit-appearance: none;
          background: transparent;
          border: none;
          display: inline-block;
          transition: box-shadow 300ms;
          box-shadow: 0 3px 10px rgba(61, 70, 66, 0);
        }

        .photo-button:hover {
          box-shadow: 0 3px 10px rgba(61, 70, 66, 0.6);
        }

        .photo-img {
          opacity: ${shouldShowPhotos ? 1 : 0};
          height: 100%;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translateX(-50%) translateY(-50%);
        }
      `}</style>
    <div className="one-third">
      <div className="square-outer">
        <div className="square-inner">
          <button
            className="photo-button"
            onClick={onClickPhoto}
            data-imgsrc={src}
            >
              <img
                className="photo-img"
                src={src}
              />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
