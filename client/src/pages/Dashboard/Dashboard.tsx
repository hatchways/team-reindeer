import { useEffect, useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import useStyles from './useStyles';
import SearchBar from '../../components/Dashboard/SearchBar/SearchBar';
import Listing from '../../components/Dashboard/Listing/Listing';
import { useProfile } from '../../context/useProfileContext';
import { Profile, ProfileApiData } from '../../interface/Profile';
import { useLocation } from 'react-router-dom';

export default function Dashboard(): JSX.Element {
  const classes = useStyles();
  const { sitters } = useProfile();
  const [numOfSitters, setNumOfSitters] = useState(6);
  const location = useLocation();
  const [listing, setListing] = useState<ProfileApiData['success'] | null | undefined>();
  useEffect(() => {
    const sitterList = sitters?.slice(0, numOfSitters);
    setListing(sitterList);
  }, [numOfSitters, sitters]);

  const handleClick = () => {
    setNumOfSitters((prevState) => prevState * 2);
  };

  return (
    <Grid container component="main" className={`${classes.root} ${classes.dashboard}`}>
      <Typography variant="h4">Your Search Results</Typography>

      <SearchBar searchQuery={location.state} />
      <Grid className={classes.listing}>
        {listing && listing.length > 0 ? (
          listing.map((sitter: Profile) => (
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
      {listing && listing.length > 0 && (
        <Button size="large" variant="outlined" onClick={handleClick}>
          Show More
        </Button>
      )}
    </Grid>
  );
}
