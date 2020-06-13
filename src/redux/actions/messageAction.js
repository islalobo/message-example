/**
 * Message Actions
 * @description Alert Actions
 */

import axios from 'axios';
import {
  MESSAGE_REQUEST,
  MESSAGE_SUCCESS,
  MESSAGE_FAILURE,
} from '../types';
import Constants from '../../constants';

export const getMessage = (language) => {
  function request(language) { return { type: MESSAGE_REQUEST, language }; }
  function success(message) { return { type: MESSAGE_SUCCESS, message }; }
  function failure(error) { return { type: MESSAGE_FAILURE, error }; }

  return (dispatch) => {
    dispatch(request(language));

    axios({
      method: 'GET',
      headers: {
        'content-type': 'application/json',
      },
      url: `${Constants.RANDOM_SERVICE}?language=${language || 'en'}`, // defaults as english
    })
      .then((response) => {
        dispatch(success(response.data.text));
      })
      .catch((error) => {
        dispatch(failure('Something went wrong. Truly sorry.'));
      });
  };
};

export const sendMessage = (message) => {
  function request(language) { return { type: MESSAGE_REQUEST, language }; }
  function success(message) { return { type: MESSAGE_SUCCESS, message }; }
  function failure(error) { return { type: MESSAGE_FAILURE, error }; }

  return (dispatch) => {
    dispatch(success(message));
  };
};
