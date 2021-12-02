import Box from '@material-ui/core/Box';
import NextBooking from './NextBooking';
import UpcomingBookings from './UpcomingBookings';
import PastBookings from './PastBookings';

const ManageBookings = (): JSX.Element => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <NextBooking />
      <UpcomingBookings />
      <PastBookings />
    </Box>
  );
};

export default ManageBookings;
