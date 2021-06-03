import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/footer.component";
import Nav from "../../components/navbar.component";
import "../../index.css";

export const Login = () => {
  return (
    <div>
      <div className="h-screen">
        <div className="justify-center h-80 bg-header items-top">
          <Nav />

          <div className="mt-20 justify-items-center">
            <div className="flex items-center justify-center flex-1">
              <div className="relative w-full px-4 py-16 text-center transition duration-700 border-gray-200 shadow-xl sm:border-2 lg:px-24 lg:max-w-xl sm:max-w-md bg-gray-50 bg-opacity-90 hover:bg-opacity-100 border-opacity-90 rounded-xl">
                <form className="text-center">
                  <h1 className="w-full mb-8 text-3xl font-bold tracking-wider text-gray-600 hover:text-green-700">
                    Accedi
                  </h1>
                  <div className="py-2 text-left">
                    <p className="px-2 font-semibold text-left text-s">Email</p>
                    <input
                      type="email"
                      className="block w-full px-4 py-2 bg-gray-200 shadow-inner rounded-xl focus:outline-none focus:border-green-700"
                      placeholder="Email"
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
                  <span>Non hai un account?</span>
                  <Link
                    to="/register"
                    className="font-semibold text-black-600 text-md hover:text-green-800"
                  >
                    Registrati
                  </Link>
                </div>
              </div>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
