import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(70, 0, 25, 0),
  },
  dashboard: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  listing: {
    marginTop: theme.spacing(10),
    display: 'flex',
    flexWrap: 'wrap',
    width: '80%',
    padding: theme.spacing(5),
    justifyContent: 'center',
  },
}));

export default useStyles;
