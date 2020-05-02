import React from "react";
import Link from "next/link";

export default () => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="fixed w-full flex flex-wrap items-center justify-between px-1 py-3 navbar-expand-lg bg-secondary text-primary mb-3 z-50">
        <div className="container mx-auto flex flex-wrap items-center justify-between">
          <div className="w-auto relative flex justify-between lg:static lg:block lg:justify-start">
            <Link href="/">
              <a className="text-2xl font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase hover:opacity-100">
                Artify
              </a>
            </Link>

            <i className="fas fa-bars"></i>
          </div>
          <div className="w-1/2 flex-wrap items-stretch justify-between hidden md:flex relative">
            <input
              type="search"
              placeholder="Enter a tag, artist, or collection"
              className="px-3 py-2 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded text-base border border-gray-400 outline-none focus:outline-none focus:shadow-outline w-full pr-10"
            />
            <span className="cursor-pointer z-10 h-full leading-normal font-normal absolute text-center text-gray-400 absolute bg-transparent rounded text-lg items-center justify-center w-8 right-0 pr-3 py-2">
              <i className="fas fa-search"></i>
            </span>
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            />
          </div>
          <div
            className={
              "lg:flex items-center" + (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
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
                  className="ml-4 px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug bg-accent hover:opacity-75 rounded-lg"
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
