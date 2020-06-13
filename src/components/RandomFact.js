/**
 * Random Facts Component
 * @description Displays a random fact from random APIS
 */

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as PropTypes from 'prop-types';

import { withRouter } from 'react-router-dom';
import Messaging from './Messaging';

import { getMessage } from '../redux/actions/messageAction';
import parseQuery from '../hooks/parseQuery';

const RandomFact = (props) => {
  const dispatch = useDispatch();

  const { message, type } = useSelector((state) => state.message);

  const randomFactRequest = () => {
    const query = props.location.search;
    dispatch(getMessage(parseQuery(query).language));
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

export default withRouter(RandomFact);
