import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import useStyles from './useStyles';
import { useHistory } from 'react-router-dom';

const LoggedOutBar = (): JSX.Element => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <Grid container className={classes.navButtons}>
      <Grid item>
        <Button
          component={Link}
          to="/login"
          color={history.location.pathname === '/' ? 'secondary' : 'primary'}
          size="large"
          variant="outlined"
        >
          Login
        </Button>
      </Grid>
      <Grid item>
        <Button component={Link} to="/signup" color="primary" size="large" variant="contained">
          Sign Up
        </Button>
      </Grid>
    </Grid>
  );
};

export default LoggedOutBar;
