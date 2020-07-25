import React from 'react';
import Header from './Header';
import Footer from './Footer';
const Layout = (props) => {
  return (
    <>
      {!props.noHeader && <Header />}
      <div
        className={`${!props.noHeader && 'pt-24'} text-center text-primary`}
        style={{ minHeight: 'calc(100vh - 82px - 4rem)' }}
      >
        {props.children}
      </div>
      {!props.noFooter && <Footer />}
    </>
  );
};

export default React.memo(Layout);
