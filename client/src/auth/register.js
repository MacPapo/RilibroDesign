//import { setAlert } from './alert';
import { REGISTER_SUCCESS, REGISTER_FAIL } from "./types";

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
    const res = await fetch('https://api.rilibro.it/v1/authenticate/register',{method:'POST',body: JSON.stringify(body)})

    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });
    //dispatch(loadUser());
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      //errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch({
      type: REGISTER_FAIL,
    });
  }
};
