import { useState, useEffect } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import useStyles from './useStyles';
import SearchBar from '../../components/Dashboard/SearchBar/SearchBar';
import Listing from '../../components/Dashboard/Listing/Listing';
import { useProfile } from '../../context/useProfileContext';
import { ProfileApiData } from '../../interface/Profile';

export default function Dashboard(): JSX.Element {
  const classes = useStyles();
  const { sitterSearchResults } = useProfile();
  const [sitters, setSitters] = useState<ProfileApiData['success'] | null | undefined>([]);
  const [numOfSitters, setNumOfSitters] = useState(6);

  useEffect(() => {
    const sitterList = sitterSearchResults && sitterSearchResults.slice(0, numOfSitters);
    setSitters(sitterList);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sitterSearchResults, numOfSitters]);

  const handleClick = () => {
    setNumOfSitters((prevState) => prevState * 2);
  };

  return (
    <Grid container component="main" className={`${classes.root} ${classes.dashboard}`}>
      <Typography variant="h4">Your Search Results</Typography>
      <SearchBar />
      <Grid className={classes.listing}>
        {sitters &&
          sitters.map((sitter) => (
            <Listing
              key={sitter._id}
              firstName={sitter.firstName}
              lastName={sitter.lastName}
              description={sitter.description}
              photo={sitter.photo}
              address={sitter.address}
              price={sitter.price}
            />
          ))}
      </Grid>
      <Button size="large" variant="outlined" onClick={handleClick}>
        Show More
      </Button>
    </Grid>
  );
}
