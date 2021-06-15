import api from "../utils/api";
import { setAlert } from "./alert";
import {ClosingAlert} from "../components/Alert/Alert";

import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
} from "./types";

// Load User
export const loadUser = () => async (dispatch) => {
  console.log("Sono dentro la furnzione LoadUser");

  try {
    const res = await api.get("/v1/authenticate", {
      headers: { "x-auth-token": localStorage.getItem("token") },
    });

    //console.log("Token dell'utente", localStorage.getItem("token"));
    //console.log("variabile res --> ", res);
    //console.log("informazioni dell'utente --> ", res.data);

    dispatch({
      type: USER_LOADED,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

// Register User
export const register = (formData) => async (dispatch) => {
  console.log("Dati utente", formData);
  const body = {
    nome: formData.nome,
    cognome: formData.cognome,
    username: formData.username,
    email: formData.email,
    password: formData.password,
    contatti: {
      telefono: formData.telefono,
      email: formData.email2,
    },
  };

  try {
    const res = await api.post(
      "/v1/authenticate/register",
      JSON.stringify(body)
    );

    console.log("risposta", res);

    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });
    dispatch(loadUser());
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }

    dispatch({
      type: REGISTER_FAIL,
    });
  }
};

// Login User
export const login = (email, password) => async (dispatch) => {
  console.log("Sono dentro la funzione di Login");

  const body = { email, password };

  try {
    const res = await api.post("/v1/authenticate/login", body);

    //console.log("Variabile res --> ", res);
    //console.log("Variabile res.data --> ", res.data);
    //console.log("Variabile res.data.data --> ", res.data.data);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data.data,
    });

    localStorage.setItem("id", res.data.data.id);

    dispatch(loadUser());
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }

    dispatch({
      type: LOGIN_FAIL,
    });
  }
};

// Logout
export const logout = () => ({ type: LOGOUT });
