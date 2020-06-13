/**
 * Main home screen
 * @description Main home screen that displays different card elements
 */

import React, { useEffect, useState } from 'react';
import { Grid, Typography } from '@material-ui/core';
import * as PropTypes from 'prop-types';
import RandomFact from '../components/RandomFact';

import parseQuery from '../hooks/parseQuery';

import Dashboard from './Dashboard';

const Main = (props) => {
  const query = props.location.search;
  const [language, setLanguage] = useState(parseQuery(query).language); // FIXME, this doesn't handle multiple query params

  useEffect(() => { setLanguage(language); }, [language]);
  const [confirmed, setConfirmed] = useState(false);

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

          {confirmed === false
          && (
            <RandomFact language={language} response={(response) => { setConfirmed(response); }} />)}

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
