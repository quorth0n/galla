import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const FilterTabs = () => {
  const { pathname } = useRouter();
  return (
    <ul
      className="flex flex-row mb-0 list-none pt-3 pb-4 justify-start uppercase"
      role="tablist"
    >
      <li className="-mb-px mr-2 last:mr-0 text-center">
        <Link href="/posts">
          <a
            className={
              'link-off leading-normal tab-item px-4 ' +
              ((pathname.includes('posts') || pathname === '/') &&
                'text-accent active')
            }
            data-toggle="tab"
            role="tablist"
          >
            Pieces
          </a>
        </Link>
      </li>
      <li className="-mb-px mr-2 last:mr-0 text-center">
        <Link href="/curations">
          <a
            className={
              'link-off leading-normal tab-item px-4 ' +
              (pathname.includes('curations') && 'text-accent active')
            }
            data-toggle="tab"
            role="tablist"
          >
            Curations
          </a>
        </Link>
      </li>
      <li className="-mb-px mr-2 last:mr-0 text-center">
        <Link href="/market">
          <a
            className={
              'link-off leading-normal tab-item px-4 ' +
              (pathname.includes('market') && 'text-accent active')
            }
            data-toggle="tab"
            role="tablist"
          >
            For sale
          </a>
        </Link>
      </li>
    </ul>
  );
};
export default React.memo(FilterTabs);
