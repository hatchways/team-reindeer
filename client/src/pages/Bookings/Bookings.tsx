import Grid from '@material-ui/core/Grid';
import useStyles from './useStyles';
import Typography from '@material-ui/core/Typography';

const Bookings = (): JSX.Element => {
  const classes = useStyles();
  return (
    <Grid className={classes.root}>
      <Typography variant="h1">My Bookings</Typography>
    </Grid>
  );
};

export default Bookings;
