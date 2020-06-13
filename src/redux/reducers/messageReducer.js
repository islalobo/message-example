/**
 * Message Reducer
 * @description
 */

import {
  MESSAGE_REQUEST,
  MESSAGE_SUCCESS,
  MESSAGE_FAILURE,
} from '../types';

const initialState = {
  type: '',
  message: 'Welcome! Herzlich Willkommen!',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case MESSAGE_REQUEST:
    case MESSAGE_SUCCESS:
    case MESSAGE_FAILURE:
      // eslint-disable-next-line no-case-declarations
      const typeArray = [
        'info',
        'success',
        'warning',
        'error', // TODO, Error should always be type error color
      ];

      return {
        type: typeArray[Math.floor(Math.random() * typeArray.length)],
        message: action.message,
      };

    default:
      return state;
  }
};
