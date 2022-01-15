import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  profile: {
    margin: theme.spacing(10),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  profileInfo1: {
    marginTop: theme.spacing(5),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: '200px',
    textAlign: 'center',
  },
  profileInfo2: {
    display: 'flex',
    alignItems: 'center',
    textTransform: 'capitalize',
    justifyContent: 'space-between',
  },
}));

export default useStyles;
