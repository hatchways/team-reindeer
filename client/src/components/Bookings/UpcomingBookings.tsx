import Typography from '@material-ui/core/Typography';
import Paper from '@mui/material/Paper';
import BookingCard from './BookingCard';
import useStyles from './useStyles';
import useSortedBookings from './useSortedBookings';

const UpcomingBookings = (): JSX.Element => {
  const classes = useStyles();
  const bookings = useSortedBookings();
  const upcomingBookings = bookings
    ? bookings.filter((booking) => new Date(booking.duration.start) > new Date()).slice(1)
    : null;

  return (
    <Paper elevation={0} className={classes.upcomingBookings}>
      <Typography className={classes.title} variant="h6" gutterBottom>
        Upcoming Bookings:
      </Typography>
      {upcomingBookings ? (
        upcomingBookings.map((booking) => <BookingCard key={booking._id} booking={booking} />)
      ) : (
        <Typography gutterBottom>You have no past bookings.</Typography>
      )}
    </Paper>
  );
};

export default UpcomingBookings;
