import React from "react";
import Link from "next/link";

export default () => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const [searchOpen, setSearchOpen] = React.useState(false);
  return (
    <>
      <nav className="fixed w-full flex flex-wrap items-center justify-between px-4 py-3 navbar-expand-lg bg-secondary text-primary mb-3 z-50">
        <div
          className={`container mx-auto flex flex-wrap items-center lg:justify-between ${
            searchOpen ? "justify-center" : "" // centers search bar on mobile
          }`}
        >
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link href="/">
              <a className="text-2xl font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase hover:opacity-100">
                Artify
              </a>
            </Link>
            <div className="flex flex-row">
              <button
                className="cursor-pointer text-xl lg:hidden outline-none focus:outline-none"
                type="button"
                onClick={() => {
                  if (!navbarOpen) setSearchOpen(!searchOpen);
                }}
              >
                <i className="fas fa-search cursor-pointer"></i>
              </button>
              <button
                className="ml-4 cursor-pointer text-xl lg:hidden outline-none focus:outline-none"
                type="button"
                onClick={() => {
                  if (!searchOpen) setNavbarOpen(!navbarOpen);
                }}
              >
                <i className="fas fa-bars cursor-pointer"></i>
              </button>
            </div>
          </div>
          <div
            className={`w-1/2 flex-wrap items-stretch justify-between relative ${
              searchOpen ? "flex" : "hidden"
            } lg:flex`}
          >
            <input
              type="search"
              placeholder="Enter a tag, artist, or collection"
              className="px-3 py-2 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded text-base border border-gray-400 outline-none focus:outline-none focus:shadow-outline w-full pr-10"
            />
            <span className="cursor-pointer z-10 h-full leading-normal font-normal absolute text-center text-gray-400 absolute bg-transparent rounded text-lg items-center justify-center w-8 right-0 pr-3 py-2">
              <i className="fas fa-search"></i>
            </span>
          </div>
          <div
            className={`lg:flex items-center ${
              navbarOpen ? " flex" : " hidden"
            }`}
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug hover:opacity-75"
                  href="#pablo"
                >
                  <span>Log In</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="lg:ml-4 px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug lg:bg-accent hover:opacity-75 rounded-lg"
                  href="#pablo"
                >
                  <span>Sign Up</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
