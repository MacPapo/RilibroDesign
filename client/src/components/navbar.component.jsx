import React, { useState, Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../actions/auth";
export const Nav = ({ auth: { isAuthenticated }, logout }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const authLinks = (
    <div className="mx-auto lg:py-5 md:max-w-full lg:max-w-screen-xl lg:px-8">
      <div className="p-5 lg:p-2.5 shadow-xl lg:rounded-xl relative flex grid items-center grid-cols-2 lg:grid-cols-3 bg-gray-50 lg:bg-opacity-70 hover:bg-opacity-100 transition duration-700 border-gray-300 border-opacity-90">
        <ul className="items-center hidden space-x-8 lg:flex">
          <li className="pl-4">
            <Link
              to="/sell"
              aria-label="Sell"
              title="Sell"
              className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-green-400"
            >
              Vendi
            </Link>
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
            <Link
              to="/login"
              aria-label="Login"
              title="Login"
              className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-green-400"
            >
              Profilo
            </Link>
          </li>
          <li className="pr-4">
            <Link
              onClick={logout}
              to="/"
              className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 bg-green-600 shadow-inner rounded-xl hover:bg-green-800 focus:shadow-outline focus:outline-none"
              aria-label="Logout"
              title="Logout"
            >
              Logout
            </Link>
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
            <div className="absolute top-0 left-0 z-50 w-full">
              <div className="p-5 border rounded rounded-b-xl bg-gray-50">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <Link
                      to="/"
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
                    </Link>
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
                      <Link
                        to="/sell"
                        aria-label="Sell"
                        title="Sell"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-green-400"
                      >
                        Vendi 🤑
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/"
                        aria-label="Home Compra"
                        title="Home Compra"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-green-400"
                      >
                        Compra 📦
                      </Link>
                    </li>
                    <div className="grid grid-cols-2 gap-2 md:gap-5">
                      <div>
                        <Link
                          to="/login"
                          aria-label="Login"
                          title="Login"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-green-400"
                        >
                          <button className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 bg-green-400 rounded shadow-md hover:bg-green-700 focus:shadow-outline focus:outline-none">
                            Profilo
                          </button>
                        </Link>
                      </div>
                      <div>
                        <Link
                          onClick={logout}
                          to="/"
                          aria-label="Logout"
                          title="Logout"
                        >
                          <button className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 bg-red-400 rounded shadow-md hover:bg-red-700 focus:shadow-outline focus:outline-none">
                            Logout
                          </button>
                        </Link>
                      </div>
                    </div>
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  const guestLinks = (
    <div className="mx-auto lg:py-5 md:max-w-full lg:max-w-screen-xl lg:px-8">
      <div className="p-5 lg:p-2.5 shadow-xl lg:rounded-xl relative flex grid items-center grid-cols-2 lg:grid-cols-3 bg-gray-50 lg:bg-opacity-70 hover:bg-opacity-100 transition duration-700 border-gray-300 border-opacity-90">
        <ul className="flex items-center hidden space-x-8 lg:flex">
          <li className="pl-4">
            <Link
              to="/sell"
              aria-label="Sell"
              title="Sell"
              className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-green-400"
            >
              Vendi
            </Link>
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
            <Link
              to="/login"
              aria-label="Login"
              title="Login"
              className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-green-400"
            >
              Accedi
            </Link>
          </li>
          <li className="pr-4">
            <Link
              to="/register"
              className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 bg-green-600 shadow-inner rounded-xl hover:bg-green-800 focus:shadow-outline focus:outline-none"
              aria-label="Sign up"
              title="Sign up"
            >
              Registrati
            </Link>
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
            <div className="absolute top-0 left-0 z-50 w-full">
              <div className="p-5 border shadow-xl rounded-b-xl bg-gray-50">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <Link
                      to="/"
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
                    </Link>
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
                      <Link
                        to="/sell"
                        aria-label="Sell"
                        title="Sell"
                        className="font-extrabold tracking-wide text-center text-gray-700 transition-colors duration-200 hover:text-green-400"
                      >
                        <div className="block w-full px-4 py-2 bg-gray-100 hover:bg-gray-200 hover:shadow-inner rounded-xl focus:outline-none focus:border-green-800">
                          Vendi 🤑
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/"
                        aria-label="Home Compra"
                        title="Home Compra"
                        className="font-extrabold tracking-wide text-center text-gray-700 transition-colors duration-200 hover:text-green-400"
                      >
                        <div className="block w-full px-4 py-2 bg-gray-100 hover:bg-gray-200 hover:shadow-inner rounded-xl focus:outline-none focus:border-green-800">
                          Compra 📦
                        </div>
                      </Link>
                    </li>
                    <div className="grid grid-cols-2 gap-2 md:gap-5">
                      <div>
                        <Link
                          to="/login"
                          aria-label="Login"
                          title="Login"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-green-400"
                        >
                          <button className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 bg-green-400 shadow-xl rounded-xl hover:bg-green-700 focus:shadow-outline focus:outline-none">
                            Accedi
                          </button>
                        </Link>
                      </div>
                      <div>
                        <Link
                          to="/register"
                          aria-label="Sign up"
                          title="Sign up"
                        >
                          <button className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 bg-green-600 shadow-inner rounded-xl hover:bg-green-700 focus:shadow-outline focus:outline-none">
                            Registrati
                          </button>
                        </Link>
                      </div>
                    </div>
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  return <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>;
};

Nav.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Nav);
