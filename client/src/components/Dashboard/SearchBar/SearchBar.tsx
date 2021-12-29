import { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@mui/material/Grid';
import InputAdornment from '@mui/material/InputAdornment';
import DatePicker from '@mui/lab/DatePicker';
import useStyles from './useStyles';
import SearchIcon from '@mui/icons-material/Search';
import { useProfile } from '../../../context/useProfileContext';
import Button from '@material-ui/core/Button';

interface Props {
  searchQuery: any;
}

const SearchBar = ({ searchQuery }: Props): JSX.Element => {
  const [search, setSearch] = useState<string | null>(searchQuery && searchQuery.address);
  const [start, setStart] = useState<Date | null>(searchQuery && searchQuery.start);
  const [end, setEnd] = useState<Date | null>(searchQuery && searchQuery.end);

  const classes = useStyles();
  const { searchSitters } = useProfile();

  const searchSitter = () => {
    searchSitters(search);
  };

  const handleSearch = () => {
    searchSitter();
  };

  return (
    <Grid spacing={2} mt={2} className={classes.root}>
      <Grid className={classes.location}>
        <TextField
          name="search"
          id="location"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          label="Search By City"
          fullWidth
          variant="outlined"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon htmlColor="#f14140" />
              </InputAdornment>
            ),
          }}
        />
      </Grid>
      <Grid className={classes.date}>
        <DatePicker
          label="Start"
          value={start}
          minDate={new Date()}
          onChange={(newValue) => {
            setStart(newValue);
          }}
          renderInput={(params) => <TextField variant="outlined" {...params} />}
        />
      </Grid>
      <Grid className={classes.date}>
        <DatePicker
          label="End"
          value={end}
          minDate={start}
          onChange={(newValue) => {
            setEnd(newValue);
          }}
          renderInput={(params) => <TextField variant="outlined" {...params} />}
        />
      </Grid>
      <Grid className={classes.searchButton}>
        <Button color="primary" size="small" onClick={handleSearch} variant="contained">
          Search
        </Button>
      </Grid>
    </Grid>
  );
};

export default SearchBar;
