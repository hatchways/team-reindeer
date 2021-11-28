import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import useStyles from './useStyles';
import AvatarDisplay from '../AvatarDisplay/AvatarDisplay';
import SettingsIcon from '@mui/icons-material/Settings';

interface Props {
  bookingType: string;
  timing: string;
  clientName: string;
  status: string;
}

const Booking = ({ bookingType, timing, clientName, status }: Props): JSX.Element => {
  const classes = useStyles();
  return (
    <Card className={bookingType === `next` ? classes.nextBooking : classes.bookings}>
      <Box display="flex" justifyContent="space-between">
        <CardContent>
          {bookingType === 'next' && (
            <Typography className={classes.title} variant="h6" gutterBottom>
              Your Next Booking:
            </Typography>
          )}
          <Typography className={classes.pos} variant="h3">
            {timing}
          </Typography>
          <Box display="flex" alignItems="center">
            <AvatarDisplay />
            <Typography className={classes.clientName} variant="h3" gutterBottom>
              {clientName}
            </Typography>
          </Box>
        </CardContent>
        {bookingType === 'next' ? (
          <SettingsIcon fontSize="small" />
        ) : (
          <Box display="flex" flexDirection="column" alignItems="end" justifyContent="space-around">
            <SettingsIcon fontSize="small" />
            <Typography className={classes.status} color="textSecondary" variant="h6" gutterBottom>
              {status}
            </Typography>
          </Box>
        )}
      </Box>
    </Card>
  );
};

export default Booking;
