import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/footer.component";
import Nav from "../../components/navbar.component";

export const Register = () => {
  return (
    <>
      <div className="h-screen">
        <div className="justify-center h-80 bg-header items-top">
          <Nav />
          <div className="pt-16 justify-items-center ">
            <div className="flex items-center justify-center flex-1 ">
              <div className="w-full px-4 py-10 text-center transition duration-700 border-gray-300 rounded-xl sm:border-2 lg:px-24 lg:max-w-xl sm:max-w-md bg-gray-50 bg-opacity-70 hover:bg-opacity-100 border-opacity-90">
                <form className="p-1 text-center">
                  <h1 className="w-full mb-4 text-3xl font-bold tracking-wider text-gray-600 hover:text-green-700">
                    Registrati
                  </h1>
                  <div className="grid grid-cols-2 gap-2">
                    <p className="px-2 font-semibold text-left text-s">Nome</p>
                    <p className="px-2 font-semibold text-left text-s">
                      Cognome
                    </p>
                    <input
                      type="text"
                      className="block w-full px-4 py-2 bg-gray-200 shadow-inner rounded-xl focus:outline-none focus:border-green-700"
                      placeholder="Nome"
                    />

                    <input
                      type="text"
                      className="block w-full px-4 py-2 bg-gray-200 shadow-inner rounded-xl focus:outline-none focus:border-green-700"
                      placeholder="Cognome"
                    />
                  </div>
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
                  <div className="py-2 text-left">
                    <p className="px-2 font-semibold text-left text-s">
                      Conferma Password
                    </p>
                    <input
                      type="password"
                      className="block w-full px-4 py-2 bg-gray-200 shadow-inner rounded-xl focus:outline-none focus:border-green-700"
                      placeholder="Conferma Password"
                    />
                  </div>
                  <div className="py-2">
                    <button
                      type="submit"
                      className="block w-full p-2 font-bold tracking-wider text-white bg-green-500 rounded-xl hover:bg-green-700"
                    >
                      Registrati
                    </button>
                  </div>
                </form>

                <div className="mt-8 text-center">
                  <span>Hai già un account?</span>
                  <Link
                    to="/login"
                    className="font-semibold text-black-600 text-md hover:text-green-800"
                  >
                    Accedi
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Register;
