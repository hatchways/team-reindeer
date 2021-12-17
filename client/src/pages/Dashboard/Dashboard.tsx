import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import useStyles from './useStyles';
import SearchBar from '../../components/Dashboard/SearchBar/SearchBar';
import Listing from '../../components/Dashboard/Listing/Listing';
import { mockData } from './mockData';

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
              profession={listing.profession}
              photo={listing.photo}
              rating={listing.rating}
              location={listing.location}
              rate={listing.rate}
            />
          ))}
      </Grid>
    </Grid>
  );
}
