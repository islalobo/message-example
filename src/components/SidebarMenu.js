/**
 * Sidebar Menu Component
 * @description Sidebar Menu Component
 */

import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import {
  ListItemText,
  Grid,
  Button,
  MenuItem,
  Divider,
} from '@material-ui/core';

import { sendMessage } from '../redux/actions/messageAction';

const SidebarMenu = (props) => {
  const dispatch = useDispatch();

  const { pathname } = props.location;

  const isActive = (pathname, item) => {
    if (pathname.pathname.replace('/', '') === item) {
      return true;
    }
  };

  const handleLogout = () => {
    dispatch(sendMessage('goodbye'));
  };

  return (
    <div>
      <NavLink to="givemefacts" style={{ textDecoration: 'none' }}>
        <MenuItem button selected={isActive({ pathname }, 'givemefacts')}>
          <ListItemText primary="Facts" />
        </MenuItem>
      </NavLink>

      <NavLink to="givemefacts?language=en" style={{ textDecoration: 'none' }}>
        <MenuItem button selected={isActive({ pathname }, 'givemefacts?language=en')}>
          <ListItemText primary="English" />
        </MenuItem>
      </NavLink>

      <NavLink to="givemefacts" style={{ textDecoration: 'none' }}>
        <MenuItem button selected={isActive({ pathname }, 'givemefacts?language=de')}>
          <ListItemText primary="German" />
        </MenuItem>
      </NavLink>

      <Divider />

      <Grid
        container
        direction="row"
        justify="center"
        alignItems="flex-end"
        style={{ height: 'calc(100vh - 225px)' }}
      >
        <Grid item>
          <Button type="submit" variant="outlined" onClick={handleLogout}>Log out</Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default withRouter(SidebarMenu);
