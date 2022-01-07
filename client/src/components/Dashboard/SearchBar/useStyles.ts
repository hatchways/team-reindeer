import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(70),
    display: 'flex',
    alignItems: 'stretch',
  },
  location: {
    width: '70%',
  },
  date: {
    width: '30%',
  },
}));

export default useStyles;
