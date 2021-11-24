import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import useStyles from './useStyles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

const EditForm = () => {
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
      <Grid item xs>
        <Typography className={classes.welcome} component="h1" variant="h5">
          Edit Profile
        </Typography>
      </Grid>
      <form onSubmit={handleSubmit} className={classes.form}>
        <TextField
          fullWidth
          className={classes.inputs}
          label={<Typography className={classes.label}>first name</Typography>}
          type="text"
          name="firstName"
          value={input.firstName}
          onChange={handleChange}
          variant="outlined"
        />
        <TextField
          fullWidth
          className={classes.inputs}
          label={<Typography className={classes.label}>last name</Typography>}
          type="text"
          name="lastName"
          value={input.lastName}
          onChange={handleChange}
          variant="outlined"
        />
        <TextField
          fullWidth
          className={classes.inputs}
          label={<Typography className={classes.label}>birthday</Typography>}
          type="text"
          name="birthday"
          value={input.birthday}
          onChange={handleChange}
          variant="outlined"
        />
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
        <TextField
          fullWidth
          className={classes.inputs}
          label={<Typography className={classes.label}>email</Typography>}
          type="text"
          name="email"
          value={input.email}
          onChange={handleChange}
          variant="outlined"
        />
        <TextField
          fullWidth
          className={classes.inputs}
          label={<Typography className={classes.label}>phone</Typography>}
          type="text"
          name="phone"
          value={input.phone}
          onChange={handleChange}
          variant="outlined"
        />
        <TextField
          fullWidth
          className={classes.inputs}
          label={<Typography className={classes.label}>address</Typography>}
          type="text"
          name="address"
          value={input.address}
          onChange={handleChange}
          variant="outlined"
        />
        <TextField
          fullWidth
          className={classes.inputs}
          label={<Typography className={classes.label}>description</Typography>}
          type="text"
          name="description"
          value={input.description}
          onChange={handleChange}
          variant="outlined"
        />
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
