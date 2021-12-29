import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Stack from '@mui/material/Stack';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import { useProfile } from '../../context/useProfileContext';
import Typography from '@material-ui/core/Typography';
import useStyles from './useStyles';

const FindDogSitter = (): JSX.Element => {
  const [search, setSearch] = useState<string | null>(null);
  const [start, setStart] = useState<Date | null>(null);
  const [end, setEnd] = useState<Date | null>(null);
  const classes = useStyles();
  const history = useHistory();

  const { searchSitters } = useProfile();

  const searchSitter = () => {
    searchSitters(search);
  };

  const handleSearch = () => {
    searchSitter();
    history.push({
      pathname: '/dashboard',
      state: { address: search, start: start, end: end },
    });
  };

  return (
    <Stack spacing={2} mt={2}>
      <Typography className={classes.typography}>where</Typography>
      <TextField
        name="search"
        id="location"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        label="Search By City"
        fullWidth
        variant="outlined"
      />
      <Typography className={classes.typography}>drop in/drop off</Typography>
      <Box display="flex" flexDirection="row">
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            label="Drop In"
            value={start}
            minDate={new Date()}
            onChange={(newValue) => {
              setStart(newValue);
            }}
            renderInput={(params) => <TextField variant="outlined" {...params} />}
          />
        </LocalizationProvider>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            label="Drop Off"
            value={end}
            minDate={start}
            onChange={(newValue) => {
              setEnd(newValue);
            }}
            renderInput={(params) => <TextField variant="outlined" {...params} />}
          />
        </LocalizationProvider>
      </Box>
      <Button color="primary" size="large" onClick={handleSearch} className={classes.typography} variant="contained">
        find my dog sitter
      </Button>
    </Stack>
  );
};

export default FindDogSitter;
