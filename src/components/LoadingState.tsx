import React, { useState, useEffect } from 'react';
import { Box, CircularProgress, Skeleton, generateUtilityClasses, Theme, SxProps, Grid } from '@mui/material';
import clsx from 'clsx';

interface LoadingStateProps {
  className?: string;
  sx?: SxProps<Theme>;
}

const classes = generateUtilityClasses('LoadingState', ['root', 'spinner', 'skeleton', 'gridContainer', 'gridItem']);

const styles = (theme: Theme) => ({
  [`&.${classes.root}`]: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(2),
    alignItems: 'center',
    justifyContent: 'center',
  },
  [`& .${classes.spinner}`]: {
    margin: '24px auto',
  },
  [`& .${classes.skeleton}`]: {
    width: '100%',
  },
  [`& .${classes.gridContainer}`]: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: theme.spacing(1),
    justifyContent: 'space-between',
  },
  [`& .${classes.gridItem}`]: {
    flex: 1,
  },
});

const LoadingState: React.FC<LoadingStateProps> = ({ className, sx }) => {
  const [showSpinner, setShowSpinner] = useState(true);

  useEffect(() => {
    const spinnerTimeout = setTimeout(() => {
      setShowSpinner(false);
    }, 150);

    return () => clearTimeout(spinnerTimeout);
  }, []);

  return (
    <Box className={clsx(classes.root, className)} sx={sx ? [...(Array.isArray(sx) ? sx : [sx]), styles] : styles}>
      {showSpinner ?( <CircularProgress className={classes.spinner} />) : (
        <>
          <Skeleton className={classes.skeleton} variant="text" sx={{ height: '18px' }} />
          <Grid container spacing={1} className={classes.gridContainer}>
            <Grid item xs={10} className={classes.gridItem}>
              <Skeleton className={classes.skeleton} variant="rectangular" sx={{ height: '96px' }} />
            </Grid>
            <Grid item xs={2} className={classes.gridItem}>
              <Skeleton className={classes.skeleton} variant="rectangular" sx={{ height: '96px' }} />
            </Grid>
          </Grid>
          <Skeleton className={classes.skeleton} variant="rectangular" sx={{ height: '56px' }} />
          <Grid container spacing={1} className={classes.gridContainer}>
            <Grid item xs={5} className={classes.gridItem}>
              <Skeleton className={classes.skeleton} variant="rectangular" sx={{ height: '24px' }} />
            </Grid>
            <Grid item xs={7} className={classes.gridItem}>
              <Skeleton className={classes.skeleton} variant="rectangular" sx={{ height: '50px' }} />
            </Grid>
          </Grid>
          <Grid container spacing={1} className={classes.gridContainer}>
            <Grid item xs={6} className={classes.gridItem}>
              <Skeleton className={classes.skeleton} variant="rectangular" sx={{ height: '50px' }} />
            </Grid>
            <Grid item xs={6} className={classes.gridItem}>
              <Skeleton className={classes.skeleton} variant="rectangular" sx={{ height: '50px' }} />
            </Grid>
          </Grid>
          <Skeleton className={classes.skeleton} variant="rectangular" sx={{ height: '150px' }} />
        </>
      )}
    </Box>
  );
};

export default LoadingState;
