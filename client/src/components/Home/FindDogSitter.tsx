import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Stack from '@mui/material/Stack';
import { useProfile } from '../../context/useProfileContext';
import Typography from '@material-ui/core/Typography';
import useStyles from './useStyles';
import SelectDate from '../SelectDate/SelectDate';
import { DateProps } from '../../interface/DateProps';

const FindDogSitter = (): JSX.Element => {
  const [search, setSearch] = useState<string | null>(null);
  const [date, setDate] = useState<DateProps>({ start: null, end: null });

  const classes = useStyles();
  const history = useHistory();

  const { searchSitters } = useProfile();

  const searchSitter = () => {
    searchSitters(search);
  };

  const handleSearch = () => {
    searchSitter();
    history.push({
      state: { address: search, date: date },
      pathname: '/dashboard',
    });
  };

  const handleChange = (data: DateProps) => {
    setDate(data);
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
        <SelectDate selectedDates={date} handleDates={(e) => handleChange(e)} />
      </Box>
      <Button color="primary" size="large" onClick={handleSearch} className={classes.typography} variant="contained">
        find my dog sitter
      </Button>
    </Stack>
  );
};

export default FindDogSitter;
