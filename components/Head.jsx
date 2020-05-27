import React from 'react';
import Head from 'next/head';

const PageHead = ({ title, description }) => (
  <Head>
    <meta charSet="UTF-8" />
    <title>{`${title} | Galla` || ''}</title>
    <meta name="description" content={description || ''} />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  </Head>
);
export default PageHead;
