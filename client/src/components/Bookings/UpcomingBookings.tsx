import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import Booking from './Booking';
import useStyles from './useStyles';
import { useRequest } from '../../context/useBookingContext';

const UpcomingBookings = (): JSX.Element => {
  const classes = useStyles();
  const request = useRequest();

  return (
    <Card className={classes.upcomingBookings}>
      <Typography className={classes.title} variant="h6" gutterBottom>
        Upcoming Bookings:
      </Typography>
      {request.bookings.slice(1).map((booking, i) => (
        <Booking
          key={i}
          bookingType="upcomings"
          start={booking.start}
          sitterName={booking.sitterName}
          status={booking.status}
        />
      ))}
    </Card>
  );
};

export default UpcomingBookings;
