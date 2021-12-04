import BookingCard from './BookingCard';
import Typography from '@material-ui/core/Typography';
import Paper from '@mui/material/Paper';
import { useRequest } from '../../context/useBookingContext';
import useStyles from './useStyles';
import { checkIfUndefined } from '../../helpers/utils/checkIfUndefined';
import moment from 'moment';

const NextBooking = (): JSX.Element => {
  const classes = useStyles();
  const { bookings } = useRequest();

  // find next Booking
  const nextBooking = checkIfUndefined(bookings.find((booking) => booking.start.getTime() > Date.now()));

  // format start date
  const startDate = moment(nextBooking.start).format('MMMM Do YYYY');

  return (
    <Paper elevation={0} className={classes.bookings}>
      <Typography className={classes.title} variant="h6" gutterBottom>
        Next Bookings:
      </Typography>
      <BookingCard start={startDate} />
    </Paper>
  );
};

export default NextBooking;
