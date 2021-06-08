import React, { useState } from "react";
import { setAlert } from "../../actions/alert";
import { Link, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import Footer from "../../components/footer.component";
import Nav from "../../components/navbar.component";

import { register } from "../../actions/auth";
const Register = ({ setAlert, register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    nome: "",
    username: "",
    email: "",
    password: "",
    password2: "",
    email2: "",
    telefono: "",
    whatsapp: "",
  });

  const {
    nome,
    username,
    email,
    password,
    password2,
    email2,
    telefono,
    whatsapp,
  } = formData;

  const [count, setCount] = useState(1);

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      setAlert("Le password inserite non corrispondono", "danger");
    } else {
      register({ nome, username, email, password, email2, telefono, whatsapp });
    }
  };

  if (isAuthenticated) {
    return <Redirect to="/profile" />;
  }
  return (
    <>
      <div className="h-screen">
        <div className="justify-center bg-register items-top">
          <Nav />
          <div className="mt-20 justify-items-center ">
            <div className="flex items-center justify-center lg:pb-20">
              <div className="relative w-full px-4 py-16 text-center transition duration-700 bg-white rounded-t-xl lg:shadow-xl lg:px-24 lg:max-w-xl lg:rounded-xl">
                <h1 className="w-full mb-4 text-3xl font-bold tracking-wider text-gray-600 hover:text-green-700">
                  Registrati
                </h1>
                <div className="flex justify-center my-6">
                  <div className="inline-flex h-1 bg-green-400 rounded-full w-36 "></div>
                </div>
                <h1 className="w-full mb-4 text-xl font-bold tracking-wider text-gray-600 hover:text-green-700">
                  Step {count} di 3
                </h1>
                <form className="p-1 text-center" onSubmit={onSubmit}>
                  {count === 1 ? (
                    <>
                      <h1 className="w-full mb-4 text-lg font-bold tracking-wider text-gray-600 hover:text-green-700">
                        Info Personali
                      </h1>
                      <div className="py-2 text-left">
                        <p className="px-2 font-semibold text-left text-s">
                          Nome 👤
                        </p>
                        <input
                          type="text"
                          className="block w-full px-4 py-2 bg-gray-200 shadow-inner rounded-xl focus:outline-none focus:border-green-700"
                          placeholder="Nome"
                          name="nome"
                          value={nome}
                          onChange={onChange}
                          required
                        />
                      </div>
                      <div className="py-2 text-left">
                        <p className="px-2 font-semibold text-left text-s">
                          Email 📧
                        </p>
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
                          Password 🤫
                        </p>
                        <input
                          type="password"
                          className="block w-full px-4 py-2 bg-gray-200 shadow-inner rounded-xl focus:outline-none focus:border-green-700"
                          placeholder="Password"
                          name="password"
                          value={password}
                          onChange={onChange}
                          required
                        />
                      </div>
                      <div className="py-2 text-left">
                        <p className="px-2 font-semibold text-left text-s">
                          Conferma Password 🤫
                        </p>
                        <input
                          type="password"
                          className="block w-full px-4 py-2 bg-gray-200 shadow-inner rounded-xl focus:outline-none focus:border-green-700"
                          placeholder="Conferma Password"
                          name="password2"
                          value={password2}
                          onChange={onChange}
                          required
                        />
                      </div>
                    </>
                  ) : null}
                  {count === 2 ? (
                    <>
                      <h1 className="w-full mb-4 text-lg font-bold tracking-wider text-gray-600 hover:text-green-700">
                        Contatti
                      </h1>
                      <div className="py-2 text-left">
                        <p className="px-2 font-semibold text-left text-s">
                          Username 📇
                        </p>
                        <input
                          type="text"
                          className="block w-full px-4 py-2 bg-gray-200 shadow-inner rounded-xl focus:outline-none focus:border-green-700"
                          placeholder="Username"
                          name="username"
                          value={username}
                          onChange={onChange}
                          required
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <p className="px-2 font-semibold text-left text-s">
                          Telefono ☎️
                        </p>
                        <p className="px-2 font-semibold text-left text-s">
                          WhatsApp 💬
                        </p>
                        <input
                          type="text"
                          className="block w-full px-4 py-2 bg-gray-200 shadow-inner rounded-xl focus:outline-none focus:border-green-700"
                          placeholder="Telefono"
                          name="telefono"
                          value={telefono}
                          onChange={onChange}
                          required
                        />
                        <input
                          type="text"
                          className="block w-full px-4 py-2 bg-gray-200 shadow-inner rounded-xl focus:outline-none focus:border-green-700"
                          placeholder="Whatsapp"
                          name="whatsapp"
                          value={whatsapp}
                          onChange={onChange}
                          required
                        />
                      </div>
                      <div className="py-2 text-left">
                        <p className="px-2 font-semibold text-left text-s">
                          Email Di Contatto 📬
                        </p>
                        <input
                          type="email"
                          className="block w-full px-4 py-2 bg-gray-200 shadow-inner rounded-xl focus:outline-none focus:border-green-700"
                          placeholder="Email"
                          name="email2"
                          value={email2}
                          onChange={onChange}
                          required
                        />
                      </div>
                    </>
                  ) : null}
                  {count === 3 ? (
                    <>
                      <h1 className="w-full mb-4 text-lg font-bold tracking-wider text-gray-600 hover:text-green-700">
                        Riepilogo
                      </h1>
                      <div className="py-2 text-left">
                        <p className="px-2 font-semibold text-left text-s">
                          Nome:
                        </p>
                        <div className="block w-full px-4 py-2 text-gray-400 bg-gray-200 shadow-inner rounded-xl focus:outline-none focus:border-green-700">
                          <p>{nome}</p>
                        </div>
                      </div>

                      <div className="py-2 text-left">
                        <p className="px-2 font-semibold text-left text-s">
                          Username:
                        </p>
                        <div className="block w-full px-4 py-2 text-gray-400 bg-gray-200 shadow-inner rounded-xl focus:outline-none focus:border-green-700">
                          <p>{username}</p>
                        </div>
                      </div>

                      <div className="py-2 text-left">
                        <p className="px-2 font-semibold text-left text-s">
                          Email Personale:
                        </p>
                        <div className="block w-full px-4 py-2 text-gray-400 bg-gray-200 shadow-inner rounded-xl focus:outline-none focus:border-green-700">
                          <p>{email}</p>
                        </div>
                      </div>

                      <div className="py-2 text-left">
                        <p className="px-2 font-semibold text-left text-s">
                          Email di Contatto:
                        </p>
                        <div className="block w-full px-4 py-2 text-gray-400 bg-gray-200 shadow-inner rounded-xl focus:outline-none focus:border-green-700">
                          <p>{email2}</p>
                        </div>
                      </div>

                      <div className="py-2 text-left">
                        <p className="px-2 font-semibold text-left text-s">
                          Telefono:
                        </p>
                        <div className="block w-full px-4 py-2 text-gray-400 bg-gray-200 shadow-inner rounded-xl focus:outline-none focus:border-green-700">
                          <p>{telefono}</p>
                        </div>
                      </div>

                      <div className="py-2 text-left">
                        <p className="px-2 font-semibold text-left text-s">
                          Whatsapp:
                        </p>
                        <div className="block w-full px-4 py-2 text-gray-400 bg-gray-200 shadow-inner rounded-xl focus:outline-none focus:border-green-700">
                          <p>{whatsapp}</p>
                        </div>
                      </div>

                      <div className="py-2">
                        <button
                          type="submit"
                          className="block w-full p-2 font-bold tracking-wider text-white bg-green-500 rounded-xl hover:bg-green-700"
                        >
                          Registrati
                        </button>
                      </div>
                    </>
                  ) : null}
                </form>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    className="block w-full p-2 font-bold tracking-wider text-white bg-red-300 rounded-xl hover:bg-red-400"
                    type="submit"
                    onClick={() => setCount(count - 1)}
                    disabled={count === 1}
                  >
                    Indietro
                  </button>
                  <button
                    className="block w-full p-2 font-bold tracking-wider text-white bg-green-300 rounded-xl hover:bg-green-700"
                    type="submit"
                    onClick={() => setCount(count + 1)}
                    disabled={count > 2}
                    hidden={count > 2}
                  >
                    Avanti
                  </button>
                </div>
                <div className="mt-8 text-center">
                  <span>Hai già un account? </span>
                  <Link
                    to="/login"
                    className="font-semibold text-black text-md hover:text-green-700"
                  >
                    Accedi
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
    </>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { setAlert, register })(Register);
