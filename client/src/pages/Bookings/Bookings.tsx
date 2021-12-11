import ManageBookings from '../../components/Bookings/ManageBookings';
import BookingCalendar from '../../components/Bookings/Calendar';
import Grid from '@material-ui/core/Grid';
import useStyles from './useStyles';

const Bookings = (): JSX.Element => {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <Grid item xs={12} md={6} className={classes.bookings}>
        <ManageBookings />
      </Grid>
      <Grid item xs={12} md={6} className={classes.bookingCalendar}>
        <BookingCalendar />
      </Grid>
    </Grid>
  );
};

export default Bookings;
