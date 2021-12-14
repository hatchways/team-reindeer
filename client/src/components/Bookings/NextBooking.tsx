import BookingCard from './BookingCard';
import Typography from '@material-ui/core/Typography';
import Paper from '@mui/material/Paper';
import useStyles from './useStyles';
import useSortedBookings from './useSortedBookings';

const NextBooking = (): JSX.Element => {
  const classes = useStyles();
  const bookings = useSortedBookings();

  const nextBooking = bookings
    ? bookings.find((booking) => new Date(booking.duration.start).getTime() > Date.now())
    : null;

  return (
    <Paper elevation={0} className={classes.bookings}>
      <Typography className={classes.title} variant="h6" gutterBottom>
        Next Bookings:
      </Typography>
      {!nextBooking ? <Typography>You have no booking</Typography> : <BookingCard booking={nextBooking} />}
    </Paper>
  );
};

export default NextBooking;
