import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    marginTop: theme.spacing(70),
  },
  dashboard: {
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

export default useStyles;
