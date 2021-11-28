import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  nextBooking: {
    minWidth: 450,
    padding: theme.spacing(5),
    marginTop: theme.spacing(10),
  },
  upcomingBookings: {
    minWidth: 450,
    padding: theme.spacing(5),
    marginTop: theme.spacing(10),
    height: 400,
    overflow: 'auto',
  },
  bookings: {
    padding: theme.spacing(5),
    marginTop: theme.spacing(10),
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  clientName: {
    marginLeft: theme.spacing(10),
  },
  status: {
    textTransform: 'uppercase',
  },
}));

export default useStyles;
