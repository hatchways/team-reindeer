import Grid from '@material-ui/core/Grid';
import useStyles from './useStyles';
import banner from '../../Images/banner.jpg';
const Homepage = (): JSX.Element => {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <Grid item sm={6} className={classes.findDogSitter}>
        Left Side
      </Grid>
      <Grid item sm={6} className={classes.banner}>
        <img src={banner} className={classes.image} />
      </Grid>
    </Grid>
  );
};

export default Homepage;
