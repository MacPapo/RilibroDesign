import api from '../utils/api';
import { setAlert } from './alert';
import {
  GET_POSTS,
  POST_ERROR,
  UPDATE_LIKES,
  DELETE_POST,
  ADD_POST,
  GET_POST,
  ADD_COMMENT,
  REMOVE_COMMENT
} from './types';

export const addPost = formData => async dispatch => {

    console.log("Sono dentro la funzione add Post, i dati passati sono --> ", formData);

    try {
      const res = await api.post('/v1/posts/add', formData);
        
      console.log("Risposta delle variabile res --> ", res);

      dispatch({
        type: ADD_POST,
        payload: res.data
      });
  
      dispatch(setAlert('Post Created', 'success'));
    } catch (err) {
      dispatch({
        type: POST_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status }
      });
    }
  };