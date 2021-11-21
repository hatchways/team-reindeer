import Grid from '@material-ui/core/Grid';
import useStyles from './useStyles';
import banner from '../../Images/banner.jpg';
import { Typography } from '@material-ui/core';
import FindDogSitter from '../../components/Home/FindDogSitter';
const Homepage = (): JSX.Element => {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item sm={6} className={classes.findDogSitter} direction="column">
        <Typography variant="h2" className="heading">
          Find the care your dog deserves
        </Typography>
        <FindDogSitter />
      </Grid>
      <Grid item sm={6} className={classes.banner}>
        <img src={banner} className={classes.image} />
      </Grid>
    </Grid>
  );
};

export default Homepage;
