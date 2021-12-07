import Typography from '@material-ui/core/Typography';
import Paper from '@mui/material/Paper';
import BookingCard from './BookingCard';
import moment from 'moment';
import useStyles from './useStyles';
import { useRequest } from '../../context/useBookingContext';

const UpcomingBookings = (): JSX.Element => {
  const classes = useStyles();
  const { bookings } = useRequest();
  const upcomingBookings = bookings.filter((booking) => new Date(booking.start) > new Date()).slice(1);

  return (
    <Paper elevation={0} className={classes.upcomingBookings}>
      <Typography className={classes.title} variant="h6" gutterBottom>
        Upcoming Bookings:
      </Typography>
      {!Boolean(upcomingBookings.length) ? (
        <Typography gutterBottom>You have no upcoming bookings.</Typography>
      ) : (
        upcomingBookings.map((booking) => (
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
