import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  findDogSitter: {
    marginTop: theme.spacing(50),
    padding: theme.spacing(20, 50),
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(5, 15),
      marginTop: theme.spacing(70),
    },
  },
  banner: {
    minHeight: '100vh',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  image: {
    maxWidth: '100%',
    minHeight: '100vh',
  },
}));

export default useStyles;
