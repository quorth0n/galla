import React from 'react';
import Header from './Header';
import Footer from './Footer';

export default (props) => (
  <>
    <Header />
    <div
      className="pt-20 text-center text-primary"
      style={{ minHeight: 'calc(100vh - 82px - 4rem)' }}
    >
      {props.children}
    </div>
    {!props.noFooter && <Footer />}
  </>
);
