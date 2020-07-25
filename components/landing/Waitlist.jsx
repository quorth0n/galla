import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { nanoid } from 'nanoid';
import { API, graphqlOperation } from 'aws-amplify';

import useLocalStorage from '../../helpers/hooks/useLocalStorage';
import { searchWaitlists } from '../../src/graphql/queries';
import { createWaitlist } from '../../src/graphql/mutations';

const Waitlist = () => {
  const [refCode, setRefCode] = useLocalStorage('refCode');
  const { register, handleSubmit, errors } = useForm();
  const router = useRouter();
  const submitWaitlist = async ({ email }) => {
    const fetchLastPos = await API.graphql({
      ...graphqlOperation(searchWaitlists, {
        sort: {
          field: 'position',
          direction: 'desc',
        },
        limit: 1,
      }),
      authMode: 'API_KEY',
    });
    const id = nanoid(6);
    await API.graphql({
      ...graphqlOperation(createWaitlist, {
        input: {
          id,
          email,
          position:
            fetchLastPos.data.searchWaitlists.items[0]?.position + 1 ?? 1,
          referrals: 0,
        },
      }),
      authMode: 'API_KEY',
    });
    setRefCode(id);
    router.push('/waitlist/[waitlistID]', `/waitlist/${id}`);
  };

  return (
    <>
      {refCode ? (
        <Link href="/waitlist/[waitlistID]" as={`/waitlist/${refCode}`}>
          <a className="btn-primary text-xl normal-case link-off">
            Check Your Spot
          </a>
        </Link>
      ) : (
        <form
          onSubmit={handleSubmit(submitWaitlist)}
          className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-1"
        >
          <input
            type="email"
            name="email"
            className={`flex-grow ${
              errors.email && 'border-red-600 placeholder-red-600'
            }`}
            placeholder="Enter your email address"
            ref={register({ required: true })}
          />
          <button className="btn-primary text-sm" type="submit">
            Get early access
          </button>
        </form>
      )}
    </>
  );
};

export default Waitlist;
