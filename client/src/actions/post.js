import api from "../utils/api";
import { setAlert } from "./alert";
import {
  GET_POSTS,
  POST_ERROR,
  UPDATE_LIKES,
  DELETE_POST,
  ADD_POST,
  GET_POST,
  ADD_COMMENT,
  REMOVE_COMMENT,
} from "./types";

export const addPost = (formData) => async (dispatch) => {
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  let myResponse;

  const response = await fetch(
    `https://api.rilibro.it/v1/towns/getTownInfo?nome=${formData.comune}`,
    requestOptions,
    {}
  )
    .then((response) => response.json())
    .then((result) => (myResponse = result))
    .catch((error) => console.log("error", error));

  console.log("Regione e Provincia", myResponse);

  console.log(
    "Sono dentro la funzione add Post, i dati passati sono --> ",
    formData,
    "il token vale --> ",
    localStorage.getItem("token")
  );

  const body = {
    libro: {
      titolo: formData.titolo,
      sottotitolo: formData.sottotitolo,
      autore: formData.autore,
      ISBN: formData.isbn,
      condizione: formData.condizione,
      immagine: formData.immagine,
      descrizione: formData.descrizione,
    },
    utente: formData.id,
    location: {
      regione: myResponse.nome_regione,
      provincia: myResponse.nome_provincia,
      comune: formData.comune,
    },
  };

  try {
    const res = await api.post("/v1/posts/add", JSON.stringify(body), {
      headers: { "x-auth-token": localStorage.getItem("token") },
    });

    console.log("Risposta delle variabile res --> ", res);

    dispatch({
      type: ADD_POST,
      payload: res.data,
    });

    dispatch(setAlert("Post Created", "success"));
  } catch (err) {
    dispatch({
      type: POST_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
