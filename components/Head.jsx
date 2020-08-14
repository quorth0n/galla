import React from 'react';
import Head from 'next/head';

const PageHead = ({ title, description }) => (
  <Head>
    <meta charSet="UTF-8" />
    <title>
      {title ? `${title} | Galla` : 'Galla | Sculpture for the Digital Age'}
    </title>
    <meta
      name="description"
      content={
        description ||
        'Earn money and royalties for your artwork, protect it from bots, and stream it in HD to a variety of devices. Get Galla today!'
      }
    />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  </Head>
);
export default PageHead;
