import Typography from '@material-ui/core/Typography';
import Paper from '@mui/material/Paper';
import BookingCard from './BookingCard';
import moment from 'moment';
import useStyles from './useStyles';
import { useRequest } from '../../context/useBookingContext';

const UpcomingBookings = (): JSX.Element => {
  const classes = useStyles();
  const { bookings } = useRequest();

  return (
    <Paper elevation={0} className={classes.upcomingBookings}>
      <Typography className={classes.title} variant="h6" gutterBottom>
        Upcoming Bookings:
      </Typography>
      {bookings.slice(1).map((booking) => (
        <BookingCard
          key={booking.requestId}
          status={booking.status}
          start={moment(booking.start).format('MMMM Do YYYY')}
        />
      ))}
    </Paper>
  );
};

export default UpcomingBookings;
