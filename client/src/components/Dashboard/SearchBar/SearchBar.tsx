import { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@mui/material/Grid';
import InputAdornment from '@mui/material/InputAdornment';
import DatePicker from '@mui/lab/DatePicker';
import useStyles from './useStyles';
import SearchIcon from '@mui/icons-material/Search';
import { useProfile } from '../../../context/useProfileContext';

const SearchBar = (): JSX.Element => {
  const [value, setValue] = useState<Date | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const { updateSearch } = useProfile();
  const classes = useStyles();

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    updateSearch(event.target.value);
  };

  return (
    <Grid mt={2} className={classes.root}>
      <Grid className={classes.location}>
        <TextField
          id="location"
          label="Search By City"
          fullWidth
          value={searchTerm}
          variant="outlined"
          onChange={handleSearch}
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
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(params) => <TextField variant="outlined" {...params} />}
        />
      </Grid>
      <Grid className={classes.date}>
        <DatePicker
          label="End"
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(params) => <TextField variant="outlined" {...params} />}
        />
      </Grid>
    </Grid>
  );
};

export default SearchBar;
