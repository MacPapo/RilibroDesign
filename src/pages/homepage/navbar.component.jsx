import React, { useState } from "react";

export const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="mx-auto lg:py-5 sm:max-w-xl md:max-w-full lg:max-w-screen-xl lg:px-8 ">
      <div className=" p-5 lg:p-2.5 shadow-xl lg:rounded-xl relative flex grid items-center grid-cols-2 lg:grid-cols-3 bg-gray-50 border-gray-300 border-opacity-90">
        <ul className="flex items-center hidden space-x-8 lg:flex">
          <li className="pl-4">
            <a
              href="/"
              aria-label="Our Home"
              title="Our Home"
              className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-green-400"
            >
              Vendi
            </a>
          </li>
          <li>
            <a
              href="/"
              aria-label="Home Compra"
              title="Home Compra"
              className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-green-400"
            >
              Compra
            </a>
          </li>
        </ul>
        <a
          href="/"
          aria-label="Rilibro"
          title="Rilibro"
          className="inline-flex items-center lg:mx-auto"
        >
          <svg
            className="w-8 text-green-400"
            viewBox="0 0 24 24"
            strokeLinejoin="round"
            strokeWidth="2"
            strokeLinecap="round"
            strokeMiterlimit="10"
            stroke="currentColor"
            fill="none"
          >
            <rect x="3" y="1" width="7" height="12" />
            <rect x="3" y="17" width="7" height="6" />
            <rect x="14" y="1" width="7" height="6" />
            <rect x="14" y="11" width="7" height="12" />
          </svg>
          <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
            Rilibro
          </span>
        </a>
        <ul className="flex items-center hidden ml-auto space-x-8 lg:flex">
          <li>
            <a
              href="/"
              aria-label="Sign in"
              title="Sign in"
              className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-green-400"
            >
              Sign in
            </a>
          </li>
          <li className="pr-4">
            <a
              href="/"
              className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 bg-green-600 shadow-inner rounded-xl hover:bg-green-800 focus:shadow-outline focus:outline-none"
              aria-label="Sign up"
              title="Sign up"
            >
              Sign up
            </a>
          </li>
        </ul>
        <div className="ml-auto lg:hidden">
          <button
            aria-label="Open Menu"
            title="Open Menu"
            className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-green-50 focus:bg-green-50"
            onClick={() => setIsMenuOpen(true)}
          >
            <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
              />
              <path
                fill="currentColor"
                d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
              />
              <path
                fill="currentColor"
                d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
              />
            </svg>
          </button>
          {isMenuOpen && (
            <div className="absolute top-0 left-0 w-full">
              <div className="p-5 border rounded shadow-sm bg-gray-50">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <a
                      href="/"
                      aria-label="Rilibro"
                      title="Rilibro"
                      className="inline-flex items-center"
                    >
                      <svg
                        className="w-8 text-green-400"
                        viewBox="0 0 24 24"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeMiterlimit="10"
                        stroke="currentColor"
                        fill="none"
                      >
                        <rect x="3" y="1" width="7" height="12" />
                        <rect x="3" y="17" width="7" height="6" />
                        <rect x="14" y="1" width="7" height="6" />
                        <rect x="14" y="11" width="7" height="12" />
                      </svg>
                      <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                        Rilibro
                      </span>
                    </a>
                  </div>
                  <div>
                    <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <nav>
                  <ul className="space-y-4">
                    <li>
                      <a
                        href="/"
                        aria-label="Our Home"
                        title="Our Home"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-green-400"
                      >
                        Vendi
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        aria-label="Home Compra"
                        title="Home Compra"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-green-400"
                      >
                        Compra
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        aria-label="Sign in"
                        title="Sign in"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-green-400"
                      >
                        Sign in
                      </a>
                    </li>
                    <li>
                      <a href="/" aria-label="Sign up" title="Sign up">
                        <button className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 bg-green-400 rounded shadow-md hover:bg-green-700 focus:shadow-outline focus:outline-none">
                          Sign up
                        </button>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Nav;
