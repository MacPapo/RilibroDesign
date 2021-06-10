import React, { useState } from "react";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addPost } from "../../actions/post";

import Footer from "../../components/footer.component";
import Nav from "../../components/navbar.component";

export const Sell = ({ addPost }) => {
  const [formData, setFormData] = useState({
    titolo: "",
    sottotitolo: "",
    autore: "",
    isbn: "",
    condizione: "",
    immagine: "",
    descrizione: "",
    id: localStorage.getItem("id"),
    regione: "ciao",
    provincia: "ciao",
    comune: "",
  });

  const stati = [
    {
      id: 1,
      label: "Imposta Stato",
      value: "Imposta Stato",
    },{
      id: 2,
      label: "Ottimo",
      value: "Ottimo",
    },
    {
      id: 3,
      label: "Buono",
      value: "Buono",
    },
    {
      id: 4,
      label: "Cattivo",
      value: "Cattivo",
    },
  ];

  const [count, setCount] = useState(1);

  const {
    titolo,
    sottotitolo,
    autore,
    isbn,
    condizione,
    immagine,
    descrizione,
    id,
    comune,
    regione = "ciao",
    provincia = "ciao",
  } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();

    addPost({
      titolo,
      sottotitolo,
      autore,
      isbn,
      condizione,
      immagine,
      descrizione,
      id,
      comune,
      regione,
      provincia,
    });
  };

  return (
    <>
      <div className="h-screen">
        <div className="justify-center bg-fixed bg-cover lg:bg-center items-top bg-sell-fixed">
          <Nav />
          <div className="mt-20 justify-items-center ">
            <div className="flex items-center justify-center lg:pb-20">
              <div className="relative w-full px-4 py-16 text-center transition duration-700 bg-white rounded-t-xl lg:shadow-xl lg:px-24 lg:max-w-xl lg:rounded-xl">
                <h1 className="w-full mb-4 text-3xl font-bold tracking-wider text-gray-600 hover:text-green-700">
                  Pubblica Annuncio
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
                      <div className="py-2 text-left">
                        <p className="px-2 font-semibold text-left text-s">
                          Titolo
                        </p>
                        <input
                          type="text"
                          className="block w-full px-4 py-2 bg-gray-200 shadow-inner rounded-xl focus:outline-none focus:border-green-700"
                          placeholder="Titolo"
                          name="titolo"
                          onChange={onChange}
                          value={titolo}
                          required
                        />
                      </div>
                      <div className="py-2 text-left">
                        <p className="px-2 font-semibold text-left text-s">
                          Sottotitolo
                        </p>
                        <input
                          type="text"
                          className="block w-full px-4 py-2 bg-gray-200 shadow-inner rounded-xl focus:outline-none focus:border-green-700"
                          placeholder="Sottotitolo"
                          name="sottotitolo"
                          value={sottotitolo}
                          onChange={onChange}
                          required
                        />
                      </div>
                      <div className="py-2 text-left">
                        <p className="px-2 font-semibold text-left text-s">
                          Autore
                        </p>
                        <input
                          type="text"
                          className="block w-full px-4 py-2 bg-gray-200 shadow-inner rounded-xl focus:outline-none focus:border-green-700"
                          placeholder="Autore"
                          name="autore"
                          value={autore}
                          onChange={onChange}
                          required
                        />
                      </div>
                    </>
                  ) : null}
                  {count === 2 ? (
                    <>
                      <div className="py-2 text-left">
                        <p className="px-2 font-semibold text-left text-s">
                          isbn
                        </p>
                        <input
                          type="text"
                          className="block w-full px-4 py-2 bg-gray-200 shadow-inner rounded-xl focus:outline-none focus:border-green-700"
                          placeholder="ISBN"
                          name="isbn"
                          value={isbn}
                          onChange={onChange}
                          maxLength="10"
                          required
                        />
                      </div>

                      <div className="py-2 text-left">
                        <p className="px-2 font-semibold text-left text-s">
                          Comune
                        </p>
                        <input
                          type="text"
                          className="block w-full px-4 py-2 bg-gray-200 shadow-inner rounded-xl focus:outline-none focus:border-green-700"
                          placeholder="Comune"
                          name="comune"
                          value={comune}
                          onChange={onChange}
                          required
                        />
                      </div>

                      <div className="flex flex-col text-sm">
                        <p className="px-2 font-semibold text-left text-s">
                          Descrizione
                        </p>
                        <textarea
                          className="block w-full px-4 py-2 bg-gray-200 shadow-inner rounded-xl focus:outline-none focus:border-green-700"
                          placeholder="Descrizione del libro"
                          name="descrizione"
                          value={descrizione}
                          onChange={onChange}
                        ></textarea>
                      </div>

                      <div className="items-center mt-4 text-sm text-gray-700 options md:flex md:space-x-6">
                        <p className="px-2 font-semibold text-left text-s">
                          Condizione{" "}
                        </p>
                        <select
                          className="w-full p-2 border border-gray-200 focus:outline-none focus:border-gray-500"
                          value={condizione}
                          name="condizione"
                          onChange={onChange}
                          required
                        >
                          {stati.map((stato) => (
                            <option key={stato.id} value={stato.value}>
                              {stato.label}
                            </option>
                          ))}
                        </select>
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
                          Titolo:
                        </p>
                        <div className="block w-full px-4 py-2 text-gray-400 bg-gray-200 shadow-inner rounded-xl focus:outline-none focus:border-green-700">
                          <p>{titolo}</p>
                        </div>
                      </div>

                      <div className="py-2 text-left">
                        <p className="px-2 font-semibold text-left text-s">
                          Sottotiolo:
                        </p>
                        <div className="block w-full px-4 py-2 text-gray-400 bg-gray-200 shadow-inner rounded-xl focus:outline-none focus:border-green-700">
                          <p>{sottotitolo}</p>
                        </div>
                      </div>

                      <div className="py-2 text-left">
                        <p className="px-2 font-semibold text-left text-s">
                          Autore:
                        </p>
                        <div className="block w-full px-4 py-2 text-gray-400 bg-gray-200 shadow-inner rounded-xl focus:outline-none focus:border-green-700">
                          <p>{autore}</p>
                        </div>
                      </div>

                      <div className="py-2 text-left">
                        <p className="px-2 font-semibold text-left text-s">
                          ISBN:
                        </p>
                        <div className="block w-full px-4 py-2 text-gray-400 bg-gray-200 shadow-inner rounded-xl focus:outline-none focus:border-green-700">
                          <p>{isbn}</p>
                        </div>
                      </div>

                      <div className="py-2 text-left">
                        <p className="px-2 font-semibold text-left text-s">
                          Descrizione:
                        </p>
                        <div className="block w-full px-4 py-2 text-gray-400 bg-gray-200 shadow-inner rounded-xl focus:outline-none focus:border-green-700">
                          <p>{descrizione}</p>
                        </div>
                      </div>

                      <div className="py-2 text-left">
                        <p className="px-2 font-semibold text-left text-s">
                          Condizione:
                        </p>
                        <div className="block w-full px-4 py-2 text-gray-400 bg-gray-200 shadow-inner rounded-xl focus:outline-none focus:border-green-700">
                          <p>{condizione}</p>
                        </div>
                      </div>

                      <div className="py-2 text-left">
                        <p className="px-2 font-semibold text-left text-s">
                          Comune:
                        </p>
                        <div className="block w-full px-4 py-2 text-gray-400 bg-gray-200 shadow-inner rounded-xl focus:outline-none focus:border-green-700">
                          <p>{comune}</p>
                        </div>
                      </div>

                      <div className="py-2">
                        <button
                          type="submit"
                          className="block w-full p-2 font-bold tracking-wider text-white bg-green-500 rounded-xl hover:bg-green-700"
                        >
                          Pubblica
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
                  >
                    Avanti
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

Sell.propTypes = {
  addPost: PropTypes.func.isRequired,
};

export default connect(null, { addPost })(Sell);
