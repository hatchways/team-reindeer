import Box from '@material-ui/core/Box';
import BookingCard from './BookingCard';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import useStyles from './useStyles';

const ManageBookings = (): JSX.Element => {
  const classes = useStyles();
  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <BookingCard />
      <Box>
        <Card className={classes.upcomingRoot}>
          <Typography className={classes.title} variant="h6" gutterBottom>
            Upcoming Bookings:
          </Typography>
          <BookingCard />
          <BookingCard />
          <BookingCard />
          <BookingCard />
          <BookingCard />
          <BookingCard />
        </Card>
      </Box>
    </Box>
  );
};

export default ManageBookings;
