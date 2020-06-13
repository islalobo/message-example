/**
 * Random Facts Component
 * @description Displays a random fact from random APIS
 */

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as PropTypes from 'prop-types';

import Messaging from './Messaging';

import { getMessage } from '../redux/actions/messageAction';

const RandomFact = (props) => {
  const dispatch = useDispatch();

  const { message, type } = useSelector((state) => state.message);

  const { language } = props;

  const randomFactRequest = () => {
    dispatch(getMessage(language));
  };

  return (
    <Messaging
      message={message}
      type={type}
      action="GIVE ME FACTS!"
      triggerCallback={randomFactRequest}
    />
  );
};

RandomFact.propTypes = {
  classes: PropTypes.shape({}),
};

RandomFact.defaultProps = {
  classes: {},
};

export default RandomFact;
