import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import useStyles from './useStyles';
import SearchBar from '../../components/Dashboard/SearchBar/SearchBar';
import Listing from '../../components/Dashboard/Listing/Listing';
import { mockData } from '../../mocks/mockData';

export default function Dashboard(): JSX.Element {
  const classes = useStyles();

  return (
    <Grid container component="main" className={`${classes.root} ${classes.dashboard}`}>
      <Typography variant="h4">Your Search Results</Typography>
      <SearchBar />
      <Grid className={classes.listing}>
        {mockData &&
          mockData.map((listing) => (
            <Listing
              key={listing.id}
              username={listing.username}
              description={listing.description}
              photo={listing.photo}
              rating={listing.rating}
              location={listing.location}
              price={listing.price}
            />
          ))}
      </Grid>
      <Button size="large" variant="outlined">
        Show More
      </Button>
    </Grid>
  );
}
