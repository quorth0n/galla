import React from 'react';
import Amplify from 'aws-amplify';

import Layout from '../components/Layout';
import awsconfig from '../src/aws-exports';

import '../styles/index.css';
import '@fortawesome/fontawesome-free/css/all.css';

Amplify.configure(awsconfig);

// This default export is required in a new `pages/_app.js` file.
export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
