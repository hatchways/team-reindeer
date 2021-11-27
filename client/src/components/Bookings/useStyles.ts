import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 450,
    padding: theme.spacing(10),
    marginTop: theme.spacing(10),
  },
  upcomingRoot: {
    width: 450,
    padding: theme.spacing(10),
    marginTop: theme.spacing(10),
    height: 300,
    overflow: 'auto',
  },
  upcomings: {
    padding: theme.spacing(10),
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
}));

export default useStyles;
