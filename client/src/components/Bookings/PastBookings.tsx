import Typography from '@material-ui/core/Typography';
import Paper from '@mui/material/Paper';
import BookingCard from './BookingCard';
import useStyles from './useStyles';
import { useRequest } from '../../context/useBookingContext';

const PastBookings = (): JSX.Element => {
  const classes = useStyles();
  const { bookings } = useRequest();

  const pastBookings = bookings ? bookings.filter((booking) => new Date(booking.duration.start) < new Date()) : null;
  return (
    <Paper elevation={0} className={classes.bookings}>
      <Typography className={classes.title} variant="h6" gutterBottom>
        Past Bookings:
      </Typography>
      {pastBookings ? (
        pastBookings.map((booking) => <BookingCard key={booking._id} booking={booking} component="pastBookings" />)
      ) : (
        <Typography gutterBottom>You have no past bookings.</Typography>
      )}
    </Paper>
  );
};

export default PastBookings;
