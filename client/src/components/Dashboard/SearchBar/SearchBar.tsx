import { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@mui/material/Grid';
import InputAdornment from '@mui/material/InputAdornment';
import useStyles from './useStyles';
import SearchIcon from '@mui/icons-material/Search';
import { useProfile } from '../../../context/useProfileContext';
import Button from '@material-ui/core/Button';
import SelectDate from '../../SelectDate/SelectDate';
import { DateProps } from '../../../interface/DateProps';

interface Props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  searchQuery: any;
}

const SearchBar = ({ searchQuery }: Props): JSX.Element => {
  const [search, setSearch] = useState<string | null>(searchQuery && searchQuery.address);
  const [date, setDate] = useState<DateProps>(searchQuery && searchQuery.date);

  const classes = useStyles();
  const { searchSitters } = useProfile();

  const searchSitter = () => {
    searchSitters(search);
  };

  const handleSearch = () => {
    searchSitter();
  };

  const handleChange = (data: DateProps) => {
    setDate(data);
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
        <SelectDate selectedDates={date} handleDates={(e) => handleChange(e)} />
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
