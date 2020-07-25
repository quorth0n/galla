import React from 'react';

import UploadIcon from './UploadIcon';

const Cover = ({ defaultCover }) => {
  const [coverURL, setCoverURL] = React.useState();
  return (
    <section className="relative block -mt-4" style={{ height: '500px' }}>
      <UploadIcon
        name="bg"
        style={{ zIndex: 40, right: '1rem' }}
        maxSize={10 * 1000 * 1000}
        onChange={(img) => setCoverURL(img)}
      />
      <div
        className="absolute top-0 w-full h-full bg-center bg-cover"
        style={{
          backgroundImage: `url(${coverURL ?? defaultCover})`,
        }}
      >
        <span
          id="blackOverlay"
          className="w-full h-full absolute left-0 opacity-50 bg-black"
        ></span>
      </div>
      <div
        className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
        style={{ height: '70px', transform: 'translateZ(0)' }}
      >
        <svg
          className="absolute bottom-0 overflow-hidden"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          version="1.1"
          viewBox="0 0 2560 100"
          x="0"
          y="0"
        >
          <polygon
            className="fill-current text-secondary-soft"
            points="2560 0 2560 100 0 100"
          ></polygon>
        </svg>
      </div>
    </section>
  );
};
export default React.memo(Cover);
