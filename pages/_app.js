import React from 'react';
import '../styles/index.css';
import '@fortawesome/fontawesome-free/css/all.css';
import Layout from '../components/layout';

// This default export is required in a new `pages/_app.js` file.
export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
