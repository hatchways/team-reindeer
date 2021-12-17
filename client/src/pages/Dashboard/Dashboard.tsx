import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import useStyles from './useStyles';
import SearchBar from '../../components/Dashboard/SearchBar/SearchBar';

export default function Dashboard(): JSX.Element {
  const classes = useStyles();

  return (
    <Grid container component="main" className={`${classes.root} ${classes.dashboard}`}>
      <Typography variant="h4">Your Search Results</Typography>
      <SearchBar />
    </Grid>
  );
}
