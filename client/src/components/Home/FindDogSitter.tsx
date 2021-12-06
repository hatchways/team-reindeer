import { useState } from 'react';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Stack from '@mui/material/Stack';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import Typography from '@material-ui/core/Typography';
import useStyles from './useStyles';

const FindDogSitter = (): JSX.Element => {
  const [value, setValue] = useState<Date | null>(null);
  const classes = useStyles();
  return (
    <Stack spacing={2} mt={2}>
      <Typography className={classes.typography}>where</Typography>
      <TextField id="outlined-basic" label="Anywhere" variant="outlined" />
      <Typography className={classes.typography}>drop in/drop off</Typography>
      <Box display="flex" flexDirection="row">
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            value={value}
            onChange={(newValue) => {
              setValue(newValue);
            }}
            renderInput={(params) => <TextField variant="outlined" {...params} />}
          />
        </LocalizationProvider>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            value={value}
            onChange={(newValue) => {
              setValue(newValue);
            }}
            renderInput={(params) => <TextField variant="outlined" {...params} />}
          />
        </LocalizationProvider>
      </Box>
      <Button color="primary" size="large" className={classes.typography} variant="contained">
        find my dog sitter
      </Button>
    </Stack>
  );
};

export default FindDogSitter;
