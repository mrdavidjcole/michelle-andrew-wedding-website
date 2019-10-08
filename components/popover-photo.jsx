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

  useEffect(() => {
    if (isOpen) {
      document.body.style.height = '100%';
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.height = '';
      document.body.style.width = '';
      document.body.style.overflow = '';
    }
  });

  return (
    <>
      <style jsx>{`
        .overlay-background {
          background: rgba(0,0,0,.6);
          display: ${isDisplayNone ? 'none' : ''};
          height: 100vh;
          left: 0;
          opacity: ${isOpaque ? 1 : 0};
          position: absolute;
          top: 0;
          transition: opacity 500ms;
          width: 100vw;
          z-index: 10000;
        }
      `}</style>
      <div
        className="overlay-background"
        onClick={() => setIsOpen(false)}
        onTransitionEnd={onTransitionEnd}
      >
      </div>
    </>
  );
};
