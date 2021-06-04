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
    const res = await api.get("/v1/authenticate");
    // localStorage.setItem(res.data.data.id)
    dispatch({
      type: USER_LOADED,
      payload: res.data.data,
      // id: localStorage.setItem('id', res.data.data.id)
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

// Register User
export const register = (formData) => async (dispatch) => {
  const body = {
    nome: formData.nome,
    username: formData.username,
    email: formData.email,
    password: formData.password,
    contatti: {
      telefono: formData.telefono,
      email: formData.email2,
      whatsapp: formData.whatsapp,
    },
  };
  try {
    const res = await fetch("https://api.rilibro.it/v1/authenticate/register", {
      method: "POST",
      body: JSON.stringify(body),
    });

    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data.data,
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
