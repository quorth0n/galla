import React from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import Error from 'next/error';

import { getWaitlist } from '../../src/graphql/queries';
import {
  EmailShareButton,
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  EmailIcon,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
} from 'react-share';

const Waitlist = ({ status }) => {
  if (!status) {
    return <Error statusCode={404} />;
  }

  const url = `https://galla.cc/landing?r=${status.id}`;

  return (
    <main className="space-y-6 m-auto p-4 pt-8">
      <div>
        <h2 className="text-xl">Thank you {status.email}!</h2>
        <p className="opacity-75">We have added you to the signup queue.</p>
        <p className="opacity-75">
          Check back to this page at any time to see if you&apos;ve moved.
        </p>
      </div>
      <div className="space-y-2">
        <div className="space-x-4 text-6xl">
          <i className="fas fa-clock"></i>
          <i className="fas fa-user"></i>
        </div>
        <h1 className="text-4xl">{status.position - 1} people ahead of you</h1>
      </div>
      <div>
        <p className="text-xl">Want priority access?</p>
        <p className="opacity-75">
          Move up the queue by referring your friends. The more that join, the
          faster you&apos;ll move up.
        </p>
      </div>
      <div className="m-auto flex flex-col md:flex-row md:space-x-2 items-center justify-center">
        <span className="whitespace-no-wrap">Your unique link:</span>
        <input
          type="text"
          value={url}
          readOnly={true}
          className="cursor-pointer w-full text-sm"
          style={{ maxWidth: '15rem' }}
          onClick={(e) => {
            e.target.focus();
            e.target.select();
          }}
        />
      </div>
      <div className="space-x-4">
        <EmailShareButton url={url}>
          <EmailIcon
            size={48}
            bgStyle={{ fill: 'var(--color-accent)' }}
            round={true}
          />
        </EmailShareButton>
        <FacebookShareButton url={url}>
          <FacebookIcon
            size={48}
            bgStyle={{ fill: 'var(--color-accent)' }}
            round={true}
          />
        </FacebookShareButton>
        <TwitterShareButton url={url}>
          <TwitterIcon
            size={48}
            bgStyle={{ fill: 'var(--color-accent)' }}
            round={true}
          />
        </TwitterShareButton>
        <WhatsappShareButton url={url}>
          <WhatsappIcon
            size={48}
            bgStyle={{ fill: 'var(--color-accent)' }}
            round={true}
          />
        </WhatsappShareButton>
      </div>
    </main>
  );
};

export const getServerSideProps = async ({ query: { waitlistID }, res }) => {
  const fetchStatus = await API.graphql({
    ...graphqlOperation(getWaitlist, {
      id: waitlistID,
    }),
    authMode: 'API_KEY',
  });
  const status = fetchStatus.data.getWaitlist;
  if (!status) {
    res.statusCode = 404;
  }
  return {
    props: {
      status,
    },
  };
};

export default Waitlist;
