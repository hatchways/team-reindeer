import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(70),
    display: 'flex',
    alignItems: 'center',
  },
  location: {
    width: '60%',
  },
  date: {
    width: '30%',
  },
  searchButton: {
    width: '10%',
    marginLeft: theme.spacing(2.5),
  },
}));

export default useStyles;
