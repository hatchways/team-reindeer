import Box from '@material-ui/core/Box';
import NextBooking from './NextBooking';
import UpcomingBookings from './UpcomingBookings';
import PastBookings from './PastBookings';
import useStyles from './useStyles';
const ManageBookings = (): JSX.Element => {
  const classes = useStyles();
  return (
    <Box className={classes.root} display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <NextBooking />
      <UpcomingBookings />
      <PastBookings />
    </Box>
  );
};

export default ManageBookings;
