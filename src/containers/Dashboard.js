/**
 * App Wrapper Component
 * @description App Wrapper Componentgit
 */

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import {
  AppBar,
  Grid,
  Hidden,
  IconButton,
  Toolbar,
  withStyles,
} from '@material-ui/core';

import MenuIcon from '@material-ui/icons/Menu';

import DrawerComponent from '../components/DrawerComponent';

const drawerWidth = 285;

const styles = (theme) => ({
  content: {
    paddingRight: '1.75rem',
    [theme.breakpoints.up('sm')]: {
      paddingLeft: 0,
    },
    [theme.breakpoints.down('xs')]: {
      paddingLeft: '1.75rem',
    },
  },
  contentShift: {
    [theme.breakpoints.up('sm')]: {
      marginLeft: drawerWidth,
    },
    [theme.breakpoints.down('xs')]: {
      marginTop: 50,
    },
  },
  logo: { height: 65 },
});

const Dashboard = (props) => {
  const { classes } = props;

  const [open, setOpen] = useState(false);

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  return (
    <Grid item xs={12}>

      <DrawerComponent open={open} />

      {/*
        *
        * The AppBar && ToolBar are only required on Mobile
        *
        */}
      <Hidden smUp implementation="css">
        <AppBar style={{ backgroundColor: 'white' }}>
          <Toolbar>
            <Grid
              container
              direction="row"
              alignItems="center"
              justify="flex-start"
            >
              <Grid item xs={10} className={classes.children}>
                <Link to="/">
                  <img alt="Logo" className={classes.logo} src="logo.png" />
                </Link>
              </Grid>

              <Grid item xs={2} className={classes.children}>
                <IconButton
                  color="inherit"
                  aria-label="Menu"
                  onClick={handleDrawerToggle}
                >
                  <MenuIcon style={{ color: 'black' }} />
                </IconButton>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </Hidden>

      <main className={classNames(classes.content, classes.contentShift)}>
        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
          spacing={3}
        >
          <Grid item xs={12} md={11} lg={10}>
            { props.children }
          </Grid>
        </Grid>
      </main>
    </Grid>
  );
};

export default withStyles(styles, { withTheme: true })(Dashboard);
