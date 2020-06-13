/**
 * Drawer Component
 * @description
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

import { Drawer, Divider, Hidden } from '@material-ui/core';

import SidebarMenu from './SidebarMenu';

const drawerWidth = 240;

const styles = (theme) => ({
  drawerPaper: {
    position: 'fixed',
    width: drawerWidth,
    height: 'calc(100vh)',
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  branding: {
    color: 'black',
    textDecoration: 'none',
    flex: 1,
  },
  logo: { height: 65 },
});

const DrawerComponent = (props) => {
  const { classes, open, user } = props;

  return (
    <div>
      <Hidden smUp implementation="css">
        <Drawer
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <SidebarMenu />
        </Drawer>
      </Hidden>

      <Hidden xsDown implementation="css">
        <Drawer
          variant="persistent"
          anchor="left"
          open
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <Link to="/" className={classes.branding}>
              <img alt="Logo" className={classes.logo} src="logo.png" />
            </Link>
          </div>

          <Divider />

          <SidebarMenu user={user} />
        </Drawer>
      </Hidden>

    </div>
  );
};

export default (withStyles(styles, { withTheme: true })(DrawerComponent));
