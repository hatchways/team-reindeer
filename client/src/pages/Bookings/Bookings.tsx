import Grid from '@material-ui/core/Grid';
import useStyles from './useStyles';
import ManageBookings from '../../components/Bookings/ManageBookings';
import Calender from '../../components/Bookings/Calender';

const Bookings = (): JSX.Element => {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <Grid item xs={12} sm={6} className={classes.bookings}>
        <ManageBookings />
      </Grid>
      <Grid item xs={12} sm={6} className={classes.bookingCalender}>
        <Calender />
      </Grid>
    </Grid>
  );
};

export default Bookings;
