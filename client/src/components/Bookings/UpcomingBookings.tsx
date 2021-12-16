import Typography from '@material-ui/core/Typography';
import Paper from '@mui/material/Paper';
import BookingCard from './BookingCard';
import useStyles from './useStyles';
import { Booking } from '../../interface/Booking';

interface Props {
  upcomingBookings: Booking[] | null | undefined;
}
const UpcomingBookings = ({ upcomingBookings }: Props): JSX.Element => {
  const classes = useStyles();

  return (
    <Paper elevation={0} className={classes.upcomingBookings}>
      <Typography className={classes.title} variant="h6" gutterBottom>
        Upcoming Bookings:
      </Typography>
      {upcomingBookings ? (
        upcomingBookings.map((booking: Booking) => <BookingCard key={booking._id} booking={booking} />)
      ) : (
        <Typography gutterBottom>You have no past bookings.</Typography>
      )}
    </Paper>
  );
};

export default UpcomingBookings;
