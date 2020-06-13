/**
 * Loading Component
 * @description Loading Component
 */
import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import LoadingIndicator from './LoadingIndicator';

const styles = (theme) => ({
  loading: {
    height: 'calc(100vh)',
  },
});

class Loading extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Grid
        container
        spacing={0}
        direction="row"
        alignItems="center"
        justify="center"
        className={classes.loading}
      >
        <Grid item xs={12} align="center">
          <LoadingIndicator />
          <Typography variant="subtitle1">Working hard or hardly working to get you content.</Typography>
          <Typography variant="subtitle1">One moment!</Typography>
        </Grid>
      </Grid>
    );
  }
}

export default (withStyles(styles, { withTheme: true })(Loading));
