/**
 * Main home screen
 * @description Main home screen that displays different card elements
 */

import React, { useState } from 'react';
import { Grid, Typography } from '@material-ui/core';
import * as PropTypes from 'prop-types';
import RandomFact from '../components/RandomFact';

import Dashboard from './Dashboard';

const Main = () => {
  const [hideMessage, setHideMessage] = useState(false);

  return (
    <Dashboard>
      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
        spacing={4}
      >
        <Grid item xs={12} md={10}>
          <Grid item xs={12}><Typography variant="h3">Welcome</Typography></Grid>

          {hideMessage === false
          && (
            <RandomFact response={(response) => { setHideMessage(response); }} />)}

        </Grid>
      </Grid>
    </Dashboard>
  );
};

Main.propTypes = {
  classes: PropTypes.shape({}),
};

Main.defaultProps = {
  classes: {},
};

export default Main;
