import React from 'react';

const Alert = ({ handleClose, render }) => (
  <>
    {open && (
      <div className="modal fixed w-full h-full top-0 left-0 flex items-center justify-center z-40">
        <div
          className="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"
          onClick={handleClose}
        ></div>
        <div className="modal-content relative text-primary px-6 py-4 border-0 rounded-lg bg-secondary md:max-w-2xl rounded shadow-lg z-50 overflow-y-auto">
          {render()}
          <button
            className="absolute bg-transparent text-2xl font-semibold leading-none right-0 top-0 mt-3 mr-3"
            onClick={handleClose}
          >
            <span>×</span>
          </button>
        </div>
      </div>
    )}
  </>
);

export default React.memo(Alert);
