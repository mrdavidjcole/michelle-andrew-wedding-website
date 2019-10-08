import { useEffect, useState } from 'react';

export default (props) => {
  const {
    imgSrc,
    isOpen,
    setIsOpen,
  } = props;

  const [isDisplayNone, setIsDisplayNone] = useState(true);
  const [isOpaque, setIsOpaque] = useState(false);

  if (isOpen && isDisplayNone) {
    setIsDisplayNone(false);
  }

  if (!isOpaque && isOpen && !isDisplayNone) {
    // wrapping setIsOpaque in setTimeout and requestAnimationFrame like this
    // is a bit of a hack, which ensures that we wait until _after_ the overlay
    // is not display: none; before switching the opacity from 0 to 1, to ensure
    // that the opacity transition occurs. If we set opacity to 1 too quickly,
    // there would be no visible transition.
    requestAnimationFrame(() => {
      setTimeout(() => {
        setIsOpaque(true);
      }, 0);
    });
  }

  if (isOpaque && !isDisplayNone && !isOpen) {
    setIsOpaque(false);
  }

  const onTransitionEnd = () => {
    if (!isDisplayNone && !isOpaque) {
      setIsDisplayNone(true);
    }
  }

  return (
    <>
      <style jsx>{`
        .overlay-background {
          align-items: flex-start;
          background: rgba(0,0,0,.6);
          cursor: pointer;
          display: ${isDisplayNone ? 'none' : ''};
          height: 100vh;
          left: 0;
          opacity: ${isOpaque ? 1 : 0};
          position: fixed;
          top: 0;
          transition: opacity 500ms;
          width: 100vw;
          z-index: 10000;
        }

        .photo {
          max-height: 90%;
          max-width: 90%;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translateX(-50%) translateY(-50%);
        }
      `}</style>
      <div
        className="overlay-background"
        onClick={() => setIsOpen(false)}
        onTransitionEnd={onTransitionEnd}
      >
        <img className="photo" src={imgSrc}/>
      </div>
    </>
  );
};
