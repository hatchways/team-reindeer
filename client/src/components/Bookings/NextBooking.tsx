import BookingCard from './BookingCard';
import Typography from '@material-ui/core/Typography';
import Paper from '@mui/material/Paper';
import useStyles from './useStyles';
import { Booking } from '../../interface/Booking';

interface Props {
  nextBooking: Booking | null | undefined;
}

const NextBooking = ({ nextBooking }: Props): JSX.Element => {
  const classes = useStyles();

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
