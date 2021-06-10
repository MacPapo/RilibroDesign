import React, { Fragment, useEffect } from "react";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../../components/Spinner/Spinner";
import { getProfileById } from "../../actions/profile";

import Footer from "../../components/footer.component";
import Nav from "../../components/navbar.component";
import { loadUser } from "../../actions/auth";

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
      <Fragment>
        {auth.user == null ? (
          <Spinner />
        ) : (
          <div className="h-screen">
            <div className="justify-center h-80 bg-header items-top">
              <Nav />
              <div className="justify-center mx-auto lg:py-5 md:max-w-full lg:max-w-screen-xl lg:px-8">
                <div className="md:flex no-wrap md:-mx-2 ">
                  <div className="container w-full md:w-3/12 md:mx-2">
                    <div className="overflow-hidden">
                      <img
                        className="w-3/4 mx-auto mt-10 mb-5 rounded-full shadow-xl md:w-52"
                        src="https://lavinephotography.com.au/wp-content/uploads/2017/01/PROFILE-Photography-112.jpg"
                        alt=""
                      />
                    </div>
                    <div className="p-3 bg-white border-t-4 border-green-400">
                      <h1 className="my-1 text-xl font-bold leading-8 text-gray-900">
                        {auth.user.username}
                      </h1>
                      <h3 className="leading-6 text-gray-600 font-lg text-semibold">
                        {auth.user.contatti.telefono}
                      </h3>
                      <p className="text-sm leading-6 text-gray-500 hover:text-gray-600">
                        {auth.user.contatti.email}
                      </p>
                    </div>
                  </div>
                  <div className="w-full h-64 mx-2 md:w-9/12">
                    <div className="p-3 bg-white shadow-inner rounded-xl">
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
                        <span className="tracking-wide">Informazioni</span>
                      </div>
                      <div className="text-gray-700">
                        <div className="grid text-sm md:grid-cols-2">
                          <div className="grid grid-cols-2">
                            <div className="px-4 py-2 font-semibold">Nome</div>
                            <div className="px-4 py-2">Jane</div>
                          </div>
                          <div className="grid grid-cols-2">
                            <div className="px-4 py-2 font-semibold">
                              Cognome
                            </div>
                            <div className="px-4 py-2">Doe</div>
                          </div>
                          <div className="grid grid-cols-2">
                            <div className="px-4 py-2 font-semibold">
                              Contatti
                            </div>
                            <div className="px-4 py-2">+11 998001001</div>
                          </div>

                          <div className="grid grid-cols-2">
                            <div className="px-4 py-2 font-semibold">
                              Email.
                            </div>
                            <div className="px-4 py-2">
                              <a
                                className="text-blue-800"
                                href="mailto:jane@example.com"
                              >
                                jane@example.com
                              </a>
                            </div>
                          </div>
                          <div className="grid grid-cols-2">
                            <div className="px-4 py-2 font-semibold">
                              Data di nascita
                            </div>
                            <div className="px-4 py-2">Feb 06, 1998</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <Footer />
              </div>
            </div>
          </div>
        )}
      </Fragment>
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
