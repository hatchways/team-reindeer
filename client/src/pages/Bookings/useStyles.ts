import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(50),
  },
  bookings: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bookingCalendar: {
    marginTop: theme.spacing(30),
  },
}));

export default useStyles;
