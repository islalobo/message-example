/**
 * Loading Component
 * @description Loading Component
 */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
  },
  bottom: {
    color: theme.palette.grey[theme.palette.type === 'dark' ? 700 : 200],
  },
  top: {
    color: theme.palette.primary.main,
    animationDuration: '1500ms',
    opacity: 0.65,
    position: 'relative',
    left: -40, // NOTE, this moves the circles left the size of the circle in order to align
  },
  circle: {
    strokeLinecap: 'round',
  },
}));

export default function LoadingIndicator() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.root}>
        <CircularProgress
          variant="determinate"
          className={classes.bottom}
          size={40}
          thickness={4}
          value={100}
        />
        <CircularProgress
          variant="indeterminate"
          disableShrink
          className={classes.top}
          classes={{
            circle: classes.circle,
          }}
          size={40}
          thickness={4}
        />
      </div>
    </div>
  );
}
