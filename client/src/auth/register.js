
//import { setAlert } from './alert';
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
} from './types';


// Register User
export const register = formData => async dispatch => {
  try {
    const res = await api.post('https://api.rilibro.it/v1/authenticate/register', formData);

    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data
    });
    dispatch(loadUser());
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch({
      type: REGISTER_FAIL
    });
  }
};

