import React from 'react';
import Header from './Header';
import Footer from './Footer';

export default (props) => (
  <>
    <Header />
    <div className="pt-20 text-center text-primary">{props.children}</div>
    <Footer />
  </>
);
