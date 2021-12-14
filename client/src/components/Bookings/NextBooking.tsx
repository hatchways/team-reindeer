import BookingCard from './BookingCard';
import Typography from '@material-ui/core/Typography';
import Paper from '@mui/material/Paper';
import { useRequest } from '../../context/useBookingContext';
import useStyles from './useStyles';
import { assetNotNullOrUndefined } from '../../helpers/utils/assetNotNullOrUndefined';
import moment from 'moment';
import { Booking } from '../../interface/Booking';

const NextBooking = (): JSX.Element => {
  const classes = useStyles();
  const { bookings } = useRequest();

  const nextBooking = assetNotNullOrUndefined(
    bookings.find((booking: Booking) => booking.start.getTime() > Date.now()),
  );
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
