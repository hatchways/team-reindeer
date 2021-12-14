import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import useStyles from './useStyles';
import AvatarDisplay from '../AvatarDisplay/AvatarDisplay';
import { Booking } from '../../interface/Booking';
import moment from 'moment';
import BookingMenu from './BookingMenu';

interface Props {
  booking: Booking;
  type?: string;
}

const BookingCard = ({ booking, type }: Props): JSX.Element => {
  const classes = useStyles();
  const { duration, status, _id, owner, sitter } = booking;

  const startDate = moment(duration.start).format('MMMM Do YYYY, h:mm A');
  return (
    <Card className={classes.bookings}>
      <Box display="flex" justifyContent="space-between">
        <CardContent>
          <Typography className={classes.pos} variant="h3">
            {startDate}
          </Typography>
        </CardContent>
        {type === 'pastBookings' ? null : <BookingMenu sitterId={sitter._id} status={status} id={_id} />}
      </Box>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Box display="flex" alignItems="center">
          <AvatarDisplay />
          <Typography className={classes.clientName} variant="h3" gutterBottom>
            {owner.username}
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
