import { Redirect } from "react-router";
import api from "../utils/api";
import { setAlert } from "./alert";
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
  try {
    const res = await api.get("/v1/authenticate", {
      headers: { "x-auth-token": localStorage.getItem("token") },
    });

    dispatch({
      type: USER_LOADED,
      payload: res.data.data,
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

// Register User
export const register = (formData) => async (dispatch) => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    nome: formData.nome,
    username: formData.username,
    email: formData.email,
    password: formData.password,
    contatti: {
      telefono: formData.telefono,
      email: formData.email2,
      whatsapp: formData.whatsapp,
    },
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  console.log("Sono nella funzione register", formData);

  try {
    await fetch(
      "https://api.rilibro.it/v1/authenticate/register",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => console.log("token", result));
      return <Redirect to="/login" />

  } catch (err) {
    console.log("err", err);
    //onst errors = err.response.data.errors;

    /*if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }

    dispatch({
      type: REGISTER_FAIL,
    });*/
  }
};

// Login User
export const login = (email, password) => async (dispatch) => {
  const body = { email, password };

  try {
    const res = await api.post("/v1/authenticate/login", body);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data.data,
    });

    console.log("res.data", res.data);
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
