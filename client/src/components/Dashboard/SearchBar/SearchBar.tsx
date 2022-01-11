import { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@mui/material/Grid';
import InputAdornment from '@mui/material/InputAdornment';
import DatePicker from '@mui/lab/DatePicker';
import useStyles from './useStyles';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = (): JSX.Element => {
  const [value, setValue] = useState<Date | null>(null);
  const classes = useStyles();
  return (
    <Grid spacing={2} mt={2} className={classes.root}>
      <Grid className={classes.location}>
        <TextField
          id="location"
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
