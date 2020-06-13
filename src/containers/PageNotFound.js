/**
 *
 * 404 Page Not Found
 * @description
 *
 */

import React from 'react';
import { withRouter } from 'react-router-dom';

import {
  AppBar,
  Grid,
  Toolbar,
  Typography,
  withStyles,
} from '@material-ui/core';

import Constants from '../constants';
import Link from "@material-ui/core/Link";
import * as PropTypes from "prop-types";

const styles = (theme) => ({
  container: {
    height: 'calc(100vh - 64px)',
    backgroundColor: '#D3D7E0',
    backgroundPosition: 'left top',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'scroll',
    backgroundOrigin: 'border-box',
    backgroundSize: '100% 70%',
    '@media ( min-height: 1100px )': {
      backgroundSize: '100% 50%',
    },
  },
  // TODO, move to separate component
  appBar: {
    backgroundColor: 'white',
  },
  logo: {
    height: 65,
  },
  downloadPageTitle: {
    color: theme.palette.grayscale.white,
  },
  image: {
    height: 150,
    [theme.breakpoints.down('sm')]: {
      height: 200,
    },
    [theme.breakpoints.up('md')]: {
      height: 300,
    },
    [theme.breakpoints.up('lg')]: {
      height: 'auto',
    },
  },
});

const PageNotFound = (props) => {
  const { classes } = props;

  return (
    <Grid>
      <AppBar id="header" className={classes.appBar} position="static">
        <Toolbar>
          <Grid
            container
            direction="row"
            alignItems="center"
            className={classes.menuContainer}
          >
            <Grid item xs={2}>
              <a href={Constants.WEBSITE_URL}><img className={classes.logo} src={Constants.LOGO} alt="Yada YadaLogo" /></a>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>

      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        className={classes.container}
        style={{ padding: 25 }}
      >
        <Grid item xs={12} align="center">
          <Typography variant="h1" className={classes.downloadPageTitle} style={{ display: 'none' }}>Page Not Found</Typography>

          <Grid item xs={12} sm={6} md={6}>
            <Typography variant="h2" style={{ fontSize: '2.4rem' }}>Whoops....!</Typography>
          </Grid>

          <Grid item xs={9} sm={8} md={6}>
            <Typography variant="body1" style={{ fontSize: '1.125rem', paddingBottom: 25 }}>
              Seems like you are searching for something that does not exit.
            </Typography>

            <Typography variant="body1" style={{ fontSize: '1.125rem', paddingBottom: 25 }}>
              Let me help with that, head back to the homepage: <Link to="/givemefacts" style={{ cursor: 'pointer' }}>Give Me Facts!</Link>
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

PageNotFound.propTypes = {
  classes: PropTypes.shape({}),
};

PageNotFound.defaultProps = {
  classes: {},
};

export default withRouter(withStyles(styles, { withTheme: true })(PageNotFound));
