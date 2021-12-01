import Box from '@material-ui/core/Box';
import Booking from './Booking';
import UpcomingBookings from './UpcomingBookings';

const ManageBookings = (): JSX.Element => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Booking bookingType="next" start="30 November 2021, 10-12 PM" sitterName="Thomas" status="accepted" />
      <UpcomingBookings />
    </Box>
  );
};

export default ManageBookings;
