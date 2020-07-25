import React from 'react';
import { ToastProvider } from 'react-toast-notifications';
import Amplify, { API, Auth, Storage } from 'aws-amplify';
import Analytics from 'analytics';
import simpleAnalyticsPlugin from '@analytics/simple-analytics';

import Layout from '../components/layout/Layout';
import awsconfig from '../src/aws-exports';

import '../styles/index.css';
import '@fortawesome/fontawesome-free/css/all.css';

Amplify.register(API);
Amplify.register(Auth);
Amplify.register(Storage);
Amplify.configure(awsconfig);

Analytics({
  app: 'galla',
  plugins: [simpleAnalyticsPlugin()],
});

// This default export is required in a new `pages/_app.js` file.
export default function App({ Component, pageProps, router }) {
  return (
    <ToastProvider autoDismiss={true} placement="bottom-left">
      <Layout
        noFooter={router.pathname.includes('landing')}
        noHeader={
          router.pathname.includes('landing') ||
          router.pathname.includes('waitlist') ||
          router.pathname.includes('login')
        }
      >
        <Component {...pageProps} />
      </Layout>
    </ToastProvider>
  );
}
