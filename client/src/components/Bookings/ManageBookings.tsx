import Box from '@material-ui/core/Box';
import NextBooking from './NextBooking';
import UpcomingBookings from './UpcomingBookings';

const ManageBookings = (): JSX.Element => {
  return (
    <Box>
      <NextBooking />
      <UpcomingBookings />
    </Box>
  );
};

export default ManageBookings;
