/**
 * Messaging Component
 * @description Messaging Component
 */
import React, { useState } from 'react';

import {
  Grid, IconButton, Typography, withStyles,
} from '@material-ui/core';
// import CloseIcon from '@material-ui/icons/Close';
import classNames from 'classnames';
import Button from '@material-ui/core/Button';

const styles = (theme) => ({
  messageContainer: {
    marginTop:      '2rem',
    paddingLeft:    '1.25rem',
    paddingRight:   '1.25rem',
    paddingTop:     '.75rem',
    paddingBottom:  '.75rem',
    borderRadius:   6,
    borderLeft:     '10px solid',
    boxShadow:      theme.styles.boxShadow, // TODO, this looks bad, is it used anywhere? Make a better boxShadow
  },
  messageAction: {
    textDecoration: 'underline',
    paddingLeft:    '4px',
    cursor:         'pointer',
    fontWeight:     theme.typography.fontWeightBold,
  },
  info: {
    borderColor:      theme.palette.primary.main,
    backgroundColor:  theme.palette.grayscale.light,
  },
  success: {
    borderColor:      theme.palette.success.main,
    backgroundColor:  theme.palette.success.light,
  },
  warning: {
    borderColor:      theme.palette.warning.main,
    backgroundColor:  theme.palette.warning.light,
  },
  error: {
    borderColor:      theme.palette.error.main,
    backgroundColor:  theme.palette.error.light,
  },
  close: {
    padding: '0px !important',
  },
});

const Messaging = (props) => {
  const { classes } = props;

  const [display] = useState('block');
  // const [display, setDisplay] = useState('block');
  //
  // const dismiss = (event, reason) => {
  //   if (reason === 'clickaway') {
  //     return;
  //   }
  //
  //   setDisplay('none');
  // };

  return (
    <div style={{ display }}>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={0}
        className={classNames(classes.messageContainer, classes[`${props.type}`])}
      >
        <Grid item xs={12} align="left">
          <Typography style={{ minHeight: 150 }}>
            {/* Message */}
            {props.message}
          </Typography>
          <Button onClick={props.triggerCallback} className={classes.messageAction}>
            {props.action}
          </Button>
        </Grid>

        {/* <Grid item sm={2} align="right"> */}
        {/*  <IconButton */}
        {/*    key="close" */}
        {/*    aria-label="Close" */}
        {/*    color="inherit" */}
        {/*    className={classes.close} */}
        {/*    onClick={dismiss} */}
        {/*  > */}
        {/*    <CloseIcon style={{ fontSize: 16 }} /> */}
        {/*  </IconButton> */}
        {/* </Grid> */}
      </Grid>
    </div>
  );
};

export default withStyles(styles, { withTheme: true })(Messaging);
