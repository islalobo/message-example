/**
 *
 * Private Route
 *
 * @description
 * Protects restricted routes by requiring token.
 * Token will be in the localStorage or in a query parameter.
 * Sets the application state objects.
 *
 */
import React, { useEffect, useState } from 'react';
import { Redirect, Route } from 'react-router-dom';
import * as PropTypes from 'prop-types';

import Loading from './Loading';
import RandomFact from './RandomFact';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    setTimeout(() => { setAuth(true); }, 1000); // Fake out
  });

  if (auth) {
    return (
      <Route
        {...rest}
        render={(props) => <Component {...props} />}
      />
    );
  }

  return (
    <Route
      {...rest}
      render={(props) => (
        !auth
          ? <Loading />
          : <Redirect to={{ pathname: '/whoops', state: { from: props.location } }} />
      )}
    />
  );
};

RandomFact.propTypes = {
  component: PropTypes.shape({}),
};

RandomFact.defaultProps = {
  component: {},
};

export default (PrivateRoute);
