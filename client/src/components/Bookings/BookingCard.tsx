import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import useStyles from './useStyles';
import AvatarDisplay from '../AvatarDisplay/AvatarDisplay';
import SettingsIcon from '@mui/icons-material/Settings';

interface Props {
  requestId?: string;
  userId?: string;
  start: string;
  sitterId?: string;
  status?: string;
}

const BookingCard = ({ start, status }: Props): JSX.Element => {
  const classes = useStyles();
  return (
    <Card className={classes.bookings}>
      <Box display="flex" justifyContent="space-between">
        <CardContent>
          <Typography className={classes.pos} variant="h3">
            {start}
          </Typography>
        </CardContent>
        <SettingsIcon fontSize="small" />
      </Box>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Box display="flex" alignItems="center">
          <AvatarDisplay />
          <Typography className={classes.clientName} variant="h3" gutterBottom>
            Name of Dog Owner
          </Typography>
        </Box>
        <Typography className={classes.status} color="textSecondary" variant="h6" gutterBottom>
          {status}
        </Typography>
      </Box>
    </Card>
  );
};

export default BookingCard;
