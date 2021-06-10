import React, { Fragment, useEffect } from "react";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../../components/Spinner/Spinner";
import { getProfileById } from "../../actions/profile";

import Footer from "../../components/footer.component";
import Nav from "../../components/navbar.component";

export const Profile = ({
  getProfileById,
  profile: { nome, username, email, email2, telefono, whatsapp },
  auth,
  match,
}) => {
  console.log(
    "id -->",
    auth.id,
    "match-->",
    match,
    "auth -->",
    auth.user,
    "token",
    localStorage.getItem("token")
  );

  useEffect(() => {
    getProfileById(auth.id);
  }, [getProfileById, auth.id]);

  return (
    <>
      <div>
        {auth.user == null ? (
          <Spinner />
        ) : (
          <>
            <div className="h-screen">
              <div className="justify-center bg-fixed bg-center items-top bg-login-fixed">
                <Nav />
                <div className="justify-center mx-auto md:mb-20 mb-60 lg:py-5 md:max-w-full lg:max-w-screen-xl lg:px-10">
                  <div className="bg-white md:flex no-wrap md:-mx-2 lg:rounded-xl">
                    <div className="container w-full md:w-3/12 md:mx-2 ">
                      <div className="overflow-hidden overflow-clip">
                        <img
                          className="w-3/4 mx-auto mt-10 mb-5 rounded-full shadow-xl md:w-52"
                          src="https://lavinephotography.com.au/wp-content/uploads/2017/01/PROFILE-Photography-112.jpg"
                          alt=""
                        />
                      </div>
                      <div className="p-3 mx-24 bg-white border-t-4 border-green-400">
                        <h1 className="my-1 text-xl font-bold leading-8 text-center text-gray-900">
                          {auth.user.username}
                        </h1>
                      </div>
                    </div>
                    <div className="h-64 mx-4 mt-10 shadow-inner md:mx-2 md:w-9/12 md:mr-7 bg-gray-50 rounded-xl">
                      <div className="p-3 shadow-inner bg-gray-50 rounded-xl">
                        <div className="flex items-center space-x-2 font-semibold leading-8 text-gray-900">
                          <span className=" text text-black-500 hover:text-green-800">
                            <svg
                              className="h-5"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                              />
                            </svg>
                          </span>
                          <span className="tracking-wide text-center">
                            Informazioni
                          </span>
                        </div>
                        <div className="mt-4 text-gray-700">
                          <div className="grid text-sm md:grid-cols-2">
                            <div className="flex flex-col md:grid md:grid-flow-col md:grid-cols-2">
                              <div className="px-4 py-2 font-semibold text-center">
                                Nome
                              </div>
                              <div className="px-4 py-2 text-center">
                                {auth.user.nome}
                              </div>
                            </div>
                            <div className="flex flex-col md:grid md:grid-flow-col md:grid-cols-2">
                              <div className="px-4 py-2 font-semibold text-center">
                                Cognome
                              </div>
                              <div className="px-4 py-2 text-center">Doe</div>
                            </div>
                            <div className="flex flex-col md:grid md:grid-flow-col md:grid-cols-2">
                              <div className="px-4 py-2 font-semibold text-center">
                                Contatti
                              </div>
                              <div className="px-4 py-2 text-center">
                                {auth.user.contatti.telefono}
                              </div>
                            </div>

                            <div className="flex flex-col md:grid md:grid-flow-col md:grid-cols-2">
                              <div className="px-4 py-2 font-semibold text-center">
                                Email
                              </div>
                              <div className="px-4 py-2 text-center">
                                <a
                                  className="overflow-hidden text-blue-800 overflow-ellipsis"
                                  href="mailto:jane@example.com"
                                >
                                  {auth.user.contatti.email}
                                </a>
                              </div>
                            </div>
                            <div className="flex flex-col md:grid md:grid-flow-col md:grid-cols-2 ">
                              <div className="px-4 py-2 font-semibold text-center">
                                Data di nascita
                              </div>
                              <div className="px-4 py-2 text-center">
                                Feb 06, 1998
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="items-end justify-end">
                <Footer />
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

Profile.propTypes = {
  getProfileById: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
  auth: state.auth,
});

export default connect(mapStateToProps, { getProfileById })(Profile);
