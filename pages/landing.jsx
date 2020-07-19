import React from 'react';
import Link from 'next/link';

import Head from '../components/Head';

export default function Landing() {
  return (
    <main>
      <Head />
      <div
        className="relative pt-16 pb-32 flex content-center items-center justify-center"
        style={{
          minHeight: '75vh',
        }}
      >
        <div
          className="absolute top-0 w-full h-full bg-center bg-cover"
          style={{
            backgroundImage: "url('./img/landingBg.jpg')",
          }}
        >
          <span
            id="blackOverlay"
            className="w-full h-full absolute inset-0 opacity-75 bg-black"
          ></span>
        </div>
        <div className="container relative mx-auto">
          <div className="items-center flex flex-wrap">
            <div className="w-full lg:w-6/12 px-4 m-auto text-center">
              <h1 className="text-primary font-semibold text-5xl">
                The future of art is here
              </h1>
              <p className="mt-4 text-lg opacity-75">
                Galla is revolutionizing the way artists and curators work, by
                giving the community an update for the digital age.
              </p>
              <div className="mt-6 text-xl">
                <p className="mb-4">
                  Sign up during the Beta and get an extra 10% royalties,
                  forever
                </p>
                <Link href="/signup">
                  <a className="btn-primary text-lg normal-case link-off">
                    Start earning
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div
          className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
          style={{ height: '70px', transform: 'translateZ(0)' }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-secondary-soft fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
      </div>

      <section className="pb-20 bg-secondary-soft -mt-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap">
            <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
              <div className="relative flex flex-col min-w-0 break-words bg-primary w-full mb-8 shadow-lg rounded-lg">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                    <i className="fas fa-shield-alt text-lg"></i>
                  </div>
                  <h6 className="text-xl font-semibold text-gray-800">
                    Protect Your Work
                  </h6>
                  <p className="mt-2 mb-4 text-gray-600">
                    64% of professionals have had their online work stolen{' '}
                    <b>over 200 times</b>. Galla is integrated with protection
                    against content scraping and bots.
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full md:w-4/12 px-4 text-center pt-6 md:pt-0">
              <div className="relative flex flex-col min-w-0 break-words bg-primary w-full mb-8 shadow-lg rounded-lg">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-400">
                    <i className="fas fa-money-bill-wave text-lg"></i>
                  </div>
                  <h6 className="text-xl font-semibold text-gray-800">
                    Earn More
                  </h6>
                  <p className="mt-2 mb-4 text-gray-600">
                    Sell your work, earn comissions, and collect royalties{' '}
                    <b>every time you're viewed</b> &ndash; all in one place.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6 w-full md:w-4/12 px-4 text-center">
              <div className="relative flex flex-col min-w-0 break-words bg-primary w-full mb-8 shadow-lg rounded-lg">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-green-400">
                    <i className="fas fa-stream text-lg"></i>
                  </div>
                  <h6 className="text-xl font-semibold text-gray-800">
                    Curate Content
                  </h6>
                  <p className="mt-2 mb-4 text-gray-600">
                    Digitize your exhibitions, galleries, or private collections
                    for the internet, and <b>stream to any device</b> you can
                    imagine.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="my-20 text-center">
          <h3 className="font-semibold text-3xl italic">
            How much should you really be earning?
          </h3>
        </div>
      </section>

      <section className="relative block bg-primary">
        <div
          className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
          style={{ height: '80px', transform: 'translateZ(0)' }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-primary fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>

        <div className="container mx-auto px-4 py-24">
          <div className="flex flex-wrap text-center justify-center">
            <div className="w-full lg:w-6/12 md:px-4">
              <h2 className="text-4xl font-semibold text-secondary-soft">
                Be a part of something greater
              </h2>
              <p className="text-lg leading-relaxed mt-4 text-secondary-soft opacity-75">
                Galla is currently under active development, and we're looking
                for all the help we can get. If you're as excited about the
                project as we are, get in touch using one of the methods below
              </p>
            </div>
          </div>
          <div className="flex flex-wrap my-16 justify-center text-primary space-y-6 lg:space-x-4 lg:space-y-0">
            <div className="w-full lg:w-3/12 px-4 py-8 bg-secondary-soft rounded-lg opacity-75">
              <a
                href="https://discord.gg/ujvNJcr"
                target="_blank"
                rel="noopener noreferrer"
                className="link-off"
              >
                <div className="p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center text-secondary-soft">
                  <i className="fab fa-discord text-xl"></i>
                </div>
                <h5 className="text-xl mt-5 font-semibold">Discord</h5>
                <p className="mt-2 mb-4 opacity-75">
                  Follow along with site progress, developer updates, and
                  provide feedback or feature requests.
                </p>
              </a>
            </div>
            <div className="w-full lg:w-3/12 px-4 py-8 bg-secondary-soft rounded-lg opacity-75">
              <a
                href="https://github.com/quorth0n/galla"
                target="_blank"
                rel="noopener noreferrer"
                className="link-off"
              >
                <div className="p-3 w-12 h-12 shadow-lg rounded-full bg-primary inline-flex items-center justify-center text-secondary-soft">
                  <i className="fab fa-github text-xl"></i>
                </div>
                <h5 className="text-xl mt-5 font-semibold">GitHub</h5>
                <p className="mt-2 mb-4 opacity-75">
                  Galla is a{' '}
                  <a href="https://www.gnu.org/philosophy/free-sw.html">
                    Free and Open Source
                  </a>{' '}
                  project. If you have development experience, you can help us
                  work on new features.
                </p>
              </a>
            </div>
            <div className="w-full lg:w-3/12 px-4 py-8 bg-secondary-soft rounded-lg opacity-75">
              <a
                href="https://github.com/quorth0n/galla"
                target="_blank"
                rel="noopener noreferrer"
                className="link-off"
              >
                <div className="p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center text-secondary-soft">
                  <i className="fab fa-instagram text-xl"></i>
                </div>
                <h5 className="text-xl mt-5 font-semibold">Instagram</h5>
                <p className="mt-2 mb-4">
                  Help the community grow. Pass our account along to someone who
                  wants an art platform that caters to them.
                </p>
              </a>
            </div>
          </div>
          <div className="text-center">
            <Link href="/signup">
              <a className="btn-primary text-xl normal-case link-off">
                Start earning
              </a>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
