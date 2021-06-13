import React, { useState } from "react";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addPost } from "../../actions/post";

import Footer from "../../components/footer.component";
import Nav from "../../components/navbar.component";
import { setAlert } from "../../actions/alert";

export const Sell = ({ addPost }) => {
  const [formData, setFormData] = useState({
    titolo: "",
    prezzo: "",
    autore: "",
    isbn: "",
    condizione: "",
    immagine: "",
    descrizione: "",
    id: localStorage.getItem("id"),
    comune: "",
  });

  const stati = [
    {
      id: 1,
      label: "Imposta Stato",
      value: "Imposta Stato",
    },
    {
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
    prezzo,
    autore,
    isbn,
    condizione,
    immagine,
    descrizione,
    id,
    comune,
  } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();

    if (comune.length == 0) {
      console.log("Il comune non è definito");
      setAlert("Il comune non è definito", "danger");
    } else {
      addPost({
        titolo,
        prezzo,
        autore,
        isbn,
        condizione,
        immagine,
        descrizione,
        id,
        comune,
      });
    }
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
                          ISBN
                        </p>
                        <input
                          type="text"
                          className="block w-full px-4 py-2 uppercase bg-gray-200 shadow-inner rounded-xl focus:outline-none focus:border-green-700"
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
                          Autore
                        </p>
                        <input
                          type="text"
                          className="block w-full px-4 py-2 capitalize bg-gray-200 shadow-inner rounded-xl focus:outline-none focus:border-green-700"
                          placeholder="Autore"
                          name="autore"
                          value={autore}
                          onChange={onChange}
                          required
                        />
                      </div>
                      <div className="py-2 text-left">
                        <p className="px-2 font-semibold text-left text-s">
                          Titolo
                        </p>
                        <input
                          type="text"
                          className="block w-full px-4 py-2 capitalize bg-gray-200 shadow-inner rounded-xl focus:outline-none focus:border-green-700"
                          placeholder="Titolo"
                          name="titolo"
                          onChange={onChange}
                          value={titolo}
                          required
                        />
                      </div>

                      <div className="grid items-center grid-cols-2 py-2 text-left">
                        <p className="px-2 font-semibold text-left text-s">
                          Prezzo
                        </p>
                        <input
                          type="number"
                          className="block w-full px-4 py-2 bg-gray-200 shadow-inner rounded-xl focus:outline-none focus:border-green-700"
                          placeholder="Prezzo €"
                          onChange={onChange}
                          name="prezzo"
                          value={prezzo}
                          required
                          min="0"
                        />
                      </div>

                      <div className="py-2 mt-2">
                        <button
                          className="block w-full p-2 font-bold tracking-wider text-white bg-green-300 shadow-xl rounded-xl hover:bg-green-700"
                          onClick={() => setCount(count + 1)}
                          disabled={count > 2}
                        >
                          Avanti
                        </button>
                      </div>
                    </>
                  ) : null}
                  {count === 2 ? (
                    <>
                      <div className="py-2 text-left">
                        <p className="px-2 font-semibold text-left text-s">
                          Comune
                        </p>
                        <input
                          type="text"
                          className="block w-full px-4 py-2 capitalize bg-gray-200 shadow-inner rounded-xl focus:outline-none focus:border-green-700"
                          placeholder="Comune"
                          name="comune"
                          value={comune}
                          onChange={onChange}
                          required
                        />
                      </div>

                      <div className="flex flex-col py-2 text-sm">
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

                      <div className="grid items-center grid-cols-2 gap-5 my-2 text-sm text-gray-700 options ">
                        <p className="px-2 font-semibold text-left text-s">
                          Condizione{" "}
                        </p>
                        <select
                          className="w-auto p-2 border border-gray-200 appearance-none bg-gray-50 hover:bg-gray-100 focus:outline-none focus:border-gray-300 rounded-xl"
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

                      <div className="grid grid-cols-2 gap-2">
                        <div className="py-2">
                          <button
                            className="block w-full p-2 font-bold tracking-wider text-white bg-red-300 rounded-xl hover:bg-red-400"
                            onClick={() => setCount(count - 1)}
                            disabled={count === 1}
                          >
                            Indietro
                          </button>
                        </div>

                        <div className="py-2">
                          <button
                            className="block w-full p-2 font-bold tracking-wider text-white bg-green-300 rounded-xl hover:bg-green-700"
                            onClick={() => setCount(count + 1)}
                            disabled={count > 2}
                          >
                            Avanti
                          </button>
                        </div>
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
                          ISBN:
                        </p>
                        <div className="block w-full px-4 py-2 text-gray-400 uppercase bg-gray-200 shadow-inner rounded-xl focus:outline-none focus:border-green-700">
                          <p>{isbn}</p>
                        </div>
                      </div>
                      <div className="py-2 text-left">
                        <p className="px-2 font-semibold text-left text-s">
                          Autore:
                        </p>
                        <div className="block w-full px-4 py-2 text-gray-400 capitalize bg-gray-200 shadow-inner rounded-xl focus:outline-none focus:border-green-700">
                          <p>{autore}</p>
                        </div>
                      </div>
                      <div className="py-2 text-left">
                        <p className="px-2 font-semibold text-left text-s">
                          Titolo:
                        </p>
                        <div className="block w-full px-4 py-2 text-gray-400 capitalize bg-gray-200 shadow-inner rounded-xl focus:outline-none focus:border-green-700">
                          <p>{titolo}</p>
                        </div>
                      </div>
                      <div className="py-2 text-left">
                        <p className="px-2 font-semibold text-left text-s">
                          Prezzo:
                        </p>
                        <div className="block w-full px-4 py-2 text-gray-400 capitalize bg-gray-200 shadow-inner rounded-xl focus:outline-none focus:border-green-700">
                          <p>{prezzo} €</p>
                        </div>
                      </div>
                      <div className="py-2 text-left">
                        <p className="px-2 font-semibold text-left text-s">
                          Comune:
                        </p>
                        <div className="block w-full px-4 py-2 text-gray-400 capitalize bg-gray-200 shadow-inner rounded-xl focus:outline-none focus:border-green-700">
                          <p>{comune}</p>
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

                      <div className="grid grid-cols-2 gap-2">
                        <div className="py-2">
                          <button
                            className="block w-full p-2 font-bold tracking-wider text-white bg-red-300 rounded-xl hover:bg-red-400"
                            onClick={() => setCount(count - 1)}
                            disabled={count === 1}
                          >
                            Indietro
                          </button>
                        </div>

                        <div className="py-2">
                          <button
                            type="submit"
                            className="block w-full p-2 font-bold tracking-wider text-white bg-green-500 rounded-xl hover:bg-green-700"
                          >
                            Pubblica
                          </button>
                        </div>
                      </div>
                    </>
                  ) : null}
                </form>
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
  post: PropTypes.object.isRequired,
};

export default connect(null, { addPost })(Sell);
