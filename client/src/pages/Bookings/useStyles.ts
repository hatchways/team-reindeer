import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    border: '1px solid black',
    marginTop: theme.spacing(50),
  },
  bookings: {
    border: '1px solid black',
  },
  bookingCalender: {
    border: '1px solid black',
  },
}));

export default useStyles;
