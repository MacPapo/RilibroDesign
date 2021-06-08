import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import PropTypes from "prop-types";
import { login } from "../../actions/auth";

import Footer from "../../components/footer.component";
import Nav from "../../components/navbar.component";

import "../../index.css";

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };

  if (isAuthenticated) {
    return <Redirect to="/profile" />;
  }

  return (
    <div className="h-screen">
      <div className="justify-center items-top bg-login">
        <Nav />
        <div className="mt-20 justify-items-center">
          <div className="flex items-center justify-center lg:pb-20">
            <div className="relative w-full px-4 py-16 text-center transition duration-700 bg-white rounded-t-xl lg:shadow-xl lg:px-24 lg:max-w-xl lg:rounded-xl">
              <form className="text-center" onSubmit={onSubmit}>
                <h1 className="w-full mb-8 text-3xl font-bold tracking-wider text-gray-600 hover:text-green-700">
                  Accedi
                </h1>
                <div className="py-2 text-left">
                  <p className="px-2 font-semibold text-left text-s">Email</p>
                  <input
                    type="email"
                    className="block w-full px-4 py-2 bg-gray-200 shadow-inner rounded-xl focus:outline-none focus:border-green-700"
                    placeholder="Email"
                    name="email"
                    value={email}
                    onChange={onChange}
                    required
                  />
                </div>
                <div className="py-2 text-left">
                  <p className="px-2 font-semibold text-left text-s">
                    Password
                  </p>
                  <input
                    type="password"
                    className="block w-full px-4 py-2 bg-gray-200 shadow-inner rounded-xl focus:outline-none focus:border-green-700"
                    placeholder="Password"
                    name="password"
                    value={password}
                    onChange={onChange}
                    minLength="8"
                  />
                </div>
                <div className="py-2">
                  <button
                    type="submit"
                    className="block w-full p-2 font-bold tracking-wider text-white transition duration-500 bg-green-500 shadow-sm hover:shadow-inner rounded-xl hover:bg-green-700 focus:outline-none"
                  >
                    Accedi
                  </button>
                </div>
              </form>
              <div className="text-center">
                <Link href="/forgot-password" className="hover:underline">
                  Password dimenticata?
                </Link>
              </div>
              <div className="mt-12 text-center">
                <span>Non hai un account? </span>
                <Link
                  to="/register"
                  className="font-semibold text-black-600 text-md hover:text-green-800"
                >
                  Registrati
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="items-end justify-end">
        <Footer />
      </div>
    </div>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);
