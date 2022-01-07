import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
  root: {
    width: '400px',
  },
  upcomingBookings: {
    width: '100%',
    padding: theme.spacing(5),
    marginTop: theme.spacing(10),
  },

  bookings: {
    width: '100%',
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
  calendar: {
    border: '1px solid black',
    backgroundcolor: theme.palette.primary.main,
  },
}));

export default useStyles;
