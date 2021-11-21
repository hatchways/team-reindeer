import { useState } from 'react';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Stack from '@mui/material/Stack';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import { Typography } from '@material-ui/core';

const FindDogSitter = (): JSX.Element => {
  const [value, setValue] = useState<Date | null>(null);
  return (
    <Stack spacing={2} mt={2}>
      <Typography>WHERE</Typography>
      <TextField id="outlined-basic" label="Anywhere" variant="outlined" />
      <Typography>DROP IN/DROP OFF</Typography>
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
      <Button color="primary" size="large" variant="contained">
        FIND MY DOG SITTER
      </Button>
    </Stack>
  );
};

export default FindDogSitter;
