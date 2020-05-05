import React from 'react';
import '../styles/index.css';
import '@fortawesome/fontawesome-free/css/all.css';
import Layout from '../components/layout';
import CognitoProvider from '../helpers/cognito';

// This default export is required in a new `pages/_app.js` file.
export default function App({ Component, pageProps }) {
  return (
    <CognitoProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CognitoProvider>
  );
}
