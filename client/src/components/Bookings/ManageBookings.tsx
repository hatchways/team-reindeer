import Box from '@material-ui/core/Box';
import NextBooking from './NextBooking';
import UpcomingBookings from './UpcomingBookings';
import PastBookings from './PastBookings';
import useStyles from './useStyles';
import useSortedBookings from './useSortedBookings';
import { Booking } from '../../interface/Booking';

const ManageBookings = (): JSX.Element => {
  const classes = useStyles();
  const bookings = useSortedBookings();

  const nextBooking = bookings
    ? bookings.find((booking: Booking) => new Date(booking.duration.start).getTime() > Date.now())
    : null;

  const upcomingBookings = bookings
    ? bookings.filter((booking: Booking) => new Date(booking.duration.start) > new Date()).slice(1)
    : null;

  const pastBookings = bookings
    ? bookings.filter((booking: Booking) => new Date(booking.duration.start) < new Date())
    : null;

  return (
    <Box className={classes.root} display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <NextBooking nextBooking={nextBooking} />
      <UpcomingBookings upcomingBookings={upcomingBookings} />
      <PastBookings pastBookings={pastBookings} />
    </Box>
  );
};

export default ManageBookings;
