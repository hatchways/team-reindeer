import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(70),
    display: 'flex',
    alignItems: 'center',
  },
  location: {
    width: '50%',
  },
  date: {
    width: '40%',
    display: 'flex',
  },
  searchButton: {
    width: '10%',
    marginLeft: theme.spacing(2.5),
  },
}));

export default useStyles;
