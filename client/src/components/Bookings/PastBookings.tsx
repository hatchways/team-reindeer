import Typography from '@material-ui/core/Typography';
import Paper from '@mui/material/Paper';
import BookingCard from './BookingCard';
import useStyles from './useStyles';
import { Booking } from '../../interface/Booking';

interface Props {
  pastBookings: Booking[] | null | undefined;
}

const PastBookings = ({ pastBookings }: Props): JSX.Element => {
  const classes = useStyles();

  return (
    <Paper elevation={0} className={classes.bookings}>
      <Typography className={classes.title} variant="h6" gutterBottom>
        Past Bookings:
      </Typography>
      {pastBookings ? (
        pastBookings.map((booking: Booking) => <BookingCard key={booking._id} booking={booking} type="pastBookings" />)
      ) : (
        <Typography gutterBottom>You have no past bookings.</Typography>
      )}
    </Paper>
  );
};

export default PastBookings;
