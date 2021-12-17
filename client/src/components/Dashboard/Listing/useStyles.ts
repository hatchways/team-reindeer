import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  profile: {
    margin: theme.spacing(10),
  },
  profileInfo1: {
    marginTop: theme.spacing(5),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: '250px',
  },
  icon: {
    color: '#f14140',
  },
  profileInfo2: {
    display: 'flex',
    justifyContent: 'space-between',
  },
}));

export default useStyles;
