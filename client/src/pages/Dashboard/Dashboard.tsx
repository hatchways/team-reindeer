import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import useStyles from './useStyles';
import SearchBar from '../../components/Dashboard/SearchBar/SearchBar';
import Listing from '../../components/Dashboard/Listing/Listing';
import { useProfile } from '../../context/useProfileContext';
import { Profile } from '../../interface/Profile';

export default function Dashboard(): JSX.Element {
  const classes = useStyles();
  const { sitters } = useProfile();

  return (
    <Grid container component="main" className={`${classes.root} ${classes.dashboard}`}>
      <Typography variant="h4">Your Search Results</Typography>
      <SearchBar />
      <Grid className={classes.listing}>
        {sitters && sitters.length > 0 ? (
          sitters.map((sitter: Profile) => (
            <Listing
              key={sitter._id}
              firstName={sitter.firstName}
              lastName={sitter.lastName}
              description={sitter.description}
              photo={sitter.photo}
              address={sitter.address}
              price={sitter.price}
            />
          ))
        ) : (
          <Typography variant="h4">No Sitters Found</Typography>
        )}
      </Grid>
      {sitters && sitters.length > 0 && (
        <Button size="large" variant="outlined">
          Show More
        </Button>
      )}
    </Grid>
  );
}
