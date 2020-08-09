import React from 'react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import { Auth } from 'aws-amplify';

import useCognitoUser from '../../helpers/hooks/useCognitoUser';
import SimplePopover from '../SimplePopover';
import usePopper from '../../helpers/hooks/usePopper';

const Header = () => {
  const parentRef = React.useRef();
  const userBtnRef = React.useRef();
  const userPopoverRef = React.useRef();

  const [scrolled, setScrolled] = React.useState(false);
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const [searchOpen, setSearchOpen] = React.useState(false);

  const [user] = useCognitoUser();
  const [popoverShowing, openPopover, closePopover] = usePopper(
    userBtnRef,
    userPopoverRef
  );
  const { handleSubmit, register } = useForm();

  React.useEffect(() => {
    // close nav when clicked outside
    function handleClickOutside(event) {
      if (!parentRef.current.contains(event.target)) {
        closeAll();
      }
    }
    function handleScroll() {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('scroll', handleScroll);
    };
  });

  const router = useRouter();
  const { query } = router.query;

  const toggleSearch = () => {
    if (!navbarOpen) setSearchOpen(!searchOpen);
  };
  const toggleNav = () => {
    if (!searchOpen) setNavbarOpen(!navbarOpen);
  };
  const closeAll = () => {
    setSearchOpen(false);
    setNavbarOpen(false);
    closePopover();
  };

  const handleProfileAction = (action) => {
    closeAll();
    switch (action) {
      case 'View Profile':
        router.push('/profile/[username]', `/profile/${user.username}`);
        break;
      case 'Sign Out':
        Auth.signOut();
        break;
    }
  };
  const onSearch = ({ query }) => {
    closeAll();
    router.push(`/search/posts?query=${query}`);
  };

  return (
    <nav
      className={`fixed w-full flex flex-wrap items-center justify-between px-8 py-3 navbar-expand-lg bg-secondary text-primary z-20 shadow-2xl focus:outline-none transition duration-300 ${
        scrolled && 'opacity-75 hover:opacity-100'
      }`}
      tabIndex="0"
      ref={parentRef}
    >
      <div
        className={`container mx-auto flex flex-wrap items-center lg:justify-between ${
          searchOpen ? 'justify-center' : '' // centers search bar on mobile
        }`}
      >
        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <Link href="/">
            <a
              className="relative text-2xl leading-relaxed mr-4 py-2 whitespace-no-wrap uppercase hover:opacity-100 link-off"
              onClick={closeAll}
            >
              <svg
                viewBox="0 0 24 24"
                width="24"
                height="24"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="currentColor"
                shapeRendering="geometricPrecision"
                className="text-primary inline mr-2"
              >
                <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
              </svg>
              <div
                className="inline absolute"
                style={{
                  width: '75px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                }}
              >
                <span
                  className="inline-block overflow-hidden absolute"
                  style={{
                    top: '50%',
                    transform: 'translateY(-50%)',
                  }}
                >
                  Galla
                </span>
              </div>
              <style jsx>
                {`
                  span {
                    transition: width 0.15s linear;
                    visibility: hidden;
                    width: 0;
                  }

                  a:hover span {
                    width: 75px;
                    visibility: visible;
                  }
                `}
              </style>
            </a>
          </Link>
          <div className="flex flex-row">
            <button
              className="cursor-pointer text-xl lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={toggleSearch}
            >
              <i className="fas fa-search cursor-pointer"></i>
            </button>
            <button
              className="ml-4 cursor-pointer text-xl lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={toggleNav}
            >
              <i className="fas fa-bars cursor-pointer"></i>
            </button>
          </div>
        </div>
        <form
          className={`w-1/2 flex-wrap items-stretch justify-between relative ${
            searchOpen ? 'flex w-full' : 'hidden'
          } lg:flex`}
          onSubmit={handleSubmit(onSearch)}
        >
          <input
            type="search"
            name="query"
            ref={register}
            placeholder="Search for a post"
            className="px-3 py-2 placeholder-gray-500 text-gray-700 relative bg-primary rounded text-base border border-gray-400 outline-none focus:outline-none focus:shadow-outline w-full pr-10"
            defaultValue={query && query}
          />
          <button
            type="submit"
            className="cursor-pointer z-10 h-full leading-normal font-normal text-center text-gray-400 absolute bg-transparent rounded text-lg items-center justify-center w-8 right-0 pr-3 py-2"
          >
            <i className="fas fa-search"></i>
          </button>
        </form>
        <div
          className={`lg:flex items-center w-full lg:w-auto ${
            navbarOpen ? 'flex' : 'hidden'
          }`}
        >
          {user ? (
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto items-center text-xs w-full">
              <li
                className="nav-item hidden lg:inline"
                onMouseEnter={openPopover}
                onMouseLeave={closePopover}
              >
                <button
                  className="px-4 py-2 leading-snug font-semibold uppercase"
                  ref={userBtnRef}
                >
                  {user.username}
                </button>
                <SimplePopover
                  ref={userPopoverRef}
                  open={popoverShowing}
                  items={['View Profile', 'Sign Out']}
                  handleClick={handleProfileAction}
                />
              </li>
              <li className="nav-item lg:hidden">
                <Link
                  href="/profile/[username]"
                  as={`/profile/${user.username}`}
                >
                  <a className="link-off px-4 py-2 flex leading-snug font-semibold uppercase">
                    View profile
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/post/new">
                  <a
                    className="flex leading-snug lg:ml-4 lg:bg-accent uppercase font-semibold text-white hover:shadow-lg lg:shadow px-4 py-2 lg:rounded outline-none focus:outline-none link-off"
                    onClick={closeAll}
                  >
                    Submit
                  </a>
                </Link>
              </li>
              <li className="nav-item lg:hidden">
                <button
                  className="px-4 py-2 flex leading-snug font-semibold uppercase"
                  onClick={() => Auth.signOut()}
                >
                  Sign Out
                </button>
              </li>
            </ul>
          ) : (
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto align-middle">
              <li className="nav-item">
                <Link href="/login">
                  <a className="px-4 py-2 flex items-center text-xs uppercase font-bold leading-snug link-off">
                    <span>Log In</span>
                  </a>
                </Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};
export default React.memo(Header);
