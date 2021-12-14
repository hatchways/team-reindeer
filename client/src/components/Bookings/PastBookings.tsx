import Typography from '@material-ui/core/Typography';
import Paper from '@mui/material/Paper';
import BookingCard from './BookingCard';
import useStyles from './useStyles';
import { useRequest } from '../../context/useBookingContext';
import moment from 'moment';
import { Booking } from '../../interface/Booking';

const UpcomingBookings = (): JSX.Element => {
  const classes = useStyles();
  const { bookings } = useRequest();

  const pastBookings = bookings.filter((booking: Booking) => new Date(booking.start) < new Date());

  return (
    <Paper elevation={0} className={classes.bookings}>
      <Typography className={classes.title} variant="h6" gutterBottom>
        Past Bookings:
      </Typography>
      {!Boolean(pastBookings.length) ? (
        <Typography gutterBottom>You have no past bookings.</Typography>
      ) : (
        pastBookings.map((booking: Booking) => (
          <BookingCard
            key={booking.requestId}
            start={moment(booking.start).format('MMMM Do YYYY')}
            status={booking.status}
          />
        ))
      )}
    </Paper>
  );
};

export default UpcomingBookings;
