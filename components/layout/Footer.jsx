import React from 'react';

const Footer = () => (
  <footer className="opacity-50 flex justify-around text-primary p-4 mt-16 border-t border-primary items-center">
    <div className="text-xl">
      <a href="https://github.com/quorth0n/artify">
        <i className="fab fa-github" />
      </a>
    </div>
    <div>
      <p>Galla Closed Beta v1.0</p>
      By{' '}
      <a className="font-bold" href="https://github.com/quorth0n/">
        quorth0n
      </a>
    </div>
  </footer>
);
export default Footer;
