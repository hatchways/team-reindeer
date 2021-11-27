import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import useStyles from './useStyles';
import AvatarDisplay from '../AvatarDisplay/AvatarDisplay';
import SettingsIcon from '@mui/icons-material/Settings';

const BookingCard = (): JSX.Element => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <Box display="flex" justifyContent="space-between">
        <CardContent>
          <Typography className={classes.title} variant="h6" gutterBottom>
            Your Next Booking:
          </Typography>
          <Typography className={classes.pos} variant="h3">
            5 April 2020, 10-12 AM
          </Typography>
          <Box display="flex" alignItems="center">
            <AvatarDisplay />
            <Typography className={classes.clientName} variant="h3" gutterBottom>
              John Doe
            </Typography>
          </Box>
        </CardContent>
        <SettingsIcon />
      </Box>
    </Card>
  );
};

export default BookingCard;
