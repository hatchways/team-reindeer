import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import Booking from './Booking';
import useStyles from './useStyles';
// This array is just for dummy text. It will get removed after integration.
const bookings = [
  { timing: '14 April 2021, 10-12 AM', clientName: 'Sakshi', status: 'accepted' },
  { timing: '02 December 2021, 10-12 AM', clientName: 'Shubham', status: 'declined' },
  { timing: '05 December 2021, 10-12 AM', clientName: 'Guru', status: 'pending' },
];

const UpcomingBookings = (): JSX.Element => {
  const classes = useStyles();
  return (
    <Card className={classes.upcomingBookings}>
      <Typography className={classes.title} variant="h6" gutterBottom>
        Upcoming Bookings:
      </Typography>
      {bookings.map((booking, i) => (
        <Booking
          key={i}
          bookingType="upcomings"
          timing={booking.timing}
          clientName={booking.clientName}
          status={booking.status}
        />
      ))}
    </Card>
  );
};

export default UpcomingBookings;
