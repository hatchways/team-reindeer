import React, { useState } from 'react';
import useStyles from './useStyles';
import { InputLabel, Box, TextField, Button, Typography } from '@material-ui/core';
import TextareaAutosize from 'react-textarea-autosize';

const EditForm = (): JSX.Element => {
  const classes = useStyles();

  const [input, setInput] = useState({
    firstName: '',
    lastName: '',
    gender: '',
    birthday: '',
    email: '',
    phone: '',
    address: '',
    description: '',
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setInput((oldState) => {
      return { ...oldState, [name]: value };
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log('submitted');
  };

  return (
    <div>
      <Typography className={classes.welcome} component="h1" variant="h5">
        Edit Profile
      </Typography>

      <form onSubmit={handleSubmit} className={classes.form}>
        <Box>
          <InputLabel className={classes.inputLabel}>First Name</InputLabel>
          <TextField
            fullWidth
            className={classes.inputs}
            label={<Typography className={classes.label}>John</Typography>}
            type="text"
            name="firstName"
            value={input.firstName}
            onChange={handleChange}
            variant="outlined"
          />
        </Box>
        <Box>
          <InputLabel className={classes.inputLabel}>Last Name</InputLabel>
          <TextField
            fullWidth
            className={classes.inputs}
            label={<Typography className={classes.label}>Doe</Typography>}
            type="text"
            name="lastName"
            value={input.lastName}
            onChange={handleChange}
            variant="outlined"
          />
        </Box>
        <Box>
          <InputLabel className={classes.inputLabel}>Birth Date</InputLabel>
          <TextField
            fullWidth
            className={classes.inputs}
            type="date"
            name="birthday"
            value={input.birthday}
            onChange={handleChange}
            variant="outlined"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Box>
        <Box>
          <InputLabel className={classes.inputLabel}>Gender</InputLabel>
          <TextField
            fullWidth
            className={classes.inputs}
            label={<Typography className={classes.label}>gender</Typography>}
            type="text"
            name="gender"
            value={input.gender}
            onChange={handleChange}
            variant="outlined"
          />
        </Box>
        <Box>
          <InputLabel className={classes.inputLabel}>Email Address</InputLabel>
          <TextField
            fullWidth
            className={classes.inputs}
            label={<Typography className={classes.label}>john-doe@gmail.com</Typography>}
            type="email"
            name="email"
            value={input.email}
            onChange={handleChange}
            variant="outlined"
          />
        </Box>
        <Box>
          <InputLabel className={classes.inputLabel}>Phone Number</InputLabel>
          <TextField
            fullWidth
            className={classes.inputs}
            label={<Typography className={classes.label}>Add a phone number</Typography>}
            type="string"
            name="phone"
            value={input.phone}
            onChange={handleChange}
            variant="outlined"
          />
        </Box>
        <Box>
          <InputLabel className={classes.inputLabel}>Where you Live</InputLabel>
          <TextField
            fullWidth
            className={classes.inputs}
            label={<Typography className={classes.label}>Address</Typography>}
            type="text"
            name="address"
            value={input.address}
            onChange={handleChange}
            variant="outlined"
          />
        </Box>
        <Box>
          <InputLabel className={classes.inputLabel}>Descripe Yourself</InputLabel>
          <TextareaAutosize
            style={{ width: '74%', marginTop: '25px' }}
            minRows={5}
            aria-label="minimum height"
            placeholder="About you"
            name="description"
            value={input.description}
            onChange={handleChange}
          />
        </Box>
        <Box textAlign="center" className={classes.submitDiv}>
          <Button type="submit" size="large" variant="contained" color="primary" className={classes.submit}>
            save
          </Button>
        </Box>
      </form>
    </div>
  );
};

export default EditForm;
